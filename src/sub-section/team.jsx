import React from "react";
import corporates from "../images/Corporates.png"

const TeamBanner = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: "clamp(16px, 3vw, 40px) clamp(24px, 6vw, 80px) clamp(32px, 5vw, 72px)" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <img
          src={corporates}
          alt="Help your team feel calmer"
          style={{ width: "100%", display: "block", objectFit: "cover", minHeight: "320px" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 2.5vh, 28px)",
            padding: "clamp(24px, 4vw, 56px)",
            textAlign: "center",
            lineHeight: "normal",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 2.6vw, 40px)",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.25,
              maxWidth: "520px",
            }}
          >
            Help your team feel calmer, more focused, and better rested.
          </h2>

          <button
            style={{
              backgroundColor: "#fff",
              color: "#111",
              border: "none",
              borderRadius: "999px",
              padding: "clamp(10px, 1.4vh, 16px) clamp(28px, 3vw, 48px)",
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;