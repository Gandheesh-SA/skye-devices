const nodemailer = require('nodemailer');
require('dotenv').config();

const port = parseInt(process.env.SMTP_PORT || '587');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
  port: port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

/**
 * Sends a commission notification email to the influencer.
 * @param {object} opts
 * @param {string} opts.influencerName
 * @param {string} opts.influencerEmail
 * @param {string} opts.affiliateCode
 * @param {number} opts.commissionAmount  - in paise (e.g. 50000 = ₹500)
 * @param {Date}   opts.orderDate
 */
async function sendCommissionEmail({ influencerName, influencerEmail, affiliateCode, commissionAmount, orderDate }) {
  const formattedAmount = `₹${(commissionAmount / 100).toLocaleString('en-IN')}`;
  const formattedDate = new Date(orderDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const mailOptions = {
    from: `"Skye" <${process.env.FROM_EMAIL}>`,
    to: influencerEmail,
    subject: `🎉 Your code ${affiliateCode} just earned you ${formattedAmount}!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #111;">
        <h2 style="margin: 0 0 8px; font-size: 22px; font-weight: 700;">Hey ${influencerName}! 🎉</h2>
        <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
          Someone just used your affiliate code and completed a purchase of Skye.
        </p>

        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px 24px; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #555; font-size: 14px;">Affiliate Code</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right; font-size: 14px;">${affiliateCode}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #555; font-size: 14px;">Order Date</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right; font-size: 14px;">${formattedDate}</td>
            </tr>
            <tr style="border-top: 1px solid #e5e7eb;">
              <td style="padding: 12px 0 4px; color: #111; font-size: 15px; font-weight: 600;">Your Commission</td>
              <td style="padding: 12px 0 4px; font-weight: 700; text-align: right; font-size: 20px; color: #2563eb;">${formattedAmount}</td>
            </tr>
          </table>
        </div>

        <p style="color: #777; font-size: 13px; line-height: 1.6;">
          Commissions are tracked monthly and paid out by the Skye team. Keep sharing!
        </p>
        <p style="margin-top: 32px; color: #aaa; font-size: 12px;">— The Skye Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email] Commission email sent to ${influencerEmail} for code ${affiliateCode}`);
    return true;
  } catch (err) {
    console.error(`[Email] Failed to send commission email to ${influencerEmail}:`, err.message);
    return false;
  }
}

/**
 * Sends an order confirmation email to the customer after successful payment.
 * @param {object} opts
 * @param {string} opts.customerName
 * @param {string} opts.customerEmail
 * @param {string} opts.orderId          - Razorpay order ID
 * @param {string} opts.paymentId        - Razorpay payment ID
 * @param {number} opts.amount           - Final amount in paise
 * @param {object} opts.address          - { addressLine1, addressLine2, city, state, pincode, country }
 */
async function sendOrderConfirmationEmail({
  customerName,
  customerEmail,
  orderId,
  paymentId,
  amount,
  address = {},
}) {
  const formattedAmount = `₹${(amount / 100).toLocaleString('en-IN')}`;
  const formattedDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const addressLines = [
    address.addressLine1,
    address.addressLine2,
    address.city && address.state ? `${address.city}, ${address.state}` : address.city || address.state,
    address.pincode,
    address.country,
  ]
    .filter(Boolean)
    .join('<br/>');

  const mailOptions = {
    from: `"Skye" <${process.env.FROM_EMAIL}>`,
    to: customerEmail,
    subject: `Your Skye Order is Paid and Confirmed (Order: ${orderId})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #111;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="margin: 0 0 6px; font-size: 26px; font-weight: 800; color: #111;">Skye</h1>
          <p style="margin: 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Haptic Breathing Guide</p>
        </div>

        <!-- Hero -->
        <div style="background: #f0f4ff; border-radius: 14px; padding: 28px 24px; text-align: center; margin-bottom: 28px;">
          <div style="width: 56px; height: 56px; background: #3b5bdb; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; line-height: 56px; color: #ffffff;">✓</div>
          <h2 style="margin: 0 0 8px; font-size: 22px; font-weight: 800; color: #111;">Order Paid &amp; Confirmed</h2>
          <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6;">
            Hey ${customerName}, your Skye order has been paid and confirmed.<br/>
            Delivery: <strong>7–10 working days</strong>.
          </p>
        </div>

        <!-- Order Details -->
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #374151;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 7px 0; color: #6b7280;">Product</td>
              <td style="padding: 7px 0; font-weight: 600; text-align: right; color: #111;">Skye Haptic Breathing Guide</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #6b7280;">Order Date</td>
              <td style="padding: 7px 0; font-weight: 600; text-align: right; color: #111;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #6b7280;">Order ID</td>
              <td style="padding: 7px 0; font-weight: 600; text-align: right; color: #111; font-size: 12px; font-family: monospace;">${orderId}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #6b7280;">Payment ID</td>
              <td style="padding: 7px 0; font-weight: 600; text-align: right; color: #111; font-size: 12px; font-family: monospace;">${paymentId}</td>
            </tr>
            <tr style="border-top: 1px solid #e5e7eb;">
              <td style="padding: 12px 0 4px; color: #111; font-size: 15px; font-weight: 700;">Amount Paid</td>
              <td style="padding: 12px 0 4px; font-weight: 800; text-align: right; font-size: 18px; color: #3b5bdb;">${formattedAmount}</td>
            </tr>
          </table>
        </div>

        <!-- Shipping Address -->
        ${
          addressLines
            ? `<div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 10px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #374151;">Shipping To</h3>
                <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #374151;">${addressLines}</p>
               </div>`
            : ''
        }

        <!-- What's next -->
        <div style="margin-bottom: 28px;">
          <h3 style="margin: 0 0 12px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #374151;">What's Next?</h3>
          <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 14px; line-height: 2;">
            <li>You'll receive a shipping confirmation with tracking once dispatched</li>
            <li>For any queries write to <a href="mailto:contact@skyedevices.com" style="color: #3b5bdb;">contact@skyedevices.com</a></li>
            <li>Your device comes with a 1-year warranty</li>
          </ul>
        </div>

        <!-- Footer -->
        <p style="margin: 32px 0 0; color: #aaa; font-size: 12px; text-align: center;">
          © ${new Date().getFullYear()} Skye Devices · <a href="https://skyedevices.com" style="color: #aaa;">skyedevices.com</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email] Order confirmation sent to ${customerEmail} for order ${orderId}`);
    return true;
  } catch (err) {
    console.error(`[Email] Failed to send order confirmation to ${customerEmail}:`, err.message);
    return false;
  }
}

