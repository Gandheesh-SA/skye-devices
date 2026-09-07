const Razorpay = require('razorpay');
const crypto = require('crypto');
const path = require('path');

// Explicitly load .env from backend directory and workspace root
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config();

function getRazorpayInstance() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret || keyId === 'rzp_test_placeholder') {
    console.error('[Razorpay] Current RAZORPAY_KEY_ID:', keyId ? `${keyId.substring(0, 8)}...` : 'undefined');
    throw new Error('Razorpay keys not configured in backend .env. Please check RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.');
  }

  return new Razorpay({
    key_id: keyId.trim(),
    key_secret: keySecret.trim(),
  });
}

async function createOrder(amountInPaise, receiptId, notes = {}) {
  const rzp = getRazorpayInstance();
  return rzp.orders.create({
    amount: amountInPaise,
    currency: 'INR',
    receipt: receiptId,
    notes,
  });
}

function verifyPaymentSignature(orderId, paymentId, signature) {
  const secret = (process.env.RAZORPAY_KEY_SECRET || '').trim();
  const body = orderId + '|' + paymentId;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return expectedSignature === signature;
}

function verifyWebhookSignature(rawBody, signature) {
  const secret = (process.env.RAZORPAY_WEBHOOK_SECRET || '').trim();
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');
  return expectedSignature === signature;
}

module.exports = { createOrder, verifyPaymentSignature, verifyWebhookSignature, getRazorpayInstance };
