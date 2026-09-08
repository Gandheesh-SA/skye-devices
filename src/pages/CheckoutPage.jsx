import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainImage from "../images/shop/MainImage.png";

// ─── Indian States ─────────────────────────────────────────────────────────────
const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

// ─── Step Indicator ────────────────────────────────────────────────────────────
function StepIndicator({ currentStep, steps }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: "32px" }}>
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const done = stepNum < currentStep;
        const active = stepNum === currentStep;
        return (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  backgroundColor: done ? "#3b5bdb" : active ? "#3b5bdb" : "#e5e7eb",
                  color: done || active ? "#fff" : "#6b7280",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {done ? "✓" : stepNum}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#3b5bdb" : done ? "#374151" : "#9ca3af",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: "2px",
                  backgroundColor: done ? "#3b5bdb" : "#e5e7eb",
                  margin: "0 8px",
                  marginBottom: "20px",
                  transition: "background-color 0.2s",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Form Field ────────────────────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: "#374151",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}
      >
        {label}
        {required && <span style={{ color: "#ef4444", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = (hasError) => ({
  padding: "11px 14px",
  borderRadius: "10px",
  border: `1.5px solid ${hasError ? "#ef4444" : "#d1d5db"}`,
  fontSize: "15px",
  color: "#111",
  backgroundColor: "#fafafa",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
});

const selectStyle = (hasError) => ({
  ...inputStyle(hasError),
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: "36px",
  cursor: "pointer",
});

// ─── Main CheckoutPage ─────────────────────────────────────────────────────────
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Inherit coupon/price state from ProductDetail navigate()
  const { appliedCoupon = null, currentPrice = 4100, basePrice = 4100 } =
    location.state || {};

  const [step, setStep] = useState(1);

  // Step 1 — Personal info
  const [personal, setPersonal] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    occupation: "",
  });

  // Step 2 — Address
  const [address, setAddress] = useState({
    pincode: "",
    area: "",
    city: "",
    state: "",
    country: "India",
    line1: "",
    landmark: "",
  });

  const [pincodeLoading, setPincodeLoading] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState(null); // { type: 'success'|'warning', message: '' }
  const [areaSuggestions, setAreaSuggestions] = useState([]);

  // Step 3 — Payment
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(null);

  // Validation errors
  const [errors, setErrors] = useState({});

  // ── Validate step 1 ──
  const validateStep1 = () => {
    const e = {};
    if (!personal.name.trim()) e.name = "Name is required";
    if (!personal.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(personal.phone.trim())) e.phone = "Enter a valid 10-digit number";
    if (!personal.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personal.email.trim())) e.email = "Enter a valid email";
    // DOB and Occupation are optional
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Auto-fill address on PIN code entry ──
  const handlePincodeChange = async (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setAddress((prev) => ({ ...prev, pincode: val }));
    if (errors.pincode) setErrors((prev) => ({ ...prev, pincode: "" }));
    setPincodeStatus(null);

    if (val.length === 6) {
      setPincodeLoading(true);
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${val}`);
        const data = await res.json();
        if (Array.isArray(data) && data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
          const postOffices = data[0].PostOffice;
          const district = postOffices[0].District || "";
          const rawState = postOffices[0].State || "";
          const matchedState =
            INDIAN_STATES.find(
              (s) => s.toLowerCase() === rawState.trim().toLowerCase()
            ) || rawState;

          const uniqueAreas = [
            ...new Set(postOffices.map((po) => po.Name).filter(Boolean)),
          ];
          setAreaSuggestions(uniqueAreas);

          setAddress((prev) => ({
            ...prev,
            pincode: val,
            city: district || prev.city,
            state: matchedState || prev.state,
            area: uniqueAreas[0] || prev.area || "",
          }));

          setErrors((prev) => {
            const next = { ...prev };
            delete next.city;
            delete next.state;
            return next;
          });

          setPincodeStatus({
            type: "success",
            message: `Auto-filled: ${district ? district + ", " : ""}${matchedState}. You can edit Area, City, and State below if needed.`,
          });
        } else {
          setAreaSuggestions([]);
          setPincodeStatus({
            type: "warning",
            message: "PIN code details not found. You can enter Area, City, and State manually.",
          });
        }
      } catch {
        setAreaSuggestions([]);
        setPincodeStatus({
          type: "warning",
          message: "Could not auto-fetch location. You can enter Area, City, and State manually.",
        });
      } finally {
        setPincodeLoading(false);
      }
    } else {
      setAreaSuggestions([]);
    }
  };

  // ── Validate step 2 ──
  const validateStep2 = () => {
    const e = {};
    if (!address.pincode.trim()) e.pincode = "PIN code is required";
    else if (!/^\d{6}$/.test(address.pincode.trim())) e.pincode = "Enter a valid 6-digit PIN code";
    if (!address.city.trim()) e.city = "City / District is required";
    if (!address.state.trim()) e.state = "State is required";
    if (!address.line1.trim()) e.line1 = "Main address (Flat / House / Building / Street) is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const getCombinedAddress = () => {
    const line1 = address.line1.trim();
    const line2Parts = [];
    if (address.area.trim()) line2Parts.push(address.area.trim());
    if (address.landmark.trim()) line2Parts.push(`Landmark: ${address.landmark.trim()}`);
    const line2 = line2Parts.join(", ");
    return { line1, line2 };
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); }
    if (step === 2 && validateStep2()) { setStep(3); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };

  const handleBack = () => {
    setErrors({});
    setCheckoutError("");
    if (step > 1) setStep(step - 1);
    else navigate(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Initiate Razorpay ──
  const handleInitiateRazorpay = async () => {
    setCheckoutError("");
    setIsProcessingOrder(true);

    const { line1, line2 } = getCombinedAddress();

    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
      const res = await fetch(`${apiBase}/api/orders/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          affiliateCode: appliedCoupon?.code || null,
          customerName: personal.name.trim(),
          customerEmail: personal.email.trim(),
          customerPhone: personal.phone.trim(),
          customerAge: personal.dob ? personal.dob.trim() : null,
          customerOccupation: personal.occupation ? personal.occupation.trim() : null,
          addressLine1: line1,
          addressLine2: line2,
          city: address.city.trim(),
          state: address.state.trim(),
          pincode: address.pincode.trim(),
          country: address.country.trim(),
        }),
      });

      const orderData = await res.json();
      if (!res.ok || !orderData.orderId) {
        throw new Error(orderData.error || "Failed to initiate payment. Please try again.");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded. Please refresh the page.");
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Skye Devices",
        description: "Skye Haptic Breathing Guide",
        order_id: orderData.orderId,
        prefill: {
          name: personal.name,
          email: personal.email,
          contact: personal.phone,
        },
        theme: { color: "#3b5bdb" },
        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${apiBase}/api/orders/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                affiliateCode: appliedCoupon?.code || null,
                customerName: personal.name.trim(),
                customerEmail: personal.email.trim(),
                customerPhone: personal.phone.trim(),
                customerAge: personal.dob ? personal.dob.trim() : null,
                customerOccupation: personal.occupation ? personal.occupation.trim() : null,
                addressLine1: line1,
                addressLine2: line2,
                city: address.city.trim(),
                state: address.state.trim(),
                pincode: address.pincode.trim(),
                country: address.country.trim(),
                baseAmount: basePrice * 100,
                discountAmount: (appliedCoupon?.discountAmount || 0) * 100,
                finalAmount: currentPrice * 100,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              setOrderSuccess({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount: currentPrice,
                customerEmail: personal.email,
              });
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setCheckoutError("Payment verification failed. Please contact contact@skyedevices.com");
            }
          } catch {
            setCheckoutError("Error confirming payment. Please contact support.");
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessingOrder(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setCheckoutError(err.message || "Failed to start checkout");
    } finally {
      setIsProcessingOrder(false);
    }
  };

  const STEPS = ["Personal Info", "Address", "Payment"];

  // ─────────────────────────────────────────────────────────────────────────────
  // SUCCESS SCREEN
  // ─────────────────────────────────────────────────────────────────────────────
  if (orderSuccess) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(24px, 5vw, 64px)",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "clamp(28px, 5vw, 52px)",
            maxWidth: "480px",
            width: "100%",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#dcfce7",
              color: "#16a34a",
              fontSize: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            ✓
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "#111" }}>
            Payment Successful &amp; Order Confirmed
          </h2>
          <p style={{ margin: "0 0 24px", fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
            Thank you for ordering Skye! The team will reach out to you on your registered email &amp; number for further updates.
          </p>
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px 20px",
              textAlign: "left",
              marginBottom: "24px",
              fontSize: "13px",
              fontFamily: "monospace",
            }}
          >
            <p style={{ margin: "0 0 6px", color: "#6b7280" }}>
              Order ID: <strong style={{ color: "#111" }}>{orderSuccess.orderId}</strong>
            </p>
            <p style={{ margin: "0 0 6px", color: "#6b7280" }}>
              Payment ID: <strong style={{ color: "#111" }}>{orderSuccess.paymentId}</strong>
            </p>
            <p style={{ margin: 0, color: "#6b7280" }}>
              Amount Paid: <strong style={{ color: "#16a34a" }}>₹{orderSuccess.amount}</strong>
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#111827",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // MAIN CHECKOUT LAYOUT
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "clamp(20px, 4vw, 48px) clamp(16px, 4vw, 48px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 420px)",
          gap: "clamp(20px, 3vw, 40px)",
          alignItems: "start",
        }}
        className="checkout-grid"
      >
        {/* ── LEFT — Stepper Form ────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 40px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Back link */}
          <button
            onClick={handleBack}
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              padding: "0 0 20px 0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← {step === 1 ? "Back to Shop" : "Back"}
          </button>

          <StepIndicator currentStep={step} steps={STEPS} />

          {/* ── STEP 1: Personal Info ── */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ margin: "0 0 4px", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, color: "#111" }}>
                Personal Information
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                Tell us a bit about yourself.
              </p>

              <Field label="Full Name" required>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={personal.name}
                  onChange={(e) => { setPersonal({ ...personal, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: "" }); }}
                  style={inputStyle(errors.name)}
                />
                {errors.name && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.name}</span>}
              </Field>

              <Field label="Phone / Contact" required>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={personal.phone}
                  onChange={(e) => { setPersonal({ ...personal, phone: e.target.value }); if (errors.phone) setErrors({ ...errors, phone: "" }); }}
                  style={inputStyle(errors.phone)}
                  maxLength={10}
                />
                {errors.phone && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.phone}</span>}
              </Field>

              <Field label="Email Address" required>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={personal.email}
                  onChange={(e) => { setPersonal({ ...personal, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: "" }); }}
                  style={inputStyle(errors.email)}
                />
                {errors.email && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.email}</span>}
              </Field>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <Field label="Date of Birth (Optional)">
                  <input
                    type="date"
                    value={personal.dob}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setPersonal({ ...personal, dob: e.target.value })}
                    style={inputStyle(false)}
                  />
                </Field>

                <Field label="Occupation (Optional)">
                  <input
                    type="text"
                    placeholder="e.g. Engineer, Doctor…"
                    value={personal.occupation}
                    onChange={(e) => setPersonal({ ...personal, occupation: e.target.value })}
                    style={inputStyle(false)}
                  />
                </Field>
              </div>

              <button
                onClick={handleNext}
                style={{
                  marginTop: "8px",
                  padding: "14px 32px",
                  backgroundColor: "#3b5bdb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2f4ac4")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b5bdb")}
              >
                Continue to Address →
              </button>
            </div>
          )}

          {/* ── STEP 2: Address ── */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h2 style={{ margin: "0 0 4px", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, color: "#111" }}>
                  Shipping Address
                </h2>
                <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                  Enter your 6-digit PIN code first to auto-fill your area, city, and state.
                </p>
              </div>

              {/* ── TOP DIVISION: Postal & Area Details ── */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#3b5bdb",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    1. Location &amp; Postal Details
                  </span>
                  {pincodeLoading && (
                    <span style={{ fontSize: "12px", color: "#3b5bdb", fontWeight: 600 }}>
                      Looking up location…
                    </span>
                  )}
                </div>

                {/* PIN Code first */}
                <Field label="PIN Code" required>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter 6-digit PIN code (e.g. 560001)"
                      value={address.pincode}
                      maxLength={6}
                      onChange={handlePincodeChange}
                      style={{
                        ...inputStyle(errors.pincode),
                        backgroundColor: "#fff",
                        paddingRight: pincodeLoading ? "40px" : "14px",
                      }}
                    />
                    {pincodeLoading && (
                      <div
                        style={{
                          position: "absolute",
                          right: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "16px",
                          height: "16px",
                          border: "2px solid #cbd5e1",
                          borderTopColor: "#3b5bdb",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                    )}
                  </div>
                  {errors.pincode && (
                    <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.pincode}</span>
                  )}
                  {pincodeStatus && (
                    <div
                      style={{
                        marginTop: "4px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: pincodeStatus.type === "success" ? "#16a34a" : "#d97706",
                      }}
                    >
                      {pincodeStatus.message}
                    </div>
                  )}
                </Field>

                {/* Area / Locality with suggestion datalist and quick chips */}
                <Field label="Area / Locality">
                  <input
                    type="text"
                    list="area-suggestions-list"
                    placeholder="e.g. Indiranagar, Koramangala (or type your custom area)"
                    value={address.area}
                    onChange={(e) => setAddress({ ...address, area: e.target.value })}
                    style={{ ...inputStyle(false), backgroundColor: "#fff" }}
                  />
                  {areaSuggestions.length > 0 && (
                    <datalist id="area-suggestions-list">
                      {areaSuggestions.map((item, idx) => (
                        <option key={idx} value={item} />
                      ))}
                    </datalist>
                  )}
                  {areaSuggestions.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                      <span style={{ fontSize: "11px", color: "#6b7280", width: "100%" }}>
                        Suggested areas from PIN (click to select or type your own above):
                      </span>
                      {areaSuggestions.slice(0, 8).map((areaName, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAddress((prev) => ({ ...prev, area: areaName }))}
                          style={{
                            fontSize: "11px",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            backgroundColor: address.area === areaName ? "#3b5bdb" : "#e0e7ff",
                            color: address.area === areaName ? "#fff" : "#3730a3",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: 600,
                            transition: "all 0.15s ease",
                          }}
                        >
                          {areaName}
                        </button>
                      ))}
                    </div>
                  )}
                </Field>

                {/* City & State */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <Field label="City / District" required>
                    <input
                      type="text"
                      placeholder="City or District"
                      value={address.city}
                      onChange={(e) => {
                        setAddress({ ...address, city: e.target.value });
                        if (errors.city) setErrors({ ...errors, city: "" });
                      }}
                      style={{ ...inputStyle(errors.city), backgroundColor: "#fff" }}
                    />
                    {errors.city && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.city}</span>}
                  </Field>

                  <Field label="State" required>
                    <select
                      value={address.state}
                      onChange={(e) => {
                        setAddress({ ...address, state: e.target.value });
                        if (errors.state) setErrors({ ...errors, state: "" });
                      }}
                      style={{ ...selectStyle(errors.state), backgroundColor: "#fff" }}
                    >
                      <option value="">Select State / UT</option>
                      {INDIAN_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.state && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.state}</span>}
                  </Field>
                </div>

                {/* Country */}
                <Field label="Country">
                  <input
                    type="text"
                    value={address.country}
                    readOnly
                    style={{
                      ...inputStyle(false),
                      backgroundColor: "#e2e8f0",
                      color: "#475569",
                      fontWeight: 600,
                      cursor: "not-allowed",
                    }}
                  />
                </Field>
              </div>

              {/* ── BOTTOM DIVISION: Main Address & Landmark ── */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#111827",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                  }}
                >
                  2. House &amp; Street Address
                </span>

                {/* Main Address */}
                <Field label="Main Address (Flat, House, Building, Street)" required>
                  <input
                    type="text"
                    placeholder="Flat / House no., Floor, Building, Street / Road"
                    value={address.line1}
                    onChange={(e) => {
                      setAddress({ ...address, line1: e.target.value });
                      if (errors.line1) setErrors({ ...errors, line1: "" });
                    }}
                    style={inputStyle(errors.line1)}
                  />
                  {errors.line1 && <span style={{ color: "#ef4444", fontSize: "12px" }}>{errors.line1}</span>}
                </Field>

                {/* Landmark */}
                <Field label="Landmark (Optional)">
                  <input
                    type="text"
                    placeholder="e.g. Near City Hospital, Opposite Community Park"
                    value={address.landmark}
                    onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                    style={inputStyle(false)}
                  />
                </Field>
              </div>

              <button
                onClick={handleNext}
                style={{
                  marginTop: "8px",
                  padding: "14px 32px",
                  backgroundColor: "#3b5bdb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2f4ac4")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b5bdb")}
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {/* ── STEP 3: Payment ── */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ margin: "0 0 4px", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, color: "#111" }}>
                Review &amp; Pay
              </h2>
              <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                Confirm your details and complete payment securely via Razorpay.
              </p>

              {/* Order recap */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  fontSize: "14px",
                }}
              >
                <p style={{ margin: "0 0 12px", fontWeight: 700, color: "#111", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.6px" }}>
                  Order Summary
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#6b7280" }}>
                    <span>Skye Haptic Breathing Guide</span>
                    <span>₹{basePrice}</span>
                  </div>
                  {appliedCoupon && (
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#16a34a", fontWeight: 600 }}>
                      <span>Coupon ({appliedCoupon.code})</span>
                      <span>-₹{appliedCoupon.discountAmount}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#6b7280" }}>
                    <span>Shipping &amp; GST</span>
                    <span style={{ color: "#16a34a", fontWeight: 600 }}>Included</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "10px",
                      borderTop: "1px solid #e5e7eb",
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "#111",
                    }}
                  >
                    <span>Total</span>
                    <span style={{ color: "#3b5bdb" }}>₹{currentPrice}</span>
                  </div>
                </div>
              </div>

              {/* Customer recap */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: 1.8,
                }}
              >
                <p style={{ margin: "0 0 8px", fontWeight: 700, color: "#111", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.6px" }}>
                  Delivering To
                </p>
                <p style={{ margin: 0 }}>
                  <strong>{personal.name}</strong> · {personal.phone}
                  <br />
                  {personal.email}
                  <br />
                  {address.line1}
                  {address.area && <><br />{address.area}</>}
                  {address.landmark && <><br />Landmark: {address.landmark}</>}
                  <br />
                  {address.city}, {address.state} – {address.pincode}
                  <br />
                  {address.country}
                </p>
              </div>

              {checkoutError && (
                <div
                  style={{
                    padding: "12px 16px",
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "10px",
                    color: "#dc2626",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {checkoutError}
                </div>
              )}

              <button
                onClick={handleInitiateRazorpay}
                disabled={isProcessingOrder}
                style={{
                  marginTop: "4px",
                  padding: "15px 32px",
                  backgroundColor: isProcessingOrder ? "#9ca3af" : "#3b5bdb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: isProcessingOrder ? "not-allowed" : "pointer",
                  width: "100%",
                  transition: "background-color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => { if (!isProcessingOrder) e.currentTarget.style.backgroundColor = "#2f4ac4"; }}
                onMouseLeave={(e) => { if (!isProcessingOrder) e.currentTarget.style.backgroundColor = "#3b5bdb"; }}
              >
                {isProcessingOrder ? "Opening Razorpay…" : `Pay ₹${currentPrice} with Razorpay →`}
              </button>

              <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af", textAlign: "center" }}>
                Secured by Razorpay · 256-bit SSL encryption
              </p>
            </div>
          )}
        </div>

        {/* ── RIGHT — Product Summary ─────────────────────────────────────────── */}
        <div
          style={{
            position: "sticky",
            top: "clamp(90px, 10vh, 140px)",
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "clamp(20px, 3vw, 32px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Product Image */}
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              aspectRatio: "1 / 1",
              backgroundColor: "#f0ede8",
              width: "100%",
            }}
          >
            <img
              src={MainImage}
              alt="Skye Haptic Breathing Guide"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Product Name */}
          <div>
            <h3
              style={{
                margin: "0 0 4px",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: 800,
                color: "#111",
                lineHeight: 1.3,
              }}
            >
              Skye Haptic Breathing Guide
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
              Batch 3 · Ships September 2026
            </p>
          </div>

          {/* Price */}
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "16px" }}>
            {appliedCoupon ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 800,
                      color: "#3b5bdb",
                    }}
                  >
                    ₹{currentPrice}
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#9ca3af",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹{basePrice}
                  </span>
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#15803d",
                    backgroundColor: "#dcfce7",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    width: "fit-content",
                  }}
                >
                  Code {appliedCoupon.code}: -₹{appliedCoupon.discountAmount} off
                </span>
              </div>
            ) : (
              <span
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: "#3b5bdb",
                }}
              >
                ₹{currentPrice}
              </span>
            )}
            <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#9ca3af" }}>
              Including 18% GST · Free shipping
            </p>
          </div>

          {/* Feature bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "✓ 1-year warranty",
              "✓ 14-day battery life",
              "✓ 100% charge in 2 hrs (USB-C)",
              "✓ Delivery: 7–10 working days",
            ].map((f) => (
              <p key={f} style={{ margin: 0, fontSize: "13px", color: "#374151", fontWeight: 500 }}>
                {f}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive override (single column on mobile) & keyframes ────── */}
      <style>{`
        @keyframes spin {
          0% { transform: translateY(-50%) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg); }
        }
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
