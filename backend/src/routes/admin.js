const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../db/index');
const { adminAuth } = require('../middleware/auth');
const { sendStatusUpdateEmail } = require('../services/emailService');

// ─── POST /api/admin/login ───────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    if (!process.env.ADMIN_PASSWORD) {
      console.error('[Admin Login] ADMIN_PASSWORD environment variable is not configured');
      return res.status(500).json({ error: 'Server misconfiguration' });
    }

    if (password.trim() !== process.env.ADMIN_PASSWORD.trim()) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { role: 'admin', timestamp: Date.now() },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({ token, message: 'Authentication successful' });
  } catch (err) {
    console.error('[Admin Login]', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// All routes below require admin authentication
router.use(adminAuth);

// ─── GET /api/admin/affiliates ────────────────────────────────────────────────
router.get('/affiliates', async (req, res) => {
  try {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    const query = `
      SELECT 
        a.id,
        a.name,
        a.email,
        a.code,
        a.is_active,
        a.created_at,
        COUNT(DISTINCT CASE WHEN o.status = 'PAID' THEN o.id END)::int AS total_sales_count,
        COALESCE(SUM(CASE WHEN o.status = 'PAID' THEN o.final_amount END), 0)::bigint AS total_sales_volume,
        COUNT(DISTINCT CASE WHEN c.period_month = $1 THEN c.id END)::int AS current_month_commissions_count,
        COALESCE(SUM(CASE WHEN c.period_month = $1 THEN c.amount END), 0)::bigint AS current_month_commission_amount,
        COALESCE(SUM(c.amount), 0)::bigint AS lifetime_commission_amount
      FROM affiliates a
      LEFT JOIN orders o ON o.affiliate_id = a.id
      LEFT JOIN commissions c ON c.affiliate_id = a.id
      GROUP BY a.id
      ORDER BY a.created_at DESC
    `;

    const result = await pool.query(query, [currentMonth]);
    return res.json({ affiliates: result.rows });
  } catch (err) {
    console.error('[Admin Get Affiliates]', err.message);
    return res.status(500).json({ error: 'Failed to fetch affiliates' });
  }
});

// ─── POST /api/admin/affiliates ───────────────────────────────────────────────
router.post('/affiliates', async (req, res) => {
  try {
    const { name, email, code } = req.body;

    if (!name || !email || !code) {
      return res.status(400).json({ error: 'Name, email, and code are required' });
    }

    const cleanCode = code.trim().toUpperCase();
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    // Check uniqueness
    const existing = await pool.query(
      'SELECT id FROM affiliates WHERE UPPER(code) = $1 OR LOWER(email) = $2',
      [cleanCode, cleanEmail]
    );

    if (existing.rowCount > 0) {
      return res.status(409).json({ error: 'Affiliate code or email already exists' });
    }

    const result = await pool.query(
      `INSERT INTO affiliates (name, email, code)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, code, is_active, created_at`,
      [cleanName, cleanEmail, cleanCode]
    );

    return res.status(201).json({ affiliate: result.rows[0] });
  } catch (err) {
    console.error('[Admin Create Affiliate]', err.message);
    return res.status(500).json({ error: 'Failed to create affiliate' });
  }
});

// ─── PATCH /api/admin/affiliates/:id ──────────────────────────────────────────
router.patch('/affiliates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, code, is_active } = req.body;

    const fields = [];
    const values = [];
    let idx = 1;

    if (name !== undefined) {
      fields.push(`name = $${idx++}`);
      values.push(name.trim());
    }
    if (email !== undefined) {
      fields.push(`email = $${idx++}`);
      values.push(email.trim().toLowerCase());
    }
    if (code !== undefined) {
      fields.push(`code = $${idx++}`);
      values.push(code.trim().toUpperCase());
    }
    if (is_active !== undefined) {
      fields.push(`is_active = $${idx++}`);
      values.push(Boolean(is_active));
    }

    if (fields.length === 0) {
      return res.status(400).json({ error: 'No fields provided for update' });
    }

    values.push(id);
    const query = `
      UPDATE affiliates
      SET ${fields.join(', ')}
      WHERE id = $${idx}
      RETURNING id, name, email, code, is_active, created_at
    `;

    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Affiliate not found' });
    }

    return res.json({ affiliate: result.rows[0] });
  } catch (err) {
    console.error('[Admin Update Affiliate]', err.message);
    return res.status(500).json({ error: 'Failed to update affiliate' });
  }
});

