import React from "react";
import Science1 from "../images/Science1.png";
import Science2 from "../images/Science2.png";

export default function ScienceSection() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>

      {/* ── PART 1: Dark bg — Science behind Skye ── */}
      <div
        style={{
          backgroundColor: "#2f2f2f",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          minHeight: isMobile ? "auto" : "70vh",
        }}
      >
        {/* Left: Text content — on mobile renders BELOW image so swap order */}
        {/* Image first on mobile (via order), text second */}

        {/* Right: Image with caption overlay */}
        <div
          style={{
            flex: "1 1 50%",
            position: "relative",
            overflow: "hidden",
            minHeight: isMobile ? "55vw" : "70vh",
            order: isMobile ? 0 : 1,
          }}
        >
          <img
            src={Science1}
            alt="The science behind Skye"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1rem 1.25rem",
              background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
            }}
          >
            <p style={{ color: "white", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.25rem)", margin: 0 }}>
              The science behind Skye
            </p>
          </div>
        </div>

        {/* Left: Text content */}
        <div
          style={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.25rem",
            padding: isMobile
              ? "2rem 1.5rem"
              : "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
            order: isMobile ? 1 : 0,
          }}
        >
          <p
            style={{
              color: "#e5e5e5",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              lineHeight: "1.75",
              margin: 0,
              textAlign: "center",
            }}
          >
            Skye works by activating the vagus nerve, the main pathway between
            your brain and body, and a key part of the parasympathetic nervous
            system. When you breathe at the right rhythm, your heart rate slows,
            cortisol levels drop, and your body moves into a calmer, more
            relaxed state.
          </p>
          <p
            style={{
              color: "#e5e5e5",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              lineHeight: "1.75",
              margin: 0,
              textAlign: "center",
            }}
          >
            That's how Skye's guided breathing can help you feel calmer within
            minutes, from easing stress to helping you fall asleep more
            naturally.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
            <button
              style={{
                padding: "0.65rem 1.75rem",
                borderRadius: "9999px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
                fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1a1a1a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              More Research
            </button>
          </div>
        </div>
      </div>

      {/* ── PART 2: Full-bleed image section — 30 days ── */}
      <div style={{ position: "relative", width: "100%", minHeight: isMobile ? "70vw" : "80vh" }}>
        <img
          src={Science2}
          alt="Experience life-changing results in 30 days"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            minHeight: isMobile ? "70vw" : "80vh",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: isMobile ? "1.5rem" : "clamp(2.5rem, 6vw, 5rem)",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: isMobile ? "1.25rem" : "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              lineHeight: 1.3,
              maxWidth: "28rem",
              margin: "0 0 0.75rem",
            }}
          >
            Experience life-changing results in 30 days
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: isMobile ? "0.82rem" : "clamp(0.875rem, 1.4vw, 1.05rem)",
              maxWidth: "22rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Everyone's experience is different, but these are the kinds of
            changes people often notice. We're not magicians, but we think these
            results are pretty magical.
          </p>
        </div>
      </div>

      {/* ── PART 3: Dark bg — Day breakdown ── */}
      <div
        style={{
          backgroundColor: "#2f2f2f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile
            ? "2.5rem 1.25rem"
            : "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
          gap: isMobile ? "2rem" : "2.5rem",
          minHeight: isMobile ? "auto" : "60vh",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "56rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "space-between",
            gap: isMobile ? "0" : "0",
          }}
        >
          {/* Day 1–10 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: isMobile ? "1.5rem 1rem" : "0 1.25rem",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <h3 style={{ color: "#fbbf24", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 800, marginBottom: "0.75rem", marginTop: 0 }}>
              Day 1-10
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "clamp(0.85rem, 1.3vw, 1rem)", lineHeight: 1.7, margin: 0 }}>
              Get accustomed to syncing your breath with the vibration of Skye.
            </p>
          </div>

          {/* Divider — horizontal on mobile, vertical on desktop */}
          <div
            style={
              isMobile
                ? { width: "60%", height: "1px", background: "#4b5563", alignSelf: "center" }
                : { width: "1px", alignSelf: "stretch", background: "#4b5563" }
            }
          />

          {/* Day 11–20 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: isMobile ? "1.5rem 1rem" : "0 1.25rem",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <h3 style={{ color: "#fbbf24", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 800, marginBottom: "0.75rem", marginTop: 0 }}>
              Day 11-20
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "clamp(0.85rem, 1.3vw, 1rem)", lineHeight: 1.7, margin: 0 }}>
              You'll notice that slow breathing triggers parasympathetic activity,
              helping your body to relax.
            </p>
          </div>

          <div
            style={
              isMobile
                ? { width: "60%", height: "1px", background: "#4b5563", alignSelf: "center" }
                : { width: "1px", alignSelf: "stretch", background: "#4b5563" }
            }
          />

          {/* Day 21–30 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: isMobile ? "1.5rem 1rem" : "0 1.25rem",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <h3 style={{ color: "#fbbf24", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 800, marginBottom: "0.75rem", marginTop: 0 }}>
              Day 21-30
            </h3>
            <p style={{ color: "#d1d5db", fontSize: "clamp(0.85rem, 1.3vw, 1rem)", lineHeight: 1.7, margin: 0 }}>
              Breathing with Skye you will experience deep relaxation as your
              heart rate syncs with your breathing.
            </p>
          </div>
        </div>

        <p style={{ color: "#9ca3af", fontSize: "clamp(0.75rem, 1.1vw, 0.875rem)", textAlign: "center", margin: 0 }}>
          *For the optimal results, use Skye daily for 2 to 3 weeks.
        </p>
      </div>
    </div>
  );
}