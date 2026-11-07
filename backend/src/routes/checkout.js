const express = require('express');
const router = express.Router();
const pool = require('../db/index');
const razorpayService = require('../services/razorpayService');
const { sendCommissionEmail, sendOrderConfirmationEmail } = require('../services/emailService');

const BASE_AMOUNT = 410000;   // ₹4,100 in paise
const DISCOUNT_AMOUNT = 50000; // ₹500 in paise
const COMMISSION_AMOUNT = 50000; // ₹500 in paise
const PAID_STATUSES = ['PAID', 'CONFIRMED', 'SHIPPED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED'];

// ─── Helper: insert / mark an order as paid and create commission + email ──────
async function handlePaymentSuccess(razorpayOrderId, razorpayPaymentId) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Check if order already exists in DB (e.g. from webhook or previous attempt)
    const existingRes = await client.query(
      'SELECT * FROM orders WHERE razorpay_order_id = $1 FOR UPDATE',
      [razorpayOrderId]
    );

    let order;
    let newlyPaid = false;

    if (existingRes.rowCount > 0) {
      order = existingRes.rows[0];
      if (!PAID_STATUSES.includes(order.status)) {
        const updatedRes = await client.query(
          `UPDATE orders
           SET status = 'PAID', razorpay_payment_id = $1, paid_at = COALESCE(paid_at, NOW())
           WHERE id = $2
           RETURNING *`,
          [razorpayPaymentId, order.id]
        );
        order = updatedRes.rows[0];
        newlyPaid = true;
      }
    } else {
      // Orders are persisted before the Razorpay checkout is shown. Refuse an
      // unknown id rather than trusting prices or affiliate data from a client.
      throw new Error(`Unknown Razorpay order: ${razorpayOrderId}`);
    }

    let commissionCreated = false;
    let affiliateData = null;

    // Create commission if affiliate code was used
    if (order.affiliate_id) {
      const now = new Date();
      const periodMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

      // Idempotent insert — one commission per order
      const commRes = await client.query(
        `INSERT INTO commissions (affiliate_id, order_id, amount, period_month)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (order_id) DO NOTHING
         RETURNING id`,
        [order.affiliate_id, order.id, COMMISSION_AMOUNT, periodMonth]
      );

      if (commRes.rowCount > 0) {
        commissionCreated = true;
        const commissionId = commRes.rows[0].id;

        // Fetch affiliate for email
        const affRes = await client.query(
          'SELECT id, name, email, code FROM affiliates WHERE id = $1',
          [order.affiliate_id]
        );
        if (affRes.rowCount > 0) {
          affiliateData = { ...affRes.rows[0], commissionId };
        }
      }
    }

    await client.query('COMMIT');

    // Send emails outside the transaction
    // 1. Commission email to influencer (if applicable)
    if (commissionCreated && affiliateData) {
      const emailSent = await sendCommissionEmail({
        influencerName: affiliateData.name,
        influencerEmail: affiliateData.email,
        affiliateCode: affiliateData.code,
        commissionAmount: COMMISSION_AMOUNT,
        orderDate: new Date(),
      });

      if (emailSent) {
        await pool.query(
          'UPDATE commissions SET email_sent = TRUE WHERE id = $1',
          [affiliateData.commissionId]
        );
      }
    }

    // 2. Schedule order confirmation:
    // Initial status is PAID. After 30 seconds, automatically convert status to CONFIRMED in DB
    // and send the first email to the customer saying the order is paid and confirmed.
    if (newlyPaid) setTimeout(async () => {
      try {
        await pool.query(
          `UPDATE orders SET status = 'CONFIRMED' WHERE id = $1 AND status = 'PAID'`,
          [order.id]
        );
        console.log(`[Order Lifecycle] Order ${order.id} automatically advanced to CONFIRMED (30s after payment).`);

        if (order.customer_email) {
          await sendOrderConfirmationEmail({
            customerName: order.customer_name || 'there',
            customerEmail: order.customer_email,
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
            amount: order.final_amount,
            address: {
              addressLine1: order.address_line1,
              addressLine2: order.address_line2,
              city: order.city,
              state: order.state,
              pincode: order.pincode,
              country: order.country,
            },
          });
        }
      } catch (delayErr) {
        console.error(`[Order Lifecycle] Error during 30s CONFIRMED advancement for order ${order.id}:`, delayErr.message);
      }
    }, 30000); // 30 seconds

    return { success: true, status: order.status, order, alreadyProcessed: !newlyPaid };
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

