import { useState } from "react";
import Footer from "../components/Footer";

const refundData = [
  {
    title: "Order Cancellation",
    content: `If you wish to cancel an order, please contact us at contact@skyedevices.com as soon as possible, quoting your order number. If your order has not yet been dispatched, we will generally accept the cancellation and issue a full refund to the original payment method, which may have its own processing period based on the payment method and the platform we use.

Once an order has been dispatched, it can no longer be canceled through the standard cancellation process. However, you may still be eligible to return the product under our 15-day trial or applicable consumer protection laws.`
  },
  {
    title: "15-Day Trial and Change-of-Mind Returns",
    content: `We offer a 15-day trial starting from the date you receive your Skye. If you are not satisfied with the product, you may request a return within this period. To be eligible, the device must be in good working condition and returned with its original packaging and accessories. Normal use during the trial period is permitted. Damage caused by accidents, misuse, unauthorized modifications, or improper handling is not covered under the change-of-mind return policy.

To initiate a return, please email contact@skyedevices.com with your order number and reason for the return. Our team will share the return instructions. Once the returned device is received and inspected, we will process the applicable refund.`
  },
  {
    title: "Damaged, Defective, or Incorrect Products",
    content: `If you receive a damaged product, a defective device, or an item different from what you ordered, please contact us at contact@skyedevices.com within 48 hours of delivery, with your order details and supporting photographs or an unboxing video.

Once the issue is verified, we will arrange a replacement at no additional cost. If a replacement is not reasonably possible, we will offer an appropriate refund. This reporting period does not limit any rights or remedies available to you under applicable consumer protection laws.`
  },
  {
    title: "Warranty vs. Refund Eligibility",
    content: `Issues arising from manufacturing or functional defects after delivery are generally handled under our Warranty Policy. Depending on the issue, we may repair or replace the device at no additional cost.

A refund will be considered where repair or replacement is not reasonably possible, or where required under applicable consumer protection laws. This does not affect your right to request a return within the 15-day trial period, subject to the conditions set out in this policy.`
  },
  {
    title: "Order Non-Fulfillment",
    content: `If we are unable to fulfill your order for any reason, we will notify you and issue a full refund to the original payment method. We will not retain payment for an order that we are unable to deliver.`
  },
  {
    title: "Refund Method and Timelines",
    content: `Approved refunds will be initiated to the original payment method used for the purchase. We generally aim to initiate refunds within 7 business days of approval or completion of the return inspection, as applicable. The time taken for the amount to reflect in your account may vary depending on the payment gateway, bank, or financial institution. We will share relevant updates if there are delays in processing your refund.`
  },
  {
    title: "Customer Support",
    content: `If you have questions or need assistance relating to cancellations, returns, or refunds, please contact us and we will respond promptly and handle every request fairly, promptly, and transparently.

Skye Devices Private Limited
Email: contact@skyedevices.com
Address: 82, Arunachalam Street,
Chintadripet, Chennai – 600002,
Tamil Nadu, India.`
  }
];

export default function CancellationRefundPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-extrabold uppercase text-gray-900 mb-2">
            <span className="text-[var(--accent)]">Cancellation</span> and Refund Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 1 November 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we want you to feel confident when purchasing from
            Skye. If something doesn't go as expected, we aim to make the
            cancellation and refund process simple, fair, and transparent. This
            policy explains how cancellations, returns, and refunds are handled
            in accordance with applicable consumer protection laws in India.
          </p>

          <div className="space-y-6">
            {refundData.map((section, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-5"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex justify-between items-center text-[clamp(16px,1.1vw,18px)] font-medium text-gray-900"
                >
                  <span>
                    {index + 1}. {section.title}
                  </span>

                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="mt-4 whitespace-pre-line text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
                    {section.content.includes("contact@skyedevices.com") ? (
                      <>
                        {section.content.replace(
                          "contact@skyedevices.com",
                          ""
                        )}
                        <a
                          href="mailto:contact@skyedevices.com"
                          className="underline"
                        >
                          contact@skyedevices.com
                        </a>
                      </>
                    ) : (
                      section.content
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

