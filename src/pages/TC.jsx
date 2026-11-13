
import { useState } from "react";
import Footer from "../components/Footer";

const termsData = [
  {
    title: "Introduction",
    content: `Skye is a product of Skye Devices Private Limited ("Skye Devices", "we", "our", or "us"). We design and manufacture handheld, screen-free breathing devices that guide users through simple breathing routines using vibrations. Skye is designed to help you build a breathing practice, become more aware of your breathing, and find moments of calm throughout your day. Our products are manufactured in planned, limited batches with attention to quality, care, and purpose. These Terms & Conditions apply to everyone who visits our website or purchases our products.`
  },
  {
    title: "Eligibility to Purchase",
    content: `You must be at least 18 years old to place an order. If you are younger, a parent or legal guardian must place the order or provide the necessary permission. By placing an order, you agree to provide accurate, current, and complete information, including your contact and delivery details. You may also purchase Skye as a gift for someone else, provided the delivery information is accurate. We currently ship only within India and cannot accept orders requiring international delivery.`
  },
  {
    title: "Pricing and Payment",
    content: `All prices are listed in Indian Rupees (₹), unless stated otherwise. Applicable taxes and shipping charges, if any, will be displayed at checkout. We reserve the right to change prices at any time; however, the price of a confirmed order will remain unchanged. Payments are processed securely through our authorized payment partners, and we do not store your complete card or payment details. We reserve the right to cancel orders involving suspected fraud, incorrect pricing, inaccurate information, or other legitimate reasons. If payment has already been received, an appropriate refund will be arranged.`
  },
  {
    title: "Cancellation and Refunds",
    content: `As soon as an order is placed, our production planning begins, cancellation requests generally cannot be accepted. If you wish to cancel an order, please get in touch with us as soon as possible, and we will review your request depending on the stage of production. This does not affect any cancellation or refund rights available to you under applicable law.

Every eligible purchase comes with a 15-day trial, starting from the date you receive Skye. If you are not satisfied, you may request a return and refund within this period, provided the device is in good working condition. It is returned with its original packaging and all included accessories. Normal use during the trial is allowed, but damage caused by accidents, misuse, or unauthorized modifications may affect return eligibility, subject to applicable law. To request a return, email contact@skyedevices.com. Please refer to our separate Returns & Refunds Policy for complete details.

If your Skye arrives damaged or defective, please email us with your order details, photographs of the damage, and an unboxing video showing the package being opened. Once the issue is verified, we will arrange a replacement or another appropriate solution at no additional cost, in accordance with applicable law. Nothing in this section limits your statutory consumer rights.`
  },
  {
    title: "Shipping and Delivery",
    content: `Our typical delivery timeline is 1-4 days from the date of order confirmation. We currently ship only within India and cannot accept orders with international delivery addresses. You will receive an order confirmation email after placing your order, and once your Skye is shipped, we will share the tracking details via email. Delivery timelines are estimates and may vary due to production schedules, supplier delays, logistics disruptions, weather conditions, or other unforeseen circumstances. If there is a significant delay, we will do our best to keep you informed. Skye is designed and manufactured in Chennai, India.`
  },
  {
    title: "Force Majeure",
    content: `Skye Devices will not be held responsible for delays or failure to perform its obligations resulting from circumstances beyond our reasonable control, including natural disasters, acts of government, government restrictions, supplier delays, labor disruptions, transportation issues, logistics failures, or technical disruptions. We will make reasonable efforts to minimize the impact of such events and keep affected customers informed.`
  },
  {
    title: "Use of the Product",
    content: `Skye is a handheld, screen-free breathing coach intended for personal, non-commercial use. It guides you through breathing routines using vibrations and does not require a smartphone, mobile application, or subscription. You may use Skye when you wake up, before going to bed, between meetings, or whenever you want to take a moment to slow down. You agree to use the product responsibly and in accordance with the instructions provided. You must not modify, reverse engineer, tamper with, commercially resell, or misuse the product without our prior written permission. Every Skye purchased directly from skyedevices.com comes with a one-year warranty against defects in materials and workmanship, starting from the date of delivery. Please refer to our separate Warranty Policy for coverage, exclusions, and the process for requesting support.`
  },
  {
    title: "Intellectual Property",
    content: `All product designs, branding, logos, website content, graphics, software, and other original materials associated with Skye are the property of Skye Devices Private Limited or their respective owners. Unauthorized copying, reproduction, distribution, modification, or commercial use of these materials is prohibited without prior written permission. Nothing in these Terms grants you ownership or intellectual property rights over our products, designs, or content.`
  },
  {
    title: "Disclaimer",
    content: `Skye is a general wellness product designed to guide users through simple, structured breathing routines using vibrations. It is intended to support everyday breathing practices, relaxation, focused mornings, better sleep, and moments of calm throughout the day. Skye is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition. It is not a substitute for professional medical advice, diagnosis, or treatment. While breathing practices may support relaxation and overall well-being, individual experiences and results may vary, and we do not guarantee specific outcomes related to stress, focus, relaxation, sleep, or any other aspect of health or well-being. Use of Skye is voluntary, and users should follow the instructions provided. If you have an existing medical condition or experience discomfort while practicing breathing exercises, discontinue use and seek appropriate professional medical advice.`
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, Skye Devices will not be responsible for indirect, incidental, special, or consequential losses arising from the use of, or inability to use, our website or products. Where legally permitted, our total liability arising from a product purchase will be limited to the amount paid by you for that product. Nothing in these Terms excludes or limits any consumer rights, statutory protections, or liabilities that cannot legally be excluded or limited under Indian law.`
  },
  {
    title: "Governing Law and Jurisdiction",
    content: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms will be subject to the jurisdiction of the competent courts in Chennai, Tamil Nadu, subject to applicable consumer protection laws and the jurisdiction of consumer forums and authorities. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law. These Terms, together with our Privacy Policy, Returns & Refunds Policy, and Warranty Policy, constitute the agreement between you and Skye Devices regarding your use of our website and products. Our failure to enforce any provision immediately does not mean we waive our right to enforce it later.`
  },
  {
    title: "Changes to These Terms",
    content: `We may update these Terms from time to time as our products, services, and business operations evolve. Any changes will be published on this page along with an updated revision date. We encourage you to review this page periodically. Changes will take effect upon publication, subject to applicable law. Your continued use of our website or services after changes are published will constitute acceptance of the updated Terms to the extent legally permitted.`
  },
  {
    title: "Contact Us",
    content: `If you have any questions or concerns regarding these Terms & Conditions, your order, product support, warranty, or returns, we are happy to help.

Skye Devices Private Limited
Email: contact@skyedevices.com
Address: 82, Arunachalam Street, Chintadripet, Chennai – 600002, Tamil Nadu, India.

For complaints or grievances, you may contact our Grievance Officer: Barath M S

We will acknowledge complaints within 72 hours and endeavor to resolve them within one month, in accordance with applicable law.`
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
            Last Updated: 1 November 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we believe that everyone deserves good sleep every
            night. Skye helps you reconnect with your breath to sleep better. We
            believe our terms should be just as simple. These terms are here to
            be clear and honest, no hidden clauses, no unnecessary complexity,
            just a shared understanding of how we work and what you can expect
            from us.
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

