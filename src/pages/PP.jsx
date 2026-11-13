
import { useState } from "react";
import Footer from "../components/Footer";

const privacyData = [
  {
    title: "Information We Collect",
    content: `We collect only the information reasonably necessary to operate our business and serve you. This may include your name, email address, phone number, billing and delivery address, and order details when you make a purchase or contact us. Payment transactions are processed securely through our payment partner, Razorpay. We do not store your complete card details or payment credentials. We may also collect basic website usage information, such as pages visited, browsing activity, device and browser information, and analytics data, to understand how visitors use our website and improve our services. Where required, we obtain your consent before collecting or processing personal information.`
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to process and fulfill orders, arrange deliveries, provide customer support, respond to enquiries, share order confirmations and delivery updates, maintain transaction records, improve our products and website, and meet applicable legal and regulatory requirements. We may also use your information to communicate product announcements or promotional updates where permitted and, where required, with your consent. You can opt out of non-essential promotional communications at any time. We do not sell, rent, or trade your personal information to third parties.`
  },
  {
    title: "Data Storage and Security",
    content: `We retain your personal information only for as long as reasonably necessary to fulfil the purposes described in this policy, provide our services, resolve disputes, maintain business records, or comply with legal obligations. We use reasonable technical and organizational security measures to protect your information against unauthorised access, loss, misuse, disclosure, alteration, or destruction. Access to personal information is limited to those who need it to perform their responsibilities. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: "Sharing Your Information",
    content: `We do not share your personal information except where necessary to operate our business and provide our services. This may include sharing relevant information with trusted payment processors such as Razorpay to process transactions, delivery and logistics partners to fulfil orders, and website hosting, analytics, or other service providers who help us operate our website and business. We may also disclose information where required by law, legal proceedings, regulatory authorities, or to protect our legitimate rights and interests. We share only the information reasonably necessary for the relevant purpose and expect our service providers to handle it responsibly and in accordance with applicable obligations.`
  },
  {
    title: "Cookies and Third-Party Services",
    content: `Our website uses cookies and similar technologies, including Google Analytics and Microsoft Clarity, to understand how visitors interact with our website, analyse website traffic, and improve your browsing experience. These services may collect information such as pages visited, time spent on the website, browser type, device information, clicks, scrolling activity, and general usage patterns. Microsoft Clarity may also use heat-maps and session recordings to help us understand how visitors navigate and interact with our website. These tools may use cookies and other identifiers to collect and process usage information in accordance with their respective privacy policies.

You can learn more about how these services handle information through Google's Privacy Policy and Microsoft's Privacy Statement. You may manage cookies through your browser settings and use the Google Analytics opt-out browser add-on, where applicable. Disabling certain cookies may affect some website functionality.

Our website may also contain links to third-party websites or services that we do not operate or control. These services have their own privacy policies and practices, and we are not responsible for how they collect or use your information. We encourage you to review their respective privacy policies before sharing personal information with them.`
  },
  {
    title: "Your Privacy Rights",
    content: `You may contact us to request access to the personal information we hold about you, request corrections to inaccurate or incomplete information, or request deletion of your information where permitted by applicable law. You may also withdraw consent for activities that rely on your consent, or opt out of non-essential communications. Certain information may need to be retained to fulfil an order, meet legal requirements, maintain transaction records, or resolve disputes. We will review and respond to privacy-related requests in accordance with applicable law. To exercise your rights or raise a concern about how your information is handled, please contact us using the details provided below.`
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our business operations, website functionality, services, or applicable laws. Any revisions will be published on this page along with an updated effective date. We encourage you to review this policy periodically to stay informed about how we handle your personal information. Any changes will take effect upon publication, subject to applicable law.`
  },
  {
    title: "Contact Us",
    content: `If you have any questions, requests, or concerns about this Privacy Policy or how we collect, use, and protect your personal information, please contact us and we will do our best to address your concerns and respond to privacy-related requests in accordance with applicable law.

Privacy Contact: Barath M S
Skye Devices Private Limited
Email: contact@skyedevices.com
Address: 82, Arunachalam Street,
Chintadripet, Chennai – 600002,
Tamil Nadu, India.`
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
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-extrabold uppercase text-gray-900 mb-2">
            <span className="text-[var(--accent)]">Privacy</span> Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 1 November 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we didn’t just build Skye as another device. We
            built it as a simple, screen-free way to help you sleep better,
            without unnecessary distractions or dependence on another screen.
            <br />
            <br />
            We believe privacy should be simple and respectful too. This Privacy
            Policy explains what information we collect, why we collect it, how
            we use it, and how we protect it when you visit our website, {" "}
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