// ─── POST /api/validate-code ─────────────────────────────────────────────────
router.post('/validate-code', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code || typeof code !== 'string' || code.trim() === '') {
      return res.status(400).json({ valid: false, message: 'Code is required' });
    }

    const cleanCode = code.trim().toUpperCase();

    const result = await pool.query(
      'SELECT id, name, code, is_active FROM affiliates WHERE UPPER(code) = UPPER($1)',
      [cleanCode]
    );

    if (result.rowCount === 0 || !result.rows[0].is_active) {
      return res.json({ valid: false, message: 'Invalid or inactive code' });
    }

    const affiliate = result.rows[0];
    return res.json({
      valid: true,
      discountAmount: DISCOUNT_AMOUNT / 100,
      affiliateName: affiliate.name,
      code: affiliate.code.toUpperCase(),
    });
  } catch (err) {
    console.error('[validate-code]', err.message);
    return res.status(503).json({ valid: false, message: 'Affiliate service is temporarily unavailable' });
  }
});

// ─── POST /api/orders/create ──────────────────────────────────────────────────
router.post('/orders/create', async (req, res) => {
  try {
    const {
      affiliateCode,
      customerName,
      customerEmail,
      customerPhone,
      customerAge,
      customerOccupation,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country,
    } = req.body;

    let affiliateId = null;
    let affiliateCodeUsed = null;
    let discountAmount = 0;
    let finalAmount = BASE_AMOUNT;

    // Validate affiliate code if provided
    if (affiliateCode && affiliateCode.trim() !== '') {
      const cleanCode = affiliateCode.trim().toUpperCase();

      const affResult = await pool.query(
        'SELECT id, code FROM affiliates WHERE UPPER(code) = UPPER($1) AND is_active = TRUE',
        [cleanCode]
      );

      if (affResult.rowCount === 0) {
        return res.status(400).json({ error: 'Invalid or inactive affiliate code' });
      }

      affiliateId = affResult.rows[0].id;
      affiliateCodeUsed = affResult.rows[0].code.toUpperCase();
      discountAmount = DISCOUNT_AMOUNT;
      finalAmount = BASE_AMOUNT - DISCOUNT_AMOUNT;
    }

    // Create Razorpay order (with metadata in notes)
    const receipt = `skye-${Date.now()}`;
    const rzpOrder = await razorpayService.createOrder(finalAmount, receipt, {
      affiliateCode: affiliateCodeUsed || '',
      customerName: customerName || '',
      customerEmail: customerEmail || '',
      customerPhone: customerPhone || '',
      customerAge: customerAge || '',
      customerOccupation: customerOccupation || '',
      addressLine1: addressLine1 || '',
      addressLine2: addressLine2 || '',
      city: city || '',
      state: state || '',
      pincode: pincode || '',
      country: country || 'India',
    });

    // Persist attribution before returning the Razorpay id. This lets either
    // the webhook or browser verification safely complete the same order.
    await pool.query(
      `INSERT INTO orders
         (razorpay_order_id, affiliate_id, affiliate_code_used,
          base_amount, discount_amount, final_amount,
          customer_name, customer_email, customer_phone,
          customer_age, customer_occupation,
          address_line1, address_line2, city, state, pincode, country, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 'CREATED')`,
      [
        rzpOrder.id, affiliateId, affiliateCodeUsed,
        BASE_AMOUNT, discountAmount, finalAmount,
        customerName || null, customerEmail || null, customerPhone || null,
        customerAge || null, customerOccupation || null,
        addressLine1 || null, addressLine2 || null, city || null, state || null,
        pincode || null, country || 'India',
      ]
    );

    return res.json({
      orderId: rzpOrder.id,
      amount: finalAmount,
      currency: 'INR',
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error('[orders/create]', err.message);
    return res.status(500).json({ error: 'Failed to create order' });
  }
});

// ─── POST /api/orders/verify ──────────────────────────────────────────────────
router.post('/orders/verify', async (req, res) => {
  try {
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = req.body;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return res.status(400).json({ error: 'Missing payment details' });
    }

    // Verify HMAC signature
    const isValid = razorpayService.verifyPaymentSignature(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    );

    if (!isValid) {
      console.warn('[orders/verify] Invalid signature for order:', razorpayOrderId);
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    const result = await handlePaymentSuccess(razorpayOrderId, razorpayPaymentId);

    return res.json({ 
      success: true, 
      verified: true, 
      alreadyProcessed: result.alreadyProcessed || false,
      razorpayPaymentId 
    });
  } catch (err) {
    console.error('[orders/verify]', err.message);
    return res.status(500).json({ error: 'Payment verification failed', message: err.message });
  }
});

module.exports = { router, handlePaymentSuccess };
