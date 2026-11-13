
import { useState } from "react";
import Footer from "../components/Footer";

const shippingData = [
  {
    title: "Shipping Coverage",
    content: `We currently ship only within India. International shipping is not available at this time, and orders requiring international delivery cannot be accepted or fulfilled.`
  },
  {
    title: "Order Confirmation and Processing",
    content: `Once you place an order, you will receive an email confirming your purchase details. This confirms receipt of your order and allows us to begin processing it. Orders are processed promptly, and we aim to dispatch available products as soon as possible after order confirmation.`
  },
  {
    title: "Product Availability",
    content: `All orders are subject to stock availability. If a product becomes unavailable after an order is placed, we will contact you promptly to discuss an appropriate solution, including a replacement or full refund, as applicable. We will keep you informed and ensure you are not left waiting without an update.`
  },
  {
    title: "Shipping Fees and Taxes",
    content: `We currently offer free shipping on all deliveries within India. All applicable taxes are included in the product prices displayed on our website. There are no additional shipping fees, hidden duties, or handling charges for standard domestic deliveries.`
  },
  {
    title: "Dispatch & Delivery Timelines",
    content: `Orders are typically dispatched within 1–2 business days of order confirmation. Once dispatched, delivery usually takes an additional 1–3 business days, depending on your location and courier availability. These timelines are estimates and may vary due to logistics conditions or other unforeseen circumstances. Once your Skye is shipped, we will share the tracking details via email so you can follow its delivery. If a significant delay occurs, we will do our best to keep you informed and assist in coordinating with our delivery partners.`
  },
  {
    title: "Delivery Attempts and Undelivered Orders",
    content: `Our courier partners may make multiple delivery attempts if you are unavailable at the time of delivery. If a shipment is returned to us as Return to Origin (RTO), we will contact you to arrange a suitable resolution, such as reshipment or a refund, depending on the circumstances and applicable policies. Before reshipping, we may verify your delivery address to avoid repeated delivery issues. If Cash on Delivery (COD) is introduced in the future, we may restrict COD availability for customers with repeated instances of refusing or failing to accept deliveries.`
  },
  {
    title: "Address Accuracy and Changes",
    content: `Please ensure that your delivery address, phone number, and other contact details are accurate and complete when placing your order. Since orders are processed promptly after confirmation, we may not be able to accommodate delivery address changes once an order has entered processing or been dispatched. If you notice an error, contact us as soon as possible, and we will check whether a change is still possible. If an incorrect or incomplete address results in a failed delivery, we will review the situation and work with you towards an appropriate resolution, subject to applicable law and our Returns & Refunds Policy.`
  },
  {
    title: "Damaged or Tampered Shipments",
    content: `We take care to package every Skye securely and work with reliable delivery partners. If your package arrives visibly damaged, opened, or tampered with, please notify us within 48 hours of delivery by emailing contact@skyedevices.com with your order details, photographs of the package and damage, and an unboxing video showing the package being opened. This helps us investigate the issue and assist you promptly. Once verified, we will arrange a replacement or refund, as appropriate, at no additional cost, in accordance with applicable law.`
  },
  {
    title: "Warranty and Product Condition",
    content: `Every Skye purchased directly from skyedevices.com comes with a one-year warranty against defects in materials and workmanship, starting from the date of delivery. If your device develops a covered defect during the warranty period under normal usage conditions, we will assess the issue and arrange a repair or replacement in accordance with our Warranty Policy. Damage caused by misuse, accidents, unauthorized repairs, modifications, or improper handling may not be covered. Warranty claims are handled directly by Skye Devices. Please refer to our separate Warranty Policy for complete coverage details, exclusions, and claim procedures. This policy does not affect your statutory consumer rights.`
  },
  {
    title: "Delivery Responsibility",
    content: `Risk of loss or damage to the product transfers to you once it has been successfully delivered to the address provided at checkout, subject to applicable law. Ownership of the product transfers once full payment has been received and delivery is completed. If you believe a courier's delivery confirmation is inaccurate or you have not received your package despite it being marked as delivered, please contact us. We will investigate the matter in coordination with our delivery partner.`
  },
  {
    title: "Delays and Circumstances Beyond Our Control",
    content: `Occasionally, circumstances beyond our reasonable control may affect dispatch or delivery. These may include extreme weather, natural disasters, courier disruptions, labor strikes, supplier delays, government restrictions, regulatory events, or other unforeseen circumstances. While such events may extend delivery timelines, we will make reasonable efforts to minimize delays, share available tracking information, and keep affected customers informed.`
  },
  {
    title: "Customer Support",
    content: `If you have questions or need assistance with shipping, delivery, tracking, or the status of your order, please contact us and we will respond promptly and resolve delivery-related concerns with transparency and fairness.

Skye Devices Private Limited
Email: contact@skyedevices.com
Address: 82, Arunachalam Street,
Chintadripet, Chennai – 600002,
Tamil Nadu, India.`
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
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-extrabold uppercase text-gray-900 mb-2">
            <span className="text-[var(--accent)]">Shipping</span> and Delivery
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 1 November 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we aim to make your buying and delivery experience
            simple, transparent, and reliable. We want the journey from placing
            your order to receiving your Skye to be just as thoughtful as the
            product itself. This Shipping & Delivery Policy explains how we
            process, dispatch, and deliver orders placed on{" "}
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

