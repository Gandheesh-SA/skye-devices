import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  { id: "silver", name: "SKYE - SLEEP OR SCROLL (SILVER)", price: "Rs. 4090", color: "SILVER" },
  { id: "red", name: "SKYE - SLEEP OR SCROLL (RED)", price: "Rs. 4490", color: "RED" },
];

// Replace with <img src="..." alt="..." /> when assets are ready
function Placeholder({ label }) {
  return (
    <div className="shop-ph" role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

const css = `
.shop{--red:#c8000a;font-family:'Inter',system-ui,sans-serif;color:#222;background:#fff;overflow-x:hidden}
.shop *{box-sizing:border-box}
.shop h1,.shop h2,.shop p{margin:0}
.shop .accent{color:var(--red)}

/* products section */
.shop-sec{min-height:100vh;min-height:100svh;display:flex;flex-direction:column;padding-top:96px}
.shop-title{font-size:clamp(20px,3.4vw,34px);font-weight:800;text-transform:uppercase;padding:24px 20px}
.shop-grid{display:grid;grid-template-columns:1fr;gap:32px;flex:1}
.shop-card{display:flex;flex-direction:column}
.shop-link{color:inherit;text-decoration:none}
.shop-link:hover{text-decoration:underline}
.shop-img{display:block;width:100%;aspect-ratio:4/3;max-height:60svh}
.shop-ph{width:100%;height:100%;background:repeating-linear-gradient(45deg,#d9d9d9,#d9d9d9 12px,#cfcfcf 12px,#cfcfcf 24px);display:grid;place-items:center;color:#666;font-weight:700;letter-spacing:.15em;font-size:12px}
.shop-info{padding:24px 20px 40px;display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.shop-info h2{font-size:clamp(14px,1.6vw,18px);font-weight:800}
.shop-price{font-size:clamp(14px,1.5vw,17px)}
.shop-price span{color:var(--red)}
.shop-buy{background:var(--red);color:#fff;border:0;border-radius:999px;padding:14px 32px;font-weight:800;font-size:13px;cursor:pointer;margin:6px 0}
.shop-buy:hover{background:#a50008}
.shop-buy:focus-visible{outline:3px solid #222;outline-offset:2px}
.shop-note{font-size:clamp(14px,1.5vw,17px)}
.shop-note span{color:var(--red)}

/* closing */
.shop-close{background:var(--red);color:#fff;min-height:100vh;min-height:100svh;display:flex;align-items:center;padding:48px 24px}
.shop-close h2{font-size:clamp(32px,6vw,80px);font-weight:800;line-height:1.35;text-transform:uppercase;max-width:960px;margin:0 auto;width:100%}

@media(min-width:640px){
  .shop-grid{grid-template-columns:1fr 1fr;gap:20px}
  .shop-img{aspect-ratio:1/1.1;max-height:none}
  .shop-title{padding:32px 32px}
  .shop-info{padding:28px 32px 48px}
}
@media(min-width:768px){
  .shop-sec{padding-top:110px}
  .shop-title{padding:36px 48px}
  .shop-info{padding:32px 48px 56px}
}
@media(min-width:1280px){
  .shop-title{padding:40px 52px}
  .shop-info{padding:36px 52px 64px}
  .shop-close{padding:80px}
}
`;

export default function Shop() {
  const navigate = useNavigate();
  return (
    <main className="shop">
      <style>{css}</style>
      <Navbar variant="light" />

      {/* 1. Products */}
      <section className="shop-sec">
        <h1 className="shop-title">
          Good <span className="accent">sleep</span> starts here, pick one.
        </h1>

        <div className="shop-grid">
          {products.map((p) => (
            <article className="shop-card" key={p.id}>
              <Link to={`/shop/${p.id}`} className="shop-img" aria-label={p.name}>
                <Placeholder label={`SKYE ${p.color} IMAGE`} />
              </Link>
              <div className="shop-info">
                <h2>
                  <Link to={`/shop/${p.id}`} className="shop-link">{p.name}</Link>
                </h2>
                <p className="shop-price">
                  <span>{p.price}</span> (Incl. GST)
                </p>
                <button className="shop-buy" onClick={() => navigate(`/shop/${p.id}`)}>
                  BUY NOW - {p.color}
                </button>
                <p className="shop-note">
                  Try for <span>15 days</span> without any risk.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. Closing */}
      <section className="shop-close">
        <h2>Everything looks better after a good night’s sleep.</h2>
      </section>

      <Footer />
    </main>
  );
}