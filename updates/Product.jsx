import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = {
  silver: { name: "SKYE - SLEEP OR SCROLL (SILVER)", price: "Rs. 4090.00", color: "SILVER" },
  red: { name: "SKYE - SLEEP OR SCROLL (RED)", price: "Rs. 4490.00", color: "RED" },
};

const delivery = [
  "Delivery time: 2–3 working days.",
  "1-year warranty and free shipping",
  "Up to 14 days of battery life",
  "100% charge in 2 hours using USB-c",
  "Modern Scandinavian-inspired design",
];

const css = `
.pdp{--red:#c8000a;font-family:'Poppins','Inter',system-ui,sans-serif;color:#222;background:#fff;overflow-x:hidden}
.pdp *{box-sizing:border-box}
.pdp h1,.pdp h2,.pdp p,.pdp ul{margin:0}

/* section 1: hero */
.pdp-hero{min-height:100vh;min-height:100svh;padding-top:96px;display:grid;grid-template-columns:1fr;align-items:center;gap:32px}
.pdp-gallery{display:flex;flex-direction:column;gap:16px}
.pdp-main{width:100%;aspect-ratio:1/1;max-height:60svh;border-radius:0 0 28px 0;overflow:hidden}
.pdp-ph{width:100%;height:100%;background:repeating-linear-gradient(45deg,#d9d9d9,#d9d9d9 12px,#cfcfcf 12px,#cfcfcf 24px);display:grid;place-items:center;color:#666;font-weight:600;letter-spacing:.15em;font-size:12px;text-align:center}
.pdp-thumbs{display:flex;gap:12px;padding:0 20px}
.pdp-thumb{width:64px;height:64px;padding:0;border:2px solid transparent;border-radius:8px;overflow:hidden;cursor:pointer;background:none}
.pdp-thumb.on{border-color:var(--red)}
.pdp-thumb:focus-visible{outline:3px solid #222;outline-offset:2px}
.pdp-thumb .pdp-ph{font-size:8px;letter-spacing:0}

.pdp-info{padding:0 20px 40px;display:flex;flex-direction:column;gap:18px}
.pdp-info h1{font-size:clamp(22px,3vw,32px);font-weight:700}
.pdp-flow{font-size:13px;line-height:1.7}
.pdp-flow em{font-style:normal;color:var(--red)}
.pdp-price{font-size:clamp(20px,2.4vw,26px);font-weight:500;margin-top:8px}
.pdp-gst{font-size:13px;margin-top:-10px}
.pdp-buy{align-self:flex-start;background:var(--red);color:#fff;border:0;border-radius:999px;padding:12px 40px;font-family:inherit;font-weight:600;font-size:13px;cursor:pointer}
.pdp-buy:hover{background:#a50008}
.pdp-buy:focus-visible{outline:3px solid #222;outline-offset:2px}
.pdp-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:10px;font-size:13px;margin-top:6px}

/* section 2: accordions */
.pdp-acc-sec{min-height:100vh;min-height:100svh;padding:56px 20px 80px;max-width:1000px;margin:0 auto;width:100%}
.acc{margin-bottom:12px}
.acc-head{width:100%;display:flex;justify-content:space-between;align-items:center;background:none;border:0;border-bottom:1px solid #777;padding:16px 4px;font-family:inherit;font-size:clamp(17px,2vw,21px);color:#222;cursor:pointer;text-align:left}
.acc-head:focus-visible{outline:3px solid #222;outline-offset:2px}
.acc-chev{width:14px;height:14px;border-right:2.5px solid #222;border-bottom:2.5px solid #222;transform:rotate(45deg);transition:transform .2s;margin-right:8px;flex-shrink:0}
.acc-head[aria-expanded="true"] .acc-chev{transform:rotate(-135deg)}
.acc-body{padding:20px 4px 12px;font-size:13px;line-height:1.7;display:flex;flex-direction:column;gap:18px}
.acc-body ul{padding-left:22px;display:flex;flex-direction:column;gap:2px}
.acc-body a{color:#1a5fb4;text-decoration:underline}
.acc-body .links{display:flex;flex-direction:column}

@media(min-width:768px){
  .pdp-hero{grid-template-columns:1.1fr 1fr;gap:48px;padding-top:110px}
  .pdp-main{max-height:none;aspect-ratio:1/1}
  .pdp-info{padding:0 48px 0 0}
  .pdp-acc-sec{padding:72px 48px 96px}
}
@media(min-width:1280px){
  .pdp-hero{gap:80px}
  .pdp-info{padding-right:96px}
  .pdp-info h1{font-size:34px}
  .pdp-flow,.pdp-list,.acc-body{font-size:14px}
}
`;

function Accordion({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="acc">
      <button className="acc-head" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <i className="acc-chev" />
      </button>
      {open && <div className="acc-body">{children}</div>}
    </div>
  );
}

