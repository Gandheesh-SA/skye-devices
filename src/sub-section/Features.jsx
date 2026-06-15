import React from "react";
import featuresImg from "../images/Featuress.png";
import { NavLink } from "react-router-dom";

const Feature = () => {
  const A = "#f59e0b";

  return (
    <section style={{ backgroundColor: "#fff", width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          alignItems: "stretch",
          minHeight: "clamp(320px, 45vw, 520px)",
        }}
      >
        {/* Left: Image */}
        <div style={{ position: "relative", lineHeight: 0, minHeight: "clamp(240px, 38vw, 520px)" }}>
          <img
            src={featuresImg}
            alt="Skye gently vibrates"
            style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
          />
      
        </div>

        {/* Right: Dark panel */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(20px, 3.5vw, 44px) clamp(14px, 3vw, 48px)",
            gap: "clamp(10px, 1.8vw, 20px)",
          }}
        >
          {/* Heading */}
          <div>
            <h2
              style={{
                margin: 0,
                color: A,
                fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)",
                fontWeight: 800,
              }}
            >
              How it works
            </h2>
            <p
              style={{
                marginTop: "6px",
                color: "#d1d5db",
                fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                margin: "6px 0 0",
              }}
            >
              Choose an exercise you need
            </p>
          </div>

          {/* Flow Section */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              display: "flex",
              justifyContent: "center",
              padding: "16px clamp(16px, 4vw, 48px)",
            }}
          >
            {/* LEFT BRACKET */}
            <div style={{ position: "absolute", left: "3%", top: "4%", bottom: "4%", width: "28px" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: A }} />
              <div style={{ position: "absolute", left: 0, top: 0, width: "28px", height: "2px", background: A }} />
              <div style={{ position: "absolute", left: 0, bottom: 0, width: "28px", height: "2px", background: A }} />
            </div>

            {/* RIGHT BRACKET */}
            <div style={{ position: "absolute", right: "3%", top: "4%", bottom: "4%", width: "28px" }}>
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "2px", background: A }} />
              <div style={{ position: "absolute", right: 0, top: 0, width: "28px", height: "2px", background: A }} />
              <div style={{ position: "absolute", right: 0, bottom: 0, width: "28px", height: "2px", background: A }} />
            </div>
{/* TOP LEFT EXTENSION */}
<div
  style={{
    position: "absolute",
    top: "4%",
    left: "calc(3% + 28px)",
    width: "22%",
    height: "2px",
    background: A,
  }}
/>

{/* TOP RIGHT EXTENSION */}
<div
  style={{
    position: "absolute",
    top: "4%",
    right: "calc(3% + 28px)",
    width: "18%",
    height: "2px",
    background: A,
  }}
/>

{/* BOTTOM LEFT EXTENSION */}
<div
  style={{
    position: "absolute",
    bottom: "4%",
    left: "calc(3% + 28px)",
    width: "22%",
    height: "2px",
    background: A,
  }}
/>

{/* BOTTOM RIGHT EXTENSION */}
<div
  style={{
    position: "absolute",
    bottom: "4%",
    right: "calc(3% + 28px)",
    width: "18%",
    height: "2px",
    background: A,
  }}
/>




            

            {/* STEPS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 1.2vw, 12px)",
                maxWidth: "460px",
                width: "100%",
              }}
            >
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem, 1.6vw, 1.5rem)", lineHeight: 1.35 }}>
                Skye starts vibrating.<br />Breathe in.
              </div>
              <div style={{ color: A, fontSize: "clamp(1rem, 1.8vw, 1.5rem)", lineHeight: 1 }}>↓</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem, 1.6vw, 1.5rem)", lineHeight: 1.35 }}>
                Skye stops. Hold.
              </div>
              <div style={{ color: A, fontSize: "clamp(1rem, 1.8vw, 1.5rem)", lineHeight: 1 }}>↓</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem, 1.6vw, 1.5rem)", lineHeight: 1.35 }}>
                Skye vibrates again.<br />Breathe out.
              </div>
              <div style={{ color: A, fontSize: "clamp(1rem, 1.8vw, 1.5rem)", lineHeight: 1 }}>↓</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem, 1.6vw, 1.5rem)", lineHeight: 1.35 }}>
                Skye stops.<br />Hold again.
              </div>
            </div>
          </div>

          {/* CTA */}
          <NavLink
            to="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "clamp(130px, 15vw, 220px)",
              padding: "9px 24px",
              borderRadius: "999px",
              background: "#3153FF",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "clamp(0.78rem, 1.2vw, 0.95rem)",
              boxShadow: "0 6px 18px rgba(49,83,255,.35)",
              transition: "all .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "#2648e8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#3153FF";
            }}
          >
            Get Skye
          </NavLink>

          <p style={{ margin: 0, color: "#d1d5db", fontSize: "clamp(0.7rem, 1vw, 0.85rem)" }}>
            Delivery in 7–10 business days
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;