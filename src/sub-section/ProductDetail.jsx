import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainImage from "../images/shop/MainImage.png";
import MainImage1 from "../images/shop/MainImage1.png";
import MainImage2 from "../images/shop/MainImage2.png";
import MainImage3 from "../images/shop/MainImage3.png";
import MainImage4 from "../images/shop/MainImage4.png";
import MainImage5 from "../images/shop/MainImage5.png";

const images = [MainImage, MainImage1, MainImage2, MainImage3, MainImage4, MainImage5];

const features = [
  { text: "Delivery time: 7-10 working days.", link: { label: "Learn more.", href: "/shipping" } },
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
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const basePrice = 4100;
  const currentPrice = appliedCoupon ? basePrice - appliedCoupon.discountAmount : basePrice;


  const handleApplyCoupon = async (e) => {
    e?.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (!cleanCode) {
      setCouponError("Please enter a coupon code");
      return;
    }

    setIsValidating(true);
    setCouponError("");

    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
      const res = await fetch(`${apiBase}/api/validate-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: cleanCode }),
      });

      const data = await res.json();
      if (res.ok && data.valid) {
        setAppliedCoupon({
          code: data.code || cleanCode,
          discountAmount: data.discountAmount || 500,
          affiliateName: data.affiliateName || "",
        });
        setCouponError("");
      } else {
        setCouponError(data.message || "Invalid or expired coupon code");
      }
    } catch (err) {
      console.error("Coupon validation error:", err);
      setCouponError("Unable to validate coupon. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };



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

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
            
            {/* Price Block */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
              {/* Main Price */}
              <p
                style={{
                  fontSize: "clamp(26px, 2.8vw, 38px)",
                  fontWeight: 800,
                  color: "#2563eb",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Rs. {currentPrice}
              </p>

              {/* Original Price (When coupon is applied) */}
              {appliedCoupon && (
                <>
                  <p
                    style={{
                      fontSize: "clamp(18px, 1.5vw, 22px)",
                      fontWeight: 600,
                      color: "#9ca3af",
                      textDecoration: "line-through",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Rs. {basePrice}
                  </p>
                  
                  <span style={{
                    fontSize: "clamp(12px, 0.85vw, 14px)",
                    fontWeight: 700,
                    color: "#15803d",
                    backgroundColor: "#dcfce7",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    alignSelf: "center"
                  }}>
                    -Rs. {appliedCoupon.discountAmount} off
                  </span>
                </>
              )}
            </div>

            {/* GST Info */}
            <p style={{ fontSize: "clamp(13px, 0.9vw, 14px)", color: "#6b7280", margin: "2px 0 0 0" }}>
              Price including 18% GST & free shipping
            </p>

            {/* Coupon Code Input Section */}
            <div style={{ marginTop: "12px", maxWidth: "400px", width: "100%" }}>
              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value.toUpperCase());
                      if (couponError) setCouponError("");
                    }}
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: couponError ? "1.5px solid #ef4444" : "1.5px solid #d1d5db",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      outline: "none",
                      backgroundColor: "#f9fafb",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isValidating || !couponCode.trim()}
                    style={{
                      padding: "10px 18px",
                      backgroundColor: couponCode.trim() ? "#111827" : "#9ca3af",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: couponCode.trim() ? "pointer" : "not-allowed",
                      transition: "background-color 0.15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isValidating ? "Checking..." : "Apply"}
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#16a34a", fontWeight: 700, fontSize: "14px" }}>✓</span>
                    <span style={{ fontSize: "14px", color: "#166534", fontWeight: 600 }}>
                      Code <strong>{appliedCoupon.code}</strong> applied (-₹{appliedCoupon.discountAmount})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#dc2626",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: 0,
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}

              {couponError && (
                <p style={{ color: "#ef4444", fontSize: "13px", margin: "6px 0 0 2px", fontWeight: 500 }}>
                  {couponError}
                </p>
              )}
            </div>

            {/* Batches Section */}
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "8px", 
              marginTop: "20px",
              width: "100%",
              maxWidth: "400px"
            }}>
              
              {/* Batch 1 */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                padding: "10px 14px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    fontSize: "clamp(12px, 0.8vw, 13px)",
                    fontWeight: 700,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    Batch 1
                  </span>
                  <span style={{
                    fontSize: "clamp(10px, 0.7vw, 11px)",
                    fontWeight: 600,
                    color: "#6b7280",
                    backgroundColor: "#e5e7eb",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    textTransform: "uppercase"
                  }}>
                    Sold Out
                  </span>
                </div>
                <span style={{ 
                  fontSize: "clamp(11px, 0.75vw, 12px)", 
                  color: "#9ca3af",
                  fontWeight: 500
                }}>
                  Jan, 2026
                </span>
              </div>

              {/* Batch 2 */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                padding: "10px 14px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    fontSize: "clamp(12px, 0.8vw, 13px)",
                    fontWeight: 700,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    Batch 2
                  </span>
                  <span style={{
                    fontSize: "clamp(10px, 0.7vw, 11px)",
                    fontWeight: 600,
                    color: "#6b7280",
                    backgroundColor: "#e5e7eb",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    textTransform: "uppercase"
                  }}>
                    Sold Out
                  </span>
                </div>
                <span style={{ 
                  fontSize: "clamp(11px, 0.75vw, 12px)", 
                  color: "#9ca3af",
                  fontWeight: 500
                }}>
                  Jun, 2026
                </span>
              </div>

              {/* Batch 3 (Active) */}
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                padding: "12px 14px",
                backgroundColor: "#111827",
                border: "1px solid #111827",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    display: "inline-block"
                  }}></span>
                  <span style={{
                    fontSize: "clamp(12px, 0.85vw, 14px)",
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    Batch 3
                  </span>
                </div>
                <span style={{
                  fontSize: "clamp(11px, 0.8vw, 12px)",
                  fontWeight: 700,
                  color: "#10b981", 
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Ships September 2026
                </span>
              </div>

            </div>
          </div>

          <button
            onClick={() =>
              navigate("/checkout", {
                state: { appliedCoupon, currentPrice, basePrice },
              })
            }
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
            Order Now – Rs. {currentPrice}
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