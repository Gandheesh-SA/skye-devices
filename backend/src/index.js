const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config();

const { router: checkoutRouter } = require('./routes/checkout');
const adminRouter = require('./routes/admin');
const webhookRouter = require('./routes/webhook');

const app = express();
const PORT = process.env.PORT || 4000;

// Trust proxy for rate limiting behind reverse proxies (Render, Vercel, Railway, Nginx)
app.set('trust proxy', 1);

// ─── CORS Configuration ──────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://skyedevices.com',
  'https://www.skyedevices.com',
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean).map((origin) => origin.replace(/\/$/, ''));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        process.env.NODE_ENV !== 'production'
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// ─── Body Parsers ─────────────────────────────────────────────────────────────
// Capture raw body buffer for Razorpay webhook HMAC verification
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(express.urlencoded({ extended: true }));

// ─── Rate Limiters ───────────────────────────────────────────────────────────
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // max 300 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60, // max 60 requests per window for sensitive checkout actions
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts, please slow down.' },
});

const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' },
});

app.use('/api', generalLimiter);
app.use('/api/admin/login', adminLoginLimiter);
app.use('/api/validate-code', strictLimiter);
app.use('/api/orders/create', strictLimiter);

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api', checkoutRouter);
app.use('/api/admin', adminRouter);
app.use('/api/webhook', webhookRouter);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]', err.stack || err.message);
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'CORS forbidden' });
  }
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Start Server ────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Skye Backend running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
  });
}

module.exports = app;
