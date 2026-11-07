import { useState } from "react";
import Footer from "../components/Footer";

const ContactLink = () => (
  <a href="mailto:contact@skyedevices.com">contact@skyedevices.com</a>
);

const productQuestions = [
  {
    question: "How do I set up my new Skye device?",
    answer: <>Skye is ready to use right out of the box. Simply switch it on, choose one of the four breathing modes, hold it comfortably in your hand and follow the gentle vibrations. No app, screen or complicated setup required.</>,
  },
  {
    question: "What is Skye for?",
    answer: <>Skye is a handheld breathing coach designed to help you unwind before bedtime. It replaces the habit of scrolling through your phone with a simple, screen-free breathing routine that helps you slow down, relax and prepare for sleep.</>,
  },
  {
    question: "How does Skye work?",
    answer: <>Skye uses gentle vibrations to guide your breathing rhythm. Breathe in as it vibrates, hold when it pauses, breathe out as it vibrates again, and hold during the next pause. By giving your attention something simple to focus on, Skye helps you step away from racing thoughts and settle into a calmer state.</>,
  },
  {
    question: "How long and how often should I use Skye?",
    answer: <><p>We recommend using Skye for 5–12 minutes before bedtime. Start with a breathing mode that feels comfortable and gradually explore the others to find the rhythm that works best for you.</p><p>Consistency matters more than duration. Make Skye a part of your nightly wind-down routine. Many of our users find that using Skye right after brushing their teeth makes it easy to remember and naturally fits into their existing routine.</p></>,
  },
  {
    question: "Are there any side effects?",
    answer: <>Skye is a non-invasive device that uses gentle vibrations to guide your breathing. It does not use medication or emit anything into your body. Breathing exercises are generally gentle, but some people may experience dizziness or discomfort if they force their breathing or hold their breath for too long. Always breathe comfortably, and stop if you feel uncomfortable.</>,
  },
  {
    question: "What if Skye doesn’t work for me?",
    answer: <><p>Everyone has a different way of unwinding, and Skye may take a little time to become part of your bedtime routine. Try the different breathing modes to find the pace that feels most natural to you.</p><p>We offer a 15-day free trial so you can experience Skye before deciding if it’s right for you. Want to initiate a return? Simply email us at <ContactLink /> with the subject line “Return” and we’ll help you get the process started immediately.</p></>,
  },
  {
    question: "Is Skye a medical device?",
    answer: <>No. Skye is a general-wellness breathing device designed to support relaxation and help you unwind before bedtime. It is not intended to diagnose, treat, cure, or prevent any disease or medical condition. We recommend consulting a healthcare professional if you have concerns about your sleep or health. Skye is designed to complement your wellness routine, not replace professional medical care.</>,
  },
  {
    question: "Do you offer wholesale or referral deals?",
    answer: <><p>Absolutely! We’d love to explore partnerships with retailers, wellness professionals, creators and businesses interested in bringing Skye to more people.</p><p>For wholesale enquiries, bulk orders or referral partnerships, email us at <ContactLink /> with the subject line “Partnership”, and we’ll get back to you.</p></>,
  },
];

const orderQuestions = [
  {
    question: "How do I set up my new Skye device?",
    answer: productQuestions[0].answer,
  },
  {
    question: "What is your return policy?",
    answer: <><p>We offer a 15-day free trial so you can try Skye and see if it’s right for you.</p><p>If you’re not happy with your experience, you can request a return within 15 days of receiving your device. Simply email us at <ContactLink />, with the subject line “Return” and we’ll help you get the return process started.</p></>,
  },
  {
    question: "Is there a warranty?",
    answer: <>Yes! Every Skye purchase comes with a 1-year warranty covering defects in materials and workmanship. If something goes wrong with your device, get in touch with us at <ContactLink />. Please use “Warranty” as the email subject line, we’ll be happy to help.</>,
  },
  {
    question: "Do you ship internationally?",
    answer: <>Not yet! We’re currently shipping within India, but international shipping is coming soon. Stay tuned!</>,
  },
  {
    question: "How can I track my order?",
    answer: <>Once your order is shipped, we’ll share the tracking details with you via email so you can track your package and stay updated on its delivery status.</>,
  },
  {
    question: "What are your shipping times?",
    answer: <>Orders are typically processed within 1–4 business days. Delivery timelines depend on your location and the shipping service selected at checkout. You’ll receive tracking details as soon as your order is dispatched.</>,
  },
  {
    question: "My package arrived damaged / My device isn’t working. What should I do?",
    answer: <>We’re sorry to hear that! Please email us at <ContactLink /> with your order details and a description of the issue. Please use “Package Arrived Damaged” as the email subject line. Make sure to include an unboxing video, as it is mandatory for damaged package or faulty product claims. We’ll look into it and help you find a solution.</>,
  },
];

function QuestionList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <article className="faq-item" key={item.question}>
          <button
            className="faq-question"
            type="button"
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{index + 1}. {item.question}</span>
            <span className="faq-toggle" aria-hidden="true">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </article>
      ))}
    </div>
  );
}

const css = `
.faq-page{--faq-red:var(--accent,#c8000a);background:#fff;color:#292929;font-family:'Inter',system-ui,sans-serif}
.faq-content{width:min(100%,980px);margin:0 auto;padding:clamp(50px,7vw,96px) clamp(22px,6vw,72px) clamp(80px,10vw,130px)}
.faq-title{margin:0 0 clamp(54px,7vw,82px);font-size:clamp(23px,3vw,34px);font-weight:800;line-height:1.15;text-transform:uppercase}
.faq-title span{color:var(--faq-red)}
.faq-section+.faq-section{margin-top:clamp(72px,9vw,110px)}
.faq-section h2{margin:0 0 clamp(42px,5vw,60px);font-size:clamp(24px,2.8vw,34px);font-weight:700}
.faq-list{display:grid}
.faq-item{border-bottom:1px solid #e5e5e5}
.faq-question{display:flex;align-items:center;justify-content:space-between;gap:24px;width:100%;padding:22px 0;border:0;background:transparent;color:#292929;font:inherit;font-size:clamp(14px,1.25vw,17px);font-weight:800;line-height:1.35;text-align:left;cursor:pointer}
.faq-question:hover,.faq-question[aria-expanded="true"]{color:var(--faq-red)}
.faq-question:focus-visible{outline:2px solid var(--faq-red);outline-offset:5px}
.faq-toggle{flex:0 0 auto;font-size:24px;font-weight:500;line-height:1}
.faq-answer{padding:0 42px 24px 0;font-size:clamp(14px,1.15vw,16px);line-height:1.5;color:#363636}
.faq-answer p{margin:0}
.faq-answer p+p{margin-top:20px}
.faq-answer a{color:#1673c9;text-decoration:underline;text-underline-offset:2px}
.faq-answer a:hover{color:var(--faq-red)}
@media(max-width:640px){.faq-content{padding-top:40px}.faq-title{margin-bottom:46px}.faq-section h2{margin-bottom:20px}.faq-question{padding:19px 0}.faq-answer{padding-right:28px}}
`;

export default function FAQPage() {
  return (
    <div className="faq-page">
      <style>{css}</style>
      <main className="faq-content">
        <h1 className="faq-title">Frequently <span>Asked</span> Questions</h1>
        <section className="faq-section" aria-labelledby="product-faq-heading">
          <h2 id="product-faq-heading">Skye - Sleep or Scroll</h2>
          <QuestionList items={productQuestions} />
        </section>
        <section className="faq-section" aria-labelledby="orders-faq-heading">
          <h2 id="orders-faq-heading">Orders</h2>
          <QuestionList items={orderQuestions} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
