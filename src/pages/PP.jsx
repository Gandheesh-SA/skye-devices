
import { useState } from "react";
import Footer from "../components/Footer";

const privacyData = [
  {
    title: "Information We Collect",
    content: `We collect only what’s necessary to run our business and serve you well.

This includes:
• Your name, email address, phone number, and delivery address for order fulfillment
• Payment information, which is processed securely by our payment partner Razorpay
• Basic website usage data (such as analytics) to help us improve our website and services

We collect this information fairly, lawfully, and with your knowledge and consent.`
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to:
• Process and deliver your orders
• Provide customer support and respond to your questions
• Share important service updates, such as order status and delivery timelines
• Improve our products, website, and overall customer experience

We do not sell, rent, or trade your personal information.`
  },
  {
    title: "Data Storage and Security",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law.

We protect your data using reasonable and commercially accepted security measures to prevent loss, misuse, unauthorized access, disclosure, or alteration.

However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: "Sharing Your Information",
    content: `We do not share your personal information with third parties except in the following limited cases:
• When required by law or legal process
• With trusted service providers (such as delivery partners and payment processors) only to fulfill your order or provide our services

These partners are required to handle your data responsibly.`
  },
  {
    title: "Third-Party Services and Links",
    content: `Our website may contain links to third-party websites or services that we do not operate or control. We are not responsible for the privacy practices or content of these external sites, and we encourage you to review their privacy policies separately.`
  },
  {
    title: "Your Rights",
    content: `You have the right to:
• Request access to the personal information we hold about you
• Ask us to correct or delete your data, subject to legal or contractual obligations
• Opt out of non-essential communications at any time

To exercise these rights, you can contact us using the details below.`
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website or services after an update means you accept the revised policy.`
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, you can contact us at:

contact@skyedevices.com`
  }
];

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-2">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 01 June 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we didn’t just build Skye as another device. We
            built it as a simple, screen-free way to help you slow down,
            breathe, and create calmer mornings, better sleep, and quieter
            moments in between, without unnecessary distractions or dependence
            on another screen.
            <br />
            <br />
            We believe privacy should be simple and respectful. This policy
            explains what information we collect, why we collect it, and how we
            protect it when you use our website{" "}
            <a
              href="https://www.skyedevices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.skyedevices.com
            </a>{" "}
            or purchase our products.
          </p>

          <div className="space-y-6">
            {privacyData.map((section, index) => (
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

