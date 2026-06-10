import React from "react";
import scienceImage from "../images/shop/Science.png";

const ScienceBehindSkye = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: "clamp(32px, 5vw, 72px) clamp(24px, 6vw, 80px)" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(24px, 4vw, 64px)",
          alignItems: "center",
        }}
      >

        <div style={{ borderRadius: "12px", overflow: "hidden", lineHeight: 0, width: "100%" }}>
          <img
            src={scienceImage}
            alt="The science behind Skye"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2.5vh, 26px)",
            textAlign: "center",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(20px, 2.4vw, 38px)",
              fontWeight: 800,
              color: "#111",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            The science behind Skye
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "#333",
              lineHeight: 1.8,
              margin: 0,
              wordBreak: "break-word",
            }}
          >
            Skye works by activating the vagus nerve, the main pathway between your brain and body, and a key part of the parasympathetic nervous system. When you breathe at the right rhythm, your heart rate slows, cortisol levels drop, and your body moves into a calmer, more relaxed state.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "#333",
              lineHeight: 1.8,
              margin: 0,
              wordBreak: "break-word",
            }}
          >
            That's how Skye's guided breathing can help you feel calmer within minutes, from easing stress to helping you fall asleep more naturally.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "clamp(10px, 1.4vh, 16px) clamp(24px, 2.5vw, 40px)",
                fontSize: "clamp(13px, 1vw, 16px)",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#111")}
            >
              More Research
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScienceBehindSkye;