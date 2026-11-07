import PurchaseOptions from "../components/PurchaseOptions";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import silverImage1 from "../images/products/Scroll Image 1 Silver from Skye Website.png";
import silverImage2 from "../images/products/Scroll Image 2 Silver.png";
import silverImage3 from "../images/products/Scroll Image 3 Silver.png";
import silverVideo from "../images/products/Scroll Video Silver.mp4";
import redImage1 from "../images/products/Scroll Image 1 Red from Skye Website.png";
import redImage2 from "../images/products/Scroll Image 2 Red from Skye Website.png";
import redImage3 from "../images/products/Scroll Image 3 Red from Skye Website.png";
import redVideo from "../images/products/Scroll Video RED from Skye Website.mp4";
import specsImage from "../images/products/specs.png";

const products = {
  silver: {
    name: "SKYE - SLEEP OR SCROLL (SILVER)",
    color: "SILVER",
    gallery: [
      { type: "image", src: silverImage1, alt: "Close-up of the silver Skye breathing device" },
      { type: "image", src: silverImage2, alt: "Silver Skye device held while selecting a breathing mode" },
      { type: "image", src: silverImage3, alt: "Silver Skye product and packaging" },
      { type: "video", src: silverVideo, alt: "Silver Skye product demonstration video" },
    ],
  },
  red: {
    name: "SKYE - SLEEP OR SCROLL (RED)",
    color: "RED",
    gallery: [
      { type: "image", src: redImage1, alt: "Close-up of the red Skye breathing device" },
      { type: "image", src: redImage2, alt: "Red Skye device held while selecting a breathing mode" },
      { type: "image", src: redImage3, alt: "Red Skye product and packaging" },
      { type: "video", src: redVideo, alt: "Red Skye product demonstration video" },
    ],
  },
};

const delivery = [
  "Delivery time: 7–10 working days.",
  "1-year warranty and free shipping",
  "Up to 14 days of battery life",
  "100% charge in 2 hours using USB-c",
  "Modern Scandinavian-inspired design",
];

const reviews = [
  {
    title: "Love it!",
    text: "I've struggled with falling asleep for a long time. Been using Headspace sleep audios for ages, but sometimes they actually make my mind wander more.",
    name: "Barath",
  },
  { title: "", text: "", name: "" },
  { title: "", text: "", name: "" },
  { title: "", text: "", name: "" },
];

