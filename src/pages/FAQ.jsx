
import { useState } from "react";
import Footer from "../components/Footer";

const faqData = [
  {
    question: "What is Skye?",
    answer:
      "Skye is a screen-free, handheld haptic breathing guide designed for focused mornings, calmer days, and better sleep. Using gentle vibrations, it guides you through calming breathing exercises to follow in bed soon after waking up and before sleep. Simply pick a mode and follow the session. Each mode guides a different breathing exercise designed for moments like focused mornings, winding down before sleep, or slowing down during the day for a power nap. Use it whenever you need to slow your thoughts, or simply relax, all without screens or distractions."
  },
  {
    question: "Why does Skye work?",
    answer:
      "Breathing is one of the few automatic functions in the body that you can consciously control. Hundreds of studies show that when you slow it down, your body naturally shifts toward a calmer, more rested state. Your nervous system begins to settle, heart rate variability (HRV) improves, and the body gradually moves away from stress and toward recovery. Skye makes this easier by guiding your breath through gentle vibrations. Simply pick a mode and follow the session. Breathe in as it vibrates, hold when it pauses, and breathe out as it vibrates again. There is no need to count, watch a screen, or think about timing your breath. Just hold Skye in your hand and follow a simple, calming breathing rhythm, guided through touch."
  },
  {
    question: "Why should I buy Skye early?",
    answer:
      "We produce Skye in limited, made-to-order batches and ship devices in the order purchases are placed. This helps us avoid overproduction and reduce unnecessary electronic waste. Too many electronics are produced only to end up unused or in landfills, adding to environmental waste. We don’t want Skye to become part of that problem. Building in smaller batches helps us produce more thoughtfully and sustainably. So, buying early means you’re more likely to receive your Skye sooner."
  },
  {
    question: "When will my Skye ship?",
    answer:
      "Skye is produced in limited, made-to-order batches to avoid overproduction and support a more sustainable process. Because of this, our typical shipping timeline is 7–10 days. We’re actively working to improve this, but as a small team obsessed with quality, we believe this time is essential to get it right."
  },
  {
    question: "Can I cancel my order or get a refund? Is delivery guaranteed?",
    answer:
      "Skye is made to order, which means we start production specifically for you once an order is placed. Because of this, orders can’t be canceled or refunded after purchase. That said, delivery is guaranteed. Every confirmed order will be produced and shipped. And if your Skye arrives damaged or defective, we’ll replace it at no cost to you."
  },
  {
    question: "How can I track my order?",
    answer:
      "We’ll keep you posted with regular updates on your order, so you won’t be left wondering. If you need more details at any point, you can always reach out to us at contact@skyedevices.com. We’re happy to help. You can also follow our journey on LinkedIn or Instagram."
  },
  {
    question: "Can I use Skye on the go?",
    answer:
      "Yes. While Skye is designed to be part of your morning and bedtime routine in bed, it can also be used during the day whenever you need a moment to slow down and reset. Simply pick a mode and follow the session. Each mode guides a different breathing exercise, designed for moments like focused mornings, winding down before sleep, taking a quick power nap, or relaxing during a stressful day. Just hold Skye in your hand and follow the gentle breathing rhythm, all without screens or distractions."
  },
  {
    question: "Who is Skye for?",
    answer:
      "Skye is for anyone looking to feel calmer, more focused, and better rested through simple guided breathing routines. Whether you struggle to switch off before sleep, wake up feeling tired and unfocused, or simply want a calmer start to your day, Skye is designed to fit naturally into everyday life. Use it in bed soon after waking up for a more focused morning, before sleep to relax and wind down, or during the day whenever you need a moment to slow down, reset, or take a quick breathing break. Simply pick a mode and follow the session, all without screens or distractions."
  },
  {
    question: "How long does the battery last?",
    answer:
      "Skye lasts up to 14 days on a full charge when used for 4 or more sessions a day. It charges via USB-C and reaches around 60% in about an hour, so you don’t have to worry about charging yet another device every day."
  },
  {
    question: "Does Skye connect to apps or other devices?",
    answer:
      "No. And that’s intentional. Skye is a completely stand-alone, screen-free device that works on its own. It doesn’t connect to your phone or the internet. All controls, including switching modes and turning it on or off, are handled through a tactile button on the device itself."
  },
  {
    question: "What’s in the box?",
    answer:
      "Each box includes Skye and a quick start guide to help you get started right away. A USB-C cable is not included, as most people already have one, helping reduce unnecessary e-waste. Thoughtfully designed to be simple and minimal, right down to the packaging."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-[clamp(40px,6vh,80px)]">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center text-[clamp(16px,1.1vw,18px)] font-medium text-gray-900"
                >
                  <span>{index + 1}. {faq.question}</span>

                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
                    {faq.answer}
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