/**
 * Sends an order status update email to the customer.
 * @param {object} opts
 * @param {string} opts.customerName
 * @param {string} opts.customerEmail
 * @param {string} opts.orderId
 * @param {string} opts.status - 'CONFIRMED' | 'SHIPPED' | 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELIVERED'
 * @param {string} [opts.trackingNumber]
 */
async function sendStatusUpdateEmail({
  customerName = "there",
  customerEmail,
  orderId,
  status,
  trackingNumber,
}) {
  if (!customerEmail) return false;

  const statusConfig = {
    CONFIRMED: {
      badge: "Order Confirmed",
      badgeBg: "#e0e7ff",
      badgeColor: "#3730a3",
      title: "Your order is confirmed",
      message: "We have received your order and our team is preparing it for dispatch.",
    },
    SHIPPED: {
      badge: "Shipped",
      badgeBg: "#e0f2fe",
      badgeColor: "#0369a1",
      title: "Your Skye has been shipped",
      message: "Great news! Your package has been dispatched and is on its way to you.",
    },
    IN_TRANSIT: {
      badge: "In Transit",
      badgeBg: "#fef3c7",
      badgeColor: "#92400e",
      title: "Your order is in transit",
      message: "Your Skye device is traveling through our courier network towards your city.",
    },
    OUT_FOR_DELIVERY: {
      badge: "Out for Delivery",
      badgeBg: "#f3e8ff",
      badgeColor: "#6b21a8",
      title: "Out for delivery today",
      message: "Your package is with the local courier executive and will reach your doorstep today. Please keep your phone accessible.",
    },
    DELIVERED: {
      badge: "Delivered",
      badgeBg: "#dcfce7",
      badgeColor: "#15803d",
      title: "Delivered — Welcome to Skye",
      message: "Your Skye haptic breathing device has been delivered. We hope it brings calmness, focus, and restful sleep to your days.",
    },
  };

  const config = statusConfig[status] || {
    badge: status,
    badgeBg: "#f3f4f6",
    badgeColor: "#1f2937",
    title: `Order Status Update: ${status}`,
    message: `Your Skye order status has been updated to ${status}.`,
  };

  const formattedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const mailOptions = {
    from: `"Skye" <${process.env.FROM_EMAIL}>`,
    to: customerEmail,
    subject: `${config.title} (Order: ${orderId})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 36px 20px; color: #111; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 28px;">
          <h1 style="margin: 0 0 4px; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; color: #111;">Skye</h1>
          <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 600;">Haptic Breathing Guide</p>
        </div>

        <!-- Status Card -->
        <div style="background: #fafafa; border: 1px solid #e5e7eb; border-radius: 16px; padding: 32px 24px; text-align: center; margin-bottom: 24px;">
          <div style="display: inline-block; padding: 6px 14px; background: ${config.badgeBg}; color: ${config.badgeColor}; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
            ${config.badge}
          </div>
          <h2 style="margin: 0 0 10px; font-size: 22px; font-weight: 800; color: #111;">
            ${config.title}
          </h2>
          <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6; max-width: 440px; margin: 0 auto;">
            Hey ${customerName}, ${config.message}
          </p>
        </div>

        <!-- Details Box -->
        <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 24px; font-size: 14px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Order ID</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right; font-family: monospace; font-size: 13px; color: #111;">${orderId}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Update Date</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right; color: #111;">${formattedDate}</td>
            </tr>
            ${
              trackingNumber
                ? `<tr>
                    <td style="padding: 6px 0; color: #6b7280;">Tracking Details</td>
                    <td style="padding: 6px 0; font-weight: 700; text-align: right; color: #2563eb;">${trackingNumber}</td>
                   </tr>`
                : ""
            }
          </table>
        </div>

        <!-- Help Notice -->
        <div style="background: #f9fafb; border-radius: 12px; padding: 16px 20px; margin-bottom: 28px; font-size: 13px; color: #6b7280; line-height: 1.6;">
          Have questions or need assistance with your delivery? Just reply to this email or write to <a href="mailto:contact@skyedevices.com" style="color: #3b5bdb; text-decoration: none; font-weight: 600;">contact@skyedevices.com</a>.
        </div>

        <!-- Footer -->
        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
          © ${new Date().getFullYear()} Skye Devices · <a href="https://skyedevices.com" style="color: #9ca3af; text-decoration: underline;">skyedevices.com</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email] Status update (${status}) email sent to ${customerEmail} for order ${orderId}`);
    return true;
  } catch (err) {
    console.error(`[Email] Failed to send status update email to ${customerEmail}:`, err.message);
    return false;
  }
}

module.exports = {
  sendCommissionEmail,
  sendOrderConfirmationEmail,
  sendStatusUpdateEmail,
};
