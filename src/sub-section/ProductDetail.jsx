import React, { useState } from "react";
import MainImage from "../images/shop/MainImage.png";
import MainImage1 from "../images/shop/MainImage1.png";
import MainImage2 from "../images/shop/MainImage2.png";
import MainImage3 from "../images/shop/MainImage3.png";
import MainImage4 from "../images/shop/MainImage4.png";
import MainImage5 from "../images/shop/MainImage5.png";

const images = [MainImage, MainImage1, MainImage2, MainImage3, MainImage4, MainImage5];

const features = [
  { text: "Delivery time: 7-10 working days.", link: { label: "Learn more.", href: "#" } },
  { text: "1-year warranty and free shipping" },
  { text: "Up to 14 days of battery life" },
  { text: "100% charge in 2 hours using USB-c" },
  { text: "Modern Scandinavian-inspired design" },
];

const linkStyle = {
  color: "#3b5bdb",
  textDecoration: "underline",
  fontWeight: 500,
};

const ProductDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section style={{ backgroundColor: "#fff", padding: "clamp(24px, 5vw, 64px) clamp(24px, 6vw, 80px)" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(24px, 4vw, 64px)",
          alignItems: "start",
        }}
      >

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Main image — fully rounded all sides */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "1 / 1",
              backgroundColor: "#f0ede8",
              width: "100%",
            }}
          >
            <img
              src={images[activeIndex]}
              alt={"Skye device view " + (activeIndex + 1)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "opacity 0.2s",
              }}
            />
          </div>

          {/* Thumbnails only — no arrows, no dots */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={"View image " + (i + 1)}
                style={{
                  width: "clamp(48px, 13%, 76px)",
                  aspectRatio: "1 / 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: activeIndex === i ? "2.5px solid #3b5bdb" : "2px solid #e0ddd8",
                  padding: 0,
                  cursor: "pointer",
                  flexShrink: 0,
                  backgroundColor: "#f0ede8",
                  transition: "border-color 0.15s",
                }}
              >
                <img
                  src={img}
                  alt={"Thumbnail " + (i + 1)}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vh, 28px)" }}>

          <h1
            style={{
              fontSize: "clamp(24px, 3vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#111",
              margin: 0,
            }}
          >
            Skye, a haptic breathing guide for focused mornings, calmer days, and better sleep.
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "#333",
              lineHeight: 1.75,
              margin: 0,
              textAlign: "justify",
            }}
          >
            Hold it in your hand. Breathe along. Slow down. The first thing you do in the morning, the last thing before sleep, and anytime in between.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p
              style={{
                fontSize: "clamp(22px, 2.2vw, 34px)",
                fontWeight: 700,
                color: "#111",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Rs. 4100.00
            </p>
            <p style={{ fontSize: "clamp(13px, 0.9vw, 15px)", color: "#555", margin: 0 }}>
              (Price including 18% GST)
            </p>
          </div>

          <button
  onClick={() => {
    // Vite uses import.meta.env instead of process.env
    const url = import.meta.env.VITE_PAYMENT_URL || "https://rzp.io/rzp/skyeone";
    window.open(url, "_blank", "noopener,noreferrer");
  }}
  style={{
    backgroundColor: "#3b5bdb",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "clamp(12px, 1.5vh, 18px) clamp(32px, 3vw, 52px)",
    fontSize: "clamp(14px, 1vw, 17px)",
    fontWeight: 600,
    cursor: "pointer",
    width: "fit-content",
    letterSpacing: "0.01em",
    transition: "background-color 0.15s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2f4ac4")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b5bdb")}
>
  Buy now
</button>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.2vh, 16px)", paddingTop: "4px" }}>
            {features.map((f, i) => (
              <p
                key={i}
                style={{ fontSize: "clamp(13px, 0.95vw, 16px)", color: "#222", margin: 0, lineHeight: 1.5 }}
              >
                {f.text}
                {f.link && (
                  <a href={f.link.href} style={linkStyle}>
                    {" "}{f.link.label}
                  </a>
                )}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;