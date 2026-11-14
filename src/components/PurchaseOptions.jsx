import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PurchaseOptions({ productId = "silver" }) {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const basePrice = productId === "red" ? 3990 : 3490;
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
        body: JSON.stringify({ code: cleanCode, productId }),
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
    <div className="purchase-options">
      <div className="purchase-price">
        <div className="purchase-price-line">
          <p className="purchase-amount">Rs. {currentPrice}</p>
          {appliedCoupon && <del>Rs. {basePrice}</del>}
          {appliedCoupon && <span className="purchase-discount">-Rs. {appliedCoupon.discountAmount} off</span>}
        </div>
        <p className="purchase-tax">Price including 18% GST & free shipping</p>
      </div>

      <div className="purchase-coupon">
        {!appliedCoupon ? (
          <form onSubmit={handleApplyCoupon}>
            <input
              type="text"
              aria-label="Coupon or affiliate code"
              placeholder="Enter coupon code"
              value={couponCode}
              aria-invalid={Boolean(couponError)}
              aria-describedby={couponError ? "coupon-error" : undefined}
              onChange={(e) => {
                setCouponCode(e.target.value.toUpperCase());
                if (couponError) setCouponError("");
              }}
            />
            <button type="submit" disabled={isValidating || !couponCode.trim()}>
              {isValidating ? "Checking..." : "Apply"}
            </button>
          </form>
        ) : (
          <div className="purchase-applied" role="status">
            <span>✓ Code <strong>{appliedCoupon.code}</strong> applied (-₹{appliedCoupon.discountAmount})</span>
            <button type="button" onClick={handleRemoveCoupon}>Remove</button>
          </div>
        )}
        {couponError && <p className="purchase-error" id="coupon-error" role="alert">{couponError}</p>}
      </div>

      <button
        className="purchase-order"
        onClick={() => navigate("/checkout", { state: { appliedCoupon, currentPrice, basePrice, productId } })}
      >
        Order Now – Rs. {currentPrice}
      </button>
    </div>
  );
}
