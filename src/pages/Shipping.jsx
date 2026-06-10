
import { useState } from "react";
import Footer from "../components/Footer";

const shippingData = [
  {
    title: "Shipping Coverage",
    content: `We currently ship within India. International shipping is not available at this time.`
  },
  {
    title: "Order Confirmation",
    content: `After you place an order, you’ll receive an email confirming the purchase details. This confirms receipt of your order and triggers processing.`
  },
  {
    title: "Stock Availability",
    content: `All orders depend on stock availability. If an item is unavailable after purchase, we’ll contact you promptly to offer a refund or replacement. We will not leave you guessing.`
  },
  {
    title: "Shipping Fees",
    content: `We do not charge shipping fees for deliveries within India. The price displayed at checkout is the final payable amount.`
  },
  {
    title: "Dispatch & Delivery Timelines",
    content: `Orders typically dispatch within 7-10 business days of confirmation.

Delivery timelines vary by location, usually between 1-3 business days after dispatch.

Delivery estimates are provided in good faith. If a delay occurs, we’ll help track and resolve it with our delivery partners.`
  },
  {
    title: "Delivery Attempts, RTO & Undelivered Orders",
    content: `Courier partners may attempt delivery more than once if you are unavailable. If the courier returns the shipment to us (RTO), we’ll reach out to arrange a reshipment or refund based on your preference.

For reshipment, we may verify address details for accuracy to avoid repeated delivery issues. If Cash on Delivery (COD) is introduced in the future, we may limit COD eligibility for customers who repeatedly refuse orders. This helps keep operations fair for all buyers.`
  },
  {
    title: "Address Accuracy & Changes",
    content: `To ensure smooth delivery, please provide accurate and complete address information. We’re unable to modify delivery addresses after an order is placed. If an incorrect address leads to non-delivery, refunds or replacements may not be available.`
  },
  {
    title: "Courier Handling & Damaged Shipments",
    content: `We package products securely and work with reliable courier partners. If your package arrives damaged or tampered with, please notify us within 48 hours with photographs or short video evidence. This helps us investigate and support you faster. We review claims fairly and in good faith. If verified, we will replace or refund the affected product at no additional cost to you.`
  },
  {
    title: "Transfer of Risk & Title",
    content: `Risk of loss or damage transfers to you once the product is delivered to the address provided at checkout. Title to the product transfers once full payment has been received and delivery is completed. If you believe the courier’s delivery confirmation is inaccurate, contact us and we will investigate in coordination with the courier.`
  },
  {
    title: "Warranty & Product Condition",
    content: `All Skye devices are covered by a product warranty as described in our Warranty Policy. If your device experiences a defect within the warranty period under normal usage conditions, we will repair or replace it based on our assessment, at no extra cost.

Damage caused by misuse, unauthorized repairs, or non-standard operating conditions may not be covered, but we will review such cases fairly and offer reasonable options where possible. Warranty claims are handled directly by us. You will not be redirected to third-party manufacturers.`
  },
  {
    title: "Delays & Force Majeure",
    content: `If events outside our reasonable control impact shipping (courier disruptions, extreme weather, strikes, regulatory events, wars, etc.), delivery may take longer than expected. We’ll support you with updates and tracking information wherever possible.`
  },
  {
    title: "Taxes & Charges",
    content: `All applicable taxes within India are already included in product prices. There are no hidden duties or handling charges.`
  },
  {
    title: "Customer Support",
    content: `If you need help with shipping, delivery, or the status of your order, you can reach us at:

contact@skyedevices.com.

We respond promptly and aim to resolve issues with transparency and fairness.`
  }
];

export default function ShippingDeliveryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-2">
            Shipping & Delivery Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 01 June 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we aim to make your buying and delivery experience
            simple, transparent, and reliable. This Shipping & Delivery Policy
            explains how we process and fulfill orders placed on{" "}
            <a
              href="https://www.skyedevices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.skyedevices.com
            </a>
            .
          </p>

          <div className="space-y-6">
            {shippingData.map((section, index) => (
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

