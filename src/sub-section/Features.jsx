import React from "react";
import featuresImg from "../images/Featuress.png";
import { NavLink, Link } from "react-router-dom";

const steps = [
  { n: "1.", bold: "Skye vibrates. Breathe in.", sub: "Feel the pulse in your hand." },
  { n: "2.", bold: "Skye stops. Hold.", sub: "Pause for a moment." },
  { n: "3.", bold: "Skye vibrates again. Breathe out.", sub: "Let your body relax." },
  { n: "4.", bold: "Skye stops. Hold.", sub: "Feel calmer with each breath." },
];

const Feature = () => {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
        }}
      >

        {/* Image with overlaid text */}
        <div style={{ position: "relative", lineHeight: 0 }}>
          <img
            src={featuresImg}
            alt="Skye gently vibrates in the palm of your hand"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />

          {/* Headline */}
          <h2
            style={{
              position: "absolute",
              top: "8%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              textAlign: "center",
              fontSize: "clamp(16px, 2.2vw, 34px)",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Skye gently vibrates in the
            <br />
            palm of your hand.
          </h2>

          {/* Annotation left — Modern Scandinavian */}
          <div
            style={{
              position: "absolute",
              left: "5%",
              top: "54%",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(8px, 0.75vw, 13px)",
                color: "#111",
                lineHeight: 1.4,
                margin: 0,
                textAlign: "center",
              }}
            >
              Modern Scandinavian-<br />inspired design
            </p>
            <div style={{ width: "clamp(16px, 2.5vw, 44px)", height: "1px", backgroundColor: "#555", flexShrink: 0 }} />
          </div>

          {/* Annotation right — Tactile guidance */}
          <div
            style={{
              position: "absolute",
              right: "5%",
              top: "60%",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <div style={{ width: "clamp(16px, 2.5vw, 44px)", height: "1px", backgroundColor: "#555", flexShrink: 0 }} />
            <p
              style={{
                fontSize: "clamp(8px, 0.75vw, 13px)",
                color: "#111",
                lineHeight: 1.4,
                margin: 0,
                textAlign: "left",
              }}
            >
              Tactile guidance<br />to guide your<br />breath
            </p>
          </div>
        </div>

        {/* Right content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(20px, 2.8vh, 32px)",
            padding: "clamp(32px, 5vw, 72px) clamp(28px, 5vw, 72px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.2vh, 26px)", width: "100%" }}>
            {steps.map((item) => (
              <div key={item.n}>
                <p style={{ fontSize: "clamp(14px, 1.1vw, 17px)", fontWeight: 700, color: "#111", margin: 0, lineHeight: 1.4 }}>
                  {item.n} {item.bold}
                </p>
                <p style={{ fontSize: "clamp(13px, 1vw, 16px)", color: "#444", margin: "5px 0 0 0", lineHeight: 1.6 }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center sm:justify-start"> 
  <NavLink
    to="/shop" // Don't forget your destination path!
    className="flex items-center justify-center bg-[#3b5bdb] hover:bg-[#2f4ac4] transition-colors text-white py-4 w-[260px] rounded-full text-base font-semibold shadow-md"
  >
    Get Skye now
  </NavLink>
</div>

          <p style={{ fontSize: "clamp(13px, 1vw, 16px)", color: "#333", margin: 0 }}>
            Delivery in 7–10 business days
          </p>
        </div>

      </div>
    </section>
  );
};

export default Feature;