const express = require('express');
const router = express.Router();
const { verifyWebhookSignature } = require('../services/razorpayService');
const { handlePaymentSuccess } = require('./checkout');

// ─── POST /api/webhook/razorpay ───────────────────────────────────────────────
router.post('/razorpay', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    if (!signature) {
      console.warn('[Webhook] Missing x-razorpay-signature header');
      return res.status(400).json({ error: 'Missing signature' });
    }

    // req.rawBody must be populated by the raw body parser
    const rawBody = req.rawBody || JSON.stringify(req.body);
    const isValid = verifyWebhookSignature(rawBody, signature);

    if (!isValid) {
      console.warn('[Webhook] Invalid signature received on Razorpay webhook');
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const event = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
    const eventType = event.event;
    console.log(`[Webhook] Received Razorpay event: ${eventType}`);

    if (eventType === 'payment.captured' || eventType === 'order.paid') {
      const paymentEntity = event.payload?.payment?.entity;
      const orderId = paymentEntity?.order_id || event.payload?.order?.entity?.id;
      const paymentId = paymentEntity?.id;

      if (orderId && paymentId) {
        console.log(`[Webhook] Processing payment success for order ${orderId}, payment ${paymentId}`);
        const result = await handlePaymentSuccess(orderId, paymentId);
        console.log(`[Webhook] Result for order ${orderId}:`, result);
      }
    }

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('[Webhook Error]', err.message);
    // Return 200/500 depending on retries - 500 triggers Razorpay webhook retry
    return res.status(500).json({ error: 'Webhook processing error' });
  }
});

module.exports = router;