export default function Product() {
  const { productId } = useParams();
  const product = products[productId];
  const [active, setActive] = useState(0);

  if (!product) return <Navigate to="/shop" replace />;

  const images = [1, 2, 3].map((n) => `SKYE ${product.color} IMAGE ${n}`);

  return (
    <main className="pdp">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');${css}`}</style>
      <Navbar variant="light" />

      {/* 1. Product hero */}
      <section className="pdp-hero">
        <div className="pdp-gallery">
          <div className="pdp-main">
            <div className="pdp-ph" role="img" aria-label={images[active]}>
              {images[active]}
            </div>
          </div>
          <div className="pdp-thumbs">
            {images.map((label, i) => (
              <button
                key={label}
                className={`pdp-thumb${i === active ? " on" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
              >
                <div className="pdp-ph">{i + 1}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-info">
          <h1>{product.name}</h1>
          <p className="pdp-flow">
            Put your phone away → Get into bed →
            <br />
            Hold Skye → Breathe along → Ease into sleep <em>zzz</em>
          </p>
          <p className="pdp-price">{product.price}</p>
          <p className="pdp-gst">(Including 18% GST)</p>
          <button className="pdp-buy" onClick={() => {/* TODO: checkout */}}>
            Buy now
          </button>
          <ul className="pdp-list">
            {delivery.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Details */}
      <section className="pdp-acc-sec">
        <Accordion title="Product Specifications">
          <p>
            Skye is a simple, screen-free way to relax, reset, and feel calmer
            wherever you are. Using gentle haptic guidance, Skye helps guide
            your breathing naturally for focused mornings, less stressful days,
            and better sleep. Feel a lasting difference in as little as 30 days
            with guided breathing that fits effortlessly into your daily
            routine, from the first thing you do in the morning to the last
            thing before sleep, and anytime in between.
          </p>
          <div>
            <p>Why Skye</p>
            <ul>
              <li>Screen-free, haptic breathing guide</li>
              <li>Guided 5 to 12 minute breathing sessions</li>
              <li>Four breathing modes for calm, focus, relaxation, and sleep</li>
              <li>Minimal Scandinavian-inspired design</li>
              <li>Up to 14 days of battery life</li>
              <li>USB-c rechargeable, no disposable batteries needed</li>
            </ul>
          </div>
          <div>
            <p>What’s in the Box</p>
            <ul>
              <li>1 × Skye breathing guide</li>
              <li>1 × Quick start guide</li>
            </ul>
          </div>
        </Accordion>

        <Accordion title="How does it work?">
          <p>
            Slow breathing at around 6 breaths per minute helps activate the
            body’s natural relaxation response. Skye is a handheld,
            screen-free breathing companion designed to guide you through
            calming breathing exercises that support focused mornings, less
            stressful days, quiet the mind, and better sleep.
          </p>
          <p>
            Simply hold Skye in your hand and breathe along with its gentle
            haptic guidance. Inhale as the device vibrates, hold when the
            vibration pauses, and exhale as the vibration returns. No screens,
            no notifications, no distractions. Just your breath.
          </p>
          <p>
            When you inhale, your heart rate naturally rises, and when you
            exhale, it slows down. This effect becomes more noticeable during
            slow, intentional breathing exercises. With regular practice, your
            overall Heart Rate Variability (HRV) can improve, helping support
            better stress resilience and nervous system balance.
          </p>
          <p>
            Skye is designed to fit naturally into everyday life. The first
            thing you do in the morning. The last thing before sleep. And
            anytime in between. Use it between meetings, during traffic jams,
            in bed before sleep, or right after waking up. Wherever you are,
            whenever you need a moment to slow down, Skye is there to help you
            reset and reconnect with your breath.
          </p>
          <p>
            NOTE: For best results, we recommend using Skye daily during the
            first 2 to 3 weeks. Start with a 5-minute Morning Focus session{" "}
            <b>(Mode 1)</b> soon after waking up, while still in bed, to help
            you begin the day feeling calm, clear, and focused. Before sleep,
            use a 7-minute Sleep One session <b>(Mode 3)</b> as soon as you get
            into bed to help your body slow down, unwind, and prepare for
            better rest.
          </p>
        </Accordion>

        <Accordion title="Warranty">
          <p>
            Skye is covered by a limited warranty against defects in materials
            and workmanship for one year from the date of original purchase.
            NOTE: This warranty applies only to products purchased directly from
            www.skyedevices.com
          </p>
          <div className="links">
            <Link to="/refund">Cancellation & Refund Policy</Link>
            <Link to="/warranty">Warranty Policy</Link>
          </div>
        </Accordion>
      </section>

      <Footer />
    </main>
  );
}