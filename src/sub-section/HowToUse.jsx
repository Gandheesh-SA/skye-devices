import React from "react";
import orangeSkye from "../images/shop/orangeSkye.png";
import hinduLogo from "../images/HinduLogo.png";

const HowToUse = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: "clamp(32px, 5vw, 72px) 0 clamp(32px, 5vw, 72px) 0" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
        }}
      >

        <div style={{ position: "relative", lineHeight: 0 }}>
          <img
            src={orangeSkye}
            alt="How to use Skye"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "clamp(20px, 5%, 40px)",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
              padding: "clamp(8px, 1.2vh, 14px) clamp(18px, 3vw, 36px)",
              borderRadius: "4px",
              whiteSpace: "nowrap",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(16px, 1.8vw, 28px)",
                fontWeight: 800,
                color: "#111",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              How to use Skye
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(24px, 3vh, 36px)",
            padding: "clamp(32px, 5vw, 72px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(18px, 2.5vh, 28px)" }}>
            {[
              { n: "1.", bold: "Skye vibrates. Breathe in.", sub: "Feel the pulse in your hand." },
              { n: "2.", bold: "Skye stops. Hold.", sub: "Pause for a moment." },
              { n: "3.", bold: "Skye vibrates again. Breathe out.", sub: "Let your body relax." },
              { n: "4.", bold: "Skye stops. Hold.", sub: "Feel calmer with each breath." },
            ].map((item) => (
              <div key={item.n} style={{ textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "clamp(15px, 1.2vw, 19px)", fontWeight: 700, color: "#111", lineHeight: 1.4 }}>
                  {item.n} {item.bold}
                </p>
                <p style={{ margin: "4px 0 0 0", fontSize: "clamp(13px, 1vw, 17px)", color: "#444", lineHeight: 1.6 }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", paddingTop: "8px" }}>
            <p style={{ margin: 0, fontSize: "clamp(14px, 1.1vw, 17px)", fontWeight: 700, color: "#111" }}>
              Featured in The Hindu
            </p>
      <a
  href="https://www.thehindu.com/life-and-style/this-simple-timer-device-is-changing-the-way-people-manage-focus-and-time/article70028603.ece"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={hinduLogo}
    alt="The Hindu"
    style={{
      width: "clamp(120px, 14vw, 200px)",
      objectFit: "contain",
      display: "block",
      cursor: "pointer",
    }}
  />
</a>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "clamp(40px, 6vh, 80px) clamp(24px, 4vw, 48px) 0",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 2.6vw, 40px)",
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.2,
            margin: "0 0 clamp(14px, 2vh, 24px) 0",
          }}
        >
          Feel the difference in
          <br />
          just 30 days
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 1.1vw, 17px)",
            color: "#444",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Loved by students, professionals, and people seeking better rest. Skye helps you feel calmer, more focused, and better rested with just a few minutes of guided breathing each day.
        </p>
      </div>

    </section>
  );
};

export default HowToUse;