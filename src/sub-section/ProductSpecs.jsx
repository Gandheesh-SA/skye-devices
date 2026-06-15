import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Product Specifications",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p style={{ margin: 0, lineHeight: 1.75, fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>
          Skye is a simple, screen-free way to relax, reset, and feel calmer wherever you are. Using gentle haptic guidance, Skye helps guide your breathing naturally for focused mornings, less stressful days, and better sleep. Feel a lasting difference in as little as 30 days with guided breathing that fits effortlessly into your daily routine, from the first thing you do in the morning to the last thing before sleep, and anytime in between.
        </p>

        <div>
          <p style={{ margin: "0 0 8px 0", fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>Why Skye</p>
          <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "Screen-free, haptic breathing guide",
              "Guided 5 to 12 minute breathing sessions",
              "Four breathing modes for calm, focus, relaxation, and sleep",
              "Minimal Scandinavian-inspired design",
              "Up to 14 days of battery life",
              "USB-c rechargeable, no disposable batteries needed",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#222", lineHeight: 1.6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ margin: "0 0 8px 0", fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>What's in the Box</p>
          <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {["1 × Skye breathing guide", "1 × Quick start guide"].map((item, i) => (
              <li key={i} style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#222", lineHeight: 1.6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How does it work?",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {[
          "Slow breathing at around 6 breaths per minute helps activate the body's natural relaxation response. Skye is a handheld, screen-free breathing companion designed to guide you through calming breathing exercises that support focused mornings, less stressful days, quiet the mind, and better sleep.",
          "Simply hold Skye in your hand and breathe along with its gentle haptic guidance. Inhale as the device vibrates, hold when the vibration pauses, and exhale as the vibration returns. No screens, no notifications, no distractions. Just your breath.",
          "When you inhale, your heart rate naturally rises, and when you exhale, it slows down. This effect becomes more noticeable during slow, intentional breathing exercises. With regular practice, your overall Heart Rate Variability (HRV) can improve, helping support better stress resilience and nervous system balance.",
          "Skye is designed to fit naturally into everyday life. The first thing you do in the morning. The last thing before sleep. And anytime in between. Use it between meetings, during traffic jams, in bed before sleep, or right after waking up. Wherever you are, whenever you need a moment to slow down, Skye is there to help you reset and reconnect with your breath.",
        ].map((para, i) => (
          <p key={i} style={{ margin: 0, lineHeight: 1.75, fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>
            {para}
          </p>
        ))}
        <p style={{ margin: 0, lineHeight: 1.75, fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>
          NOTE: For best results, we recommend using Skye daily during the first 2 to 3 weeks. Start with a 5-minute Morning Focus session <strong>(Mode 1)</strong> soon after waking up, while still in bed, to help you begin the day feeling calm, clear, and focused. Before sleep, use a 7-minute Sleep One session <strong>(Mode 3)</strong> as soon as you get into bed to help your body slow down, unwind, and prepare for better rest.
        </p>
      </div>
    ),
  },
  {
    title: "Warranty",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <p style={{ margin: 0, lineHeight: 1.75, fontSize: "clamp(13px, 1vw, 15px)", color: "#222" }}>
          Skye is covered by a limited warranty against defects in materials and workmanship for one year from the date of original purchase. NOTE: This warranty applies only to products purchased directly from www.skyedevices.com
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <a href="/refund" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#222", textDecoration: "underline" }}>
            Cancellation & Refund Policy
          </a>
          <a href="/warranty" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#222", textDecoration: "underline" }}>
            Warranty Policy
          </a>
        </div>
      </div>
    ),
  },
];

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ borderTop: "1px solid #ddd" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: "clamp(16px, 2.5vh, 24px) 0",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "clamp(18px, 1.8vw, 26px)",
            fontWeight: 600,
            color: "#111",
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "clamp(18px, 1.6vw, 24px)",
            color: "#111",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
            marginLeft: "16px",
          }}
        >
          &#8964;
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "2000px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div style={{ paddingBottom: "clamp(20px, 3vh, 36px)" }}>
          {content}
        </div>
      </div>
    </div>
  );
};

const ProductAccordion = () => {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "clamp(16px, 4vw, 48px) clamp(24px, 7vw, 120px)",
        maxWidth: "1400px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div style={{ borderBottom: "1px solid #ddd" }}>
        {sections.map((s, i) => (
          <AccordionItem key={i} title={s.title} content={s.content} />
        ))}
      </div>
    </section>
  );
};

export default ProductAccordion;