// ─── GET /api/admin/commissions ───────────────────────────────────────────────
router.get('/commissions', async (req, res) => {
  try {
    const { month, affiliateId } = req.query;
    const conditions = [];
    const values = [];
    let idx = 1;

    if (month) {
      conditions.push(`c.period_month = $${idx++}`);
      values.push(month);
    }
    if (affiliateId) {
      conditions.push(`c.affiliate_id = $${idx++}`);
      values.push(affiliateId);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const query = `
      SELECT 
        c.id,
        c.amount,
        c.period_month,
        c.email_sent,
        c.created_at,
        a.id AS affiliate_id,
        a.name AS affiliate_name,
        a.email AS affiliate_email,
        a.code AS affiliate_code,
        o.id AS order_id,
        o.razorpay_order_id,
        o.customer_name,
        o.customer_email,
        o.final_amount AS order_amount,
        o.paid_at AS order_paid_at
      FROM commissions c
      JOIN affiliates a ON c.affiliate_id = a.id
      JOIN orders o ON c.order_id = o.id
      ${whereClause}
      ORDER BY c.created_at DESC
    `;

    const result = await pool.query(query, values);
    return res.json({ commissions: result.rows });
  } catch (err) {
    console.error('[Admin Get Commissions]', err.message);
    return res.status(500).json({ error: 'Failed to fetch commissions' });
  }
});

// ─── GET /api/admin/stats ─────────────────────────────────────────────────────
router.get('/stats', async (req, res) => {
  try {
    const ordersRes = await pool.query(`
      SELECT 
        COUNT(*)::int AS total_orders,
        COUNT(CASE WHEN status = 'PAID' THEN 1 END)::int AS paid_orders,
        COALESCE(SUM(CASE WHEN status = 'PAID' THEN final_amount END), 0)::bigint AS total_revenue
      FROM orders
    `);

    const affiliatesRes = await pool.query(`
      SELECT 
        COUNT(*)::int AS total_affiliates,
        COUNT(CASE WHEN is_active THEN 1 END)::int AS active_affiliates
      FROM affiliates
    `);

    const commissionsRes = await pool.query(`
      SELECT 
        COUNT(*)::int AS total_commissions_count,
        COALESCE(SUM(amount), 0)::bigint AS total_commissions_amount
      FROM commissions
    `);

    return res.json({
      orders: ordersRes.rows[0],
      affiliates: affiliatesRes.rows[0],
      commissions: commissionsRes.rows[0],
    });
  } catch (err) {
    console.error('[Admin Get Stats]', err.message);
    return res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// ─── GET /api/admin/orders ────────────────────────────────────────────────────
router.get('/orders', async (req, res) => {
  try {
    const { status, limit = 100 } = req.query;
    const conditions = [];
    const values = [];
    let idx = 1;

    if (status) {
      conditions.push(`o.status = $${idx++}`);
      values.push(status.toUpperCase());
    }

    values.push(parseInt(limit));
    const limitClause = `LIMIT $${idx}`;
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const query = `
      SELECT 
        o.id,
        o.razorpay_order_id,
        o.razorpay_payment_id,
        o.affiliate_id,
        o.affiliate_code_used,
        o.base_amount,
        o.discount_amount,
        o.final_amount,
        o.customer_name,
        o.customer_email,
        o.customer_phone,
        o.status,
        o.created_at,
        o.paid_at,
        a.name AS affiliate_name
      FROM orders o
      LEFT JOIN affiliates a ON o.affiliate_id = a.id
      ${whereClause}
      ORDER BY o.created_at DESC
      ${limitClause}
    `;

    const result = await pool.query(query, values);
    return res.json({ orders: result.rows });
  } catch (err) {
    console.error('[Admin Get Orders]', err.message);
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// ─── PATCH /api/admin/orders/:id/status ───────────────────────────────────────
router.patch('/orders/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, trackingNumber } = req.body;

    const allowedStatuses = ['PAID', 'CONFIRMED', 'SHIPPED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'FAILED'];
    const cleanStatus = status ? status.trim().toUpperCase() : '';

    if (!cleanStatus || !allowedStatuses.includes(cleanStatus)) {
      return res.status(400).json({
        error: `Invalid status. Allowed values are: ${allowedStatuses.join(', ')}`,
      });
    }

    // Update order status in DB
    const updateRes = await pool.query(
      `UPDATE orders
       SET status = $1
       WHERE id = $2
       RETURNING id, razorpay_order_id, customer_name, customer_email, customer_phone, status, paid_at, final_amount`,
      [cleanStatus, id]
    );

    if (updateRes.rowCount === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const order = updateRes.rows[0];

    // Trigger status update email to customer
    let emailSent = false;
    if (order.customer_email) {
      try {
        emailSent = await sendStatusUpdateEmail({
          customerName: order.customer_name || 'Customer',
          customerEmail: order.customer_email,
          orderId: order.razorpay_order_id,
          status: cleanStatus,
          trackingNumber: trackingNumber || null,
        });
      } catch (emailErr) {
        console.warn('[Order Status Update] Email send failed:', emailErr.message);
      }
    }

    return res.json({
      success: true,
      order,
      emailSent,
      message: `Order status updated to ${cleanStatus}${emailSent ? ' and customer notified' : ''}`,
    });
  } catch (err) {
    console.error('[Admin Update Order Status]', err.message);
    return res.status(500).json({ error: 'Failed to update order status: ' + err.message });
  }
});

module.exports = router;
