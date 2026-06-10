import { useState } from "react";
import Footer from "../components/Footer";

const refundData = [
  {
    title: "Cancellation Policy (Made-to-Order Basis)",
    content: `Because Skye devices are made to order, all sales are considered final once the order is placed. Order cancellations and change-of-mind returns are not accepted.`
  },
  {
    title: "Exceptional Cancellation Situations",
    content: `Cancellations may be approved only in the following exceptional cases:
• Duplicate orders placed by mistake
• Non-fulfillment of the order from our side

Requests for exceptional cases must be submitted within 48 hours of purchase at contact@skyedevices.com. Approved requests will receive a full refund to the original payment method.`
  },
  {
    title: "Damage, Defects, or Incorrect Product Delivered",
    content: `If you receive a damaged product, a defective product, or the wrong product, you may request a replacement at no additional cost. Claims must be submitted within 48 hours of delivery with supporting photographs or video evidence to help us assess the issue. If a replacement is not reasonably possible, a refund may be offered at our discretion.`
  },
  {
    title: "Warranty vs Refund Eligibility",
    content: `Issues that arise after the initial delivery period are handled under our Warranty Policy. Refunds are not provided for issues that are resolvable through warranty repair or replacement unless such resolution is not reasonably possible.`
  },
  {
    title: "Non-Fulfillment from Our Side",
    content: `If we are unable to fulfill your order for any reason, we will cancel it and issue a full refund. We will not withhold refunds for orders we cannot deliver.`
  },
  {
    title: "Refund Method & Timelines",
    content: `Approved refunds are processed to the original payment method. Refund initiation generally occurs within 7 business days. Actual processing time may vary depending on payment gateways and banks.`
  },
  {
    title: "Customer Support",
    content: `For questions related to cancellations, refunds, or delivery issues, please contact:

contact@skyedevices.com.

We handle all matters fairly and in good faith, and in line with reasonable consumer expectations in India.`
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
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-2">
            Cancellation & Refund Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 01 June 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, each device is produced specifically for confirmed
            orders. This helps us operate sustainably as a small hardware
            business while maintaining high quality standards. This Cancellation
            & Refund Policy outlines how cancellations and refunds are handled
            in accordance with fair business practices and applicable consumer
            expectations within India.
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