const css = `
.pdp{--red:#c8000a;font-family:'Poppins','Inter',system-ui,sans-serif;color:#222;background:#fff;overflow-x:hidden}
.pdp *{box-sizing:border-box}
.pdp h1,.pdp h2,.pdp p,.pdp ul{margin:0}

/* section 1: hero */
.pdp-hero{min-height:100vh;min-height:100svh;padding-top:96px;display:grid;grid-template-columns:1fr;align-items:center;gap:32px}
.pdp-gallery{display:flex;flex-direction:column;gap:16px}
.pdp-main{width:100%;aspect-ratio:1/1;border-radius:0 0 28px 0;overflow:hidden;background:#ece9e5}
.pdp-media{width:100%;height:100%;display:block;object-fit:contain;background:#ece9e5}
.pdp-thumbs{display:flex;gap:12px;padding:0 20px}
.pdp-thumb{position:relative;width:68px;height:68px;padding:0;border:2px solid transparent;border-radius:10px;overflow:hidden;cursor:pointer;background:#ece9e5;opacity:.72;transition:border-color .2s,opacity .2s,transform .2s}
.pdp-thumb.on{border-color:var(--red)}
.pdp-thumb:hover{opacity:1;transform:translateY(-2px)}
.pdp-thumb.on{opacity:1}
.pdp-thumb:focus-visible{outline:3px solid #222;outline-offset:2px}
.pdp-video-mark{position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.18);color:#fff;font-size:18px;text-shadow:0 1px 4px rgba(0,0,0,.5)}

.pdp-info{padding:0 20px 40px;display:flex;flex-direction:column;gap:24px}
.pdp-info h1{font-size:clamp(22px,3vw,32px);font-weight:700}
.pdp-flow{font-size:13px;line-height:1.7}
.pdp-flow em{font-style:normal;color:var(--red)}
.pdp-price{font-size:clamp(20px,2.4vw,26px);font-weight:500;margin-top:8px}
.pdp-gst{font-size:13px;margin-top:-10px}
.pdp-buy{align-self:flex-start;background:var(--red);color:#fff;border:0;border-radius:999px;padding:12px 40px;font-family:inherit;font-weight:600;font-size:13px;cursor:pointer}
.pdp-buy:hover{background:#a50008}
.pdp-buy:focus-visible{outline:3px solid #222;outline-offset:2px}
.pdp-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:10px;font-size:13px;margin-top:0}
.pdp-finish{display:flex;flex-direction:column;gap:10px;margin-top:-4px}
.pdp-finish-label{font-size:13px;font-weight:600}
.pdp-finish-options{display:flex;gap:10px;flex-wrap:wrap}
.pdp-finish-option{min-width:112px;display:flex;align-items:center;gap:9px;padding:10px 14px;border:1.5px solid #c9c9c9;border-radius:8px;color:#333;background:#fff;text-decoration:none;font-size:13px;font-weight:600;transition:border-color .2s,box-shadow .2s,background .2s}
.pdp-finish-option:hover{border-color:#777}
.pdp-finish-option.selected{border-color:var(--red);background:#fff5f5;box-shadow:0 0 0 1px var(--red)}
.pdp-finish-option:focus-visible{outline:3px solid #222;outline-offset:2px}
.pdp-finish-swatch{width:18px;height:18px;border-radius:50%;border:1px solid rgba(0,0,0,.2);flex:0 0 auto}
.pdp-finish-swatch.red{background:#c8000a}
.pdp-finish-swatch.silver{background:linear-gradient(135deg,#f7f7f7,#a8adb3)}

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
.sleep-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,3vw,48px);padding:8px 0 16px}
.sleep-step{text-align:center}
.sleep-step img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;margin-bottom:20px}
.sleep-step h3{margin:0 0 12px;font-size:14px;line-height:1.35}
.sleep-step p{font-size:13px;line-height:1.45}
.guided-copy{display:grid;gap:20px}
.guided-copy strong{font-weight:700}
.pdp-reviews{padding:clamp(70px,9vw,120px) 0 clamp(90px,10vw,140px);background:#fafafa;overflow:hidden}
.pdp-reviews-head{width:min(100%,1200px);margin:0 auto;padding:0 clamp(20px,6vw,80px) 34px}
.pdp-reviews h2{font-size:clamp(28px,4vw,48px);font-weight:800;text-transform:uppercase}
.pdp-reviews h2 span{color:var(--red)}
.pdp-reviews-head p{margin-top:10px;font-size:14px;color:#5d5d5d}
.pdp-review-track{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px max(20px,calc((100vw - 1200px)/2 + 80px)) 18px;scrollbar-width:thin;scrollbar-color:var(--red) transparent}
.pdp-review-card{flex:0 0 min(78vw,300px);min-height:300px;display:flex;flex-direction:column;gap:14px;padding:28px;border:2px solid var(--red);background:#fff;scroll-snap-align:start}
.pdp-review-stars{color:var(--red);letter-spacing:.18em}
.pdp-review-card h3{margin:0;font-size:15px}
.pdp-review-card p{font-size:13px;line-height:1.5}
.pdp-review-card small{margin-top:auto;color:#555}

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
@media(max-width:640px){
  .pdp-hero{padding-top:76px}
  .pdp-main{border-radius:0 0 20px 0}
  .pdp-thumbs{overflow-x:auto;padding-bottom:4px}
  .pdp-thumb{flex:0 0 64px}
  .sleep-steps{grid-template-columns:1fr}
  .sleep-step{display:grid;grid-template-columns:110px 1fr;gap:6px 18px;text-align:left;align-items:start}
  .sleep-step img{grid-row:1/3;margin:0}
  .sleep-step h3{margin:6px 0 0}
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

  const activeMedia = product.gallery[active];

  return (
    <div className="pdp">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');${css}`}</style>

      {/* 1. Product hero */}
      <section className="pdp-hero">
        <div className="pdp-gallery">
          <div className="pdp-main">
            {activeMedia.type === "video" ? (
              <video
                className="pdp-media"
                key={activeMedia.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={activeMedia.alt}
              >
                <source src={activeMedia.src} type="video/mp4" />
              </video>
            ) : (
              <img className="pdp-media" src={activeMedia.src} alt={activeMedia.alt} />
            )}
          </div>
          <div className="pdp-thumbs">
            {product.gallery.map((media, i) => (
              <button
                key={media.src}
                className={`pdp-thumb${i === active ? " on" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${media.type} ${i + 1}: ${media.alt}`}
                aria-pressed={i === active}
              >
                {media.type === "video" ? (
                  <>
                    <video className="pdp-media" src={media.src} muted preload="metadata" />
                    <span className="pdp-video-mark" aria-hidden="true">▶</span>
                  </>
                ) : (
                  <img className="pdp-media" src={media.src} alt="" />
                )}
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
          <PurchaseOptions />
          <ul className="pdp-list">
            {delivery.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="pdp-finish" aria-label="Choose product finish">
            <p className="pdp-finish-label">Choose colour</p>
            <div className="pdp-finish-options">
              {[
                { id: "red", label: "Red" },
                { id: "silver", label: "Silver" },
              ].map((finish) => (
                <Link
                  key={finish.id}
                  to={`/products/${finish.id}`}
                  className={`pdp-finish-option${productId === finish.id ? " selected" : ""}`}
                  aria-current={productId === finish.id ? "page" : undefined}
                >
                  <span className={`pdp-finish-swatch ${finish.id}`} aria-hidden="true" />
                  {finish.label}
                </Link>
              ))}
            </div>
          </div>
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

        <Accordion title="Ease into sleep (3 steps)">
          <div className="sleep-steps">
            {[
              { title: "Get comfortable in bed.", text: "Turn on Skye and choose a breathing mode." },
              { title: "Follow the vibrations and pauses.", text: "Inhale and exhale with the vibrations. Hold your breath with the pauses." },
              { title: "Slow down and ease into sleep.", text: "Keep following the rhythm until your session ends." },
            ].map((step) => (
              <div className="sleep-step" key={step.title}>
                <img src={specsImage} alt="Skye device features and specifications" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Why guided breathing?">
          <div className="guided-copy">
            <p>
              Slow, guided breathing can help lower your heart rate and settle
              your body into a calmer rhythm. It’s a natural way to unwind and
              a technique people have practiced through meditation for
              generations. <strong>The hard part is making it a daily habit.</strong>
            </p>
            <p>
              Guided breathing, as part of a healthy bedtime routine, may help
              you unwind and prepare for sleep. (<Link to="/research">Supporting Research</Link>.)
              Skye exists to make that daily practice easier.
            </p>
            <p>
              <strong>86% of customers report satisfaction</strong> and choose
              to keep Skye following their 15-day trial. Consistency matters.
              Skye’s only goal is to make guided breathing so easy to do that
              you actually stick with it.
            </p>
          </div>
        </Accordion>

        <Accordion title="Love It (or Your Money Back)">
          <p>
            Every order includes a 15-day risk-free trial. If it doesn’t help,
            just send it back — no hassle, no questions asked.
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

      <section className="pdp-reviews" aria-labelledby="pdp-reviews-title">
        <div className="pdp-reviews-head">
          <h2 id="pdp-reviews-title">It Just <span>Works</span></h2>
          <p>Used by 1000+ users every day before sleep.</p>
        </div>
        <div className="pdp-review-track">
          {reviews.map((review, index) => (
            <article className="pdp-review-card" key={index}>
              <div className="pdp-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              {review.title && <h3>{review.title}</h3>}
              {review.text && <p>{review.text}</p>}
              {review.name && <small>{review.name}</small>}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
