
import { useState } from "react";
import Footer from "../components/Footer";

const termsData = [
  {
    title: "Introduction",
    content:
      "Skye is a product of Skye Devices Private Limited (“Skye Devices”, “we”, “our”, or “us”), designed to help you build better awareness of time and focus. Every unit is built with intention, produced in small batches to ensure quality, care, and purpose."
  },
  {
    title: "Eligibility to Purchase",
    content:
      "To place an order, you must be at least 18 years old, or have permission from a parent or legal guardian. You agree to provide accurate, current, and complete information during checkout."
  },
  {
    title: "Pricing and Payment",
    content:
      "All prices are listed in Indian Rupees (₹), unless stated otherwise. We reserve the right to change prices at any time, but once an order is placed, the price for that order is fixed. Payments are processed securely through our payment partners. We do not store your payment information."
  },
  {
    title: "Made-to-Order Manufacturing",
    content:
      "Skye is produced in limited, made-to-order batches to reduce waste and maintain consistent quality. Even if our ideal batch size is not reached within your delivery window, we will still produce and deliver every confirmed order. While smaller batches may be less economical for us, your order is always guaranteed."
  },
  {
    title: "Cancellation and Refunds",
    content:
      "Skye follows a made-to-order production model. Once an order is placed and production planning begins, the order cannot be canceled or refunded. If your Skye arrives damaged or defective, we will replace it at no additional cost. By placing an order, you acknowledge and support this production model, which helps reduce environmental impact and allows us to build with intention."
  },
  {
    title: "Shipping and Delivery",
    content:
      "Because Skye is made to order, our typical delivery timeline is 7-10 days from the date of order confirmation. At this time, we ship only within India. Orders placed with international shipping addresses will not be accepted or fulfilled.\n\nOnce your order is placed, you will receive an order confirmation email. As your Skye moves closer to shipping, we will share updates and delivery information with you. Delivery timelines are estimates and may vary due to factors outside our control, including supply chain delays, logistics disruptions, or unforeseen circumstances."
  },
  {
    title: "Force Majeure",
    content:
      "Skye Devices will not be held liable for delays or failure to perform resulting from events beyond our reasonable control, including but not limited to natural disasters, acts of government, supplier delays, labor issues, transportation disruptions, or technical failures."
  },
  {
    title: "Use of the Product",
    content:
      "Skye is intended for personal, non-commercial use only. You may not modify, resell, reverse engineer, or misuse the product without our prior written consent."
  },
  {
    title: "Intellectual Property",
    content:
      "All product designs, branding, content, software, and materials are the exclusive property of Skye Devices Private Limited. Any unauthorized reproduction, distribution, or use in any form is prohibited and may result in legal action."
  },
  {
    title: "Disclaimer",
    content:
      "Skye is designed to support calming breathing routines for focused mornings, calmer moments during the day, and better sleep, but individual experiences may vary. We do not guarantee specific outcomes related to stress, focus, relaxation, sleep, or overall well-being. Skye is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition."
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, our liability is limited to the amount paid by you for the product. We are not liable for indirect, incidental, special, or consequential damages arising from the use or inability to use Skye."
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms are governed by and construed under the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu."
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these Terms from time to time. Any changes will be effective once posted on our website. Continued use of our services constitutes acceptance of the updated Terms."
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms & Conditions, please contact us at:\n\ncontact@skyedevices.com."
  }
];

export default function TermsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-2">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 mb-6">
            Last Updated: 01 June 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we are not just building a product. We are building
            a simple, screen-free way to help people slow down, reconnect with
            their breath, and create calmer mornings, better sleep, and quieter
            moments in between. These terms are here to be clear and honest, no
            hidden clauses, no unnecessary complexity, just a shared
            understanding of how we work and what you can expect from us.
          </p>

          <div className="space-y-6">
            {termsData.map((term, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-5"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex justify-between items-center text-[clamp(16px,1.1vw,18px)] font-medium text-gray-900"
                >
                  <span>
                    {index + 1}. {term.title}
                  </span>

                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 whitespace-pre-line text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
                    {term.content}
                  </p>
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

