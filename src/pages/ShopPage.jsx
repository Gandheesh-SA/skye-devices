import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import silverImage from "../images/shop/MainImage.png";
import redImage from "../images/home/HM Page Red from Skye Website.png";

const products = [
  {
    id: "silver",
    finish: "Silver",
    name: "Skye — Sleep or Scroll",
    price: "₹4,100",
    image: silverImage,
    imageAlt: "Silver Skye breathing device held in one hand",
    theme: "silver",
  },
  {
    id: "red",
    finish: "Red",
    name: "Skye — Sleep or Scroll",
    price: "₹4,100",
    image: redImage,
    imageAlt: "Red Skye breathing device held in one hand",
    theme: "red",
  },
];

const benefits = [
  { icon: "15", title: "15-day trial", text: "Try Skye at home, without the pressure." },
  { icon: "01", title: "1-year warranty", text: "Built for nightly use and covered for a year." },
  { icon: "₹0", title: "Free shipping", text: "Delivered across India at no extra cost." },
];

const css = `
.shop{--red:var(--accent,#c8000a);font-family:'Inter',system-ui,sans-serif;color:#1e1e1e;background:#f7f5f2;overflow:hidden}
.shop *{box-sizing:border-box}
.shop h1,.shop h2,.shop h3,.shop p{margin:0}
.shop-hero{padding:clamp(150px,18vw,220px) clamp(20px,6vw,88px) clamp(60px,8vw,110px);background:#f7f5f2}
.shop-hero-inner{width:min(100%,1400px);margin:0 auto;display:grid;gap:24px}
.shop-kicker{display:flex;align-items:center;gap:12px;color:var(--red);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.shop-kicker::before{content:"";width:34px;height:2px;background:currentColor}
.shop-title{max-width:950px;font-size:clamp(46px,7.4vw,106px);font-weight:800;letter-spacing:-.065em;line-height:.92;text-transform:uppercase}
.shop-title span{color:var(--red)}
.shop-intro{max-width:650px;font-size:clamp(16px,1.45vw,21px);line-height:1.55;color:#595959}
.shop-products{padding:0 clamp(20px,4vw,64px) clamp(80px,10vw,150px)}
.shop-grid{width:min(100%,1500px);margin:0 auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(16px,2vw,30px)}
.shop-card{position:relative;min-width:0;overflow:hidden;border-radius:26px;background:#fff;box-shadow:0 18px 55px rgba(28,24,20,.08);transition:transform .35s ease,box-shadow .35s ease}
.shop-card:hover{transform:translateY(-7px);box-shadow:0 26px 70px rgba(28,24,20,.14)}
.shop-media{position:relative;display:block;aspect-ratio:1/1.02;overflow:hidden;background:#deddd5}
.shop-media img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.shop-card:hover .shop-media img{transform:scale(1.035)}
.shop-card.red .shop-media::after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,transparent 58%,rgba(200,0,10,.14));pointer-events:none}
.shop-edition{position:absolute;top:20px;left:20px;z-index:1;display:flex;align-items:center;gap:9px;padding:9px 13px;border-radius:999px;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.shop-swatch{width:9px;height:9px;border-radius:50%;background:#bfc0bd;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.red .shop-swatch{background:var(--red)}
.shop-card-body{display:grid;grid-template-columns:1fr auto;gap:24px;padding:clamp(24px,3vw,40px)}
.shop-product-name{font-size:clamp(20px,2vw,30px);font-weight:800;letter-spacing:-.035em}
.shop-finish{margin-top:8px!important;color:#6c6c6c;font-size:14px}
.shop-price{text-align:right;font-size:clamp(18px,1.7vw,24px);font-weight:800}
.shop-tax{display:block;margin-top:5px;color:#777;font-size:11px;font-weight:500}
.shop-card-actions{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:18px;padding-top:4px}
.shop-link{display:inline-flex;align-items:center;justify-content:center;gap:14px;min-height:50px;padding:14px 24px;border-radius:999px;background:#202020;color:#fff;text-decoration:none;font-size:13px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;transition:background .2s ease,color .2s ease}
.shop-link::after{content:"→";font-size:18px;transition:transform .2s ease}
.shop-link:hover{background:var(--red)}
.shop-link:hover::after{transform:translateX(4px)}
.shop-trial{font-size:12px;color:#6c6c6c;text-align:right}
.shop-trial strong{color:var(--red)}
.shop-benefits{padding:clamp(70px,8vw,110px) clamp(20px,6vw,88px);background:#fff}
.shop-benefit-grid{width:min(100%,1250px);margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:0}
.shop-benefit{display:grid;grid-template-columns:auto 1fr;gap:18px;padding:12px clamp(20px,3vw,44px);border-right:1px solid #dedede}
.shop-benefit:last-child{border-right:0}
.shop-benefit-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:#fff0f0;color:var(--red);font-size:13px;font-weight:800}
.shop-benefit h3{font-size:15px;font-weight:800}
.shop-benefit p{margin-top:7px!important;color:#707070;font-size:13px;line-height:1.5}
@media(max-width:820px){
  .shop-hero{padding-top:130px}
  .shop-grid{grid-template-columns:1fr}
  .shop-benefit-grid{grid-template-columns:1fr}
  .shop-benefit{padding:24px 0;border-right:0;border-bottom:1px solid #dedede}
  .shop-benefit:last-child{border-bottom:0}
}
@media(max-width:520px){
  .shop-title{font-size:clamp(42px,15vw,64px)}
  .shop-card{border-radius:18px}
  .shop-card-body{grid-template-columns:1fr auto;gap:16px;padding:22px}
  .shop-card-actions{align-items:stretch;flex-direction:column}
  .shop-link{width:100%}
  .shop-trial{text-align:left}
  .shop-edition{top:14px;left:14px}
}
`;

export default function Shop() {
  return (
    <div className="shop">
      <style>{css}</style>

      <header className="shop-hero">
        <div className="shop-hero-inner">
          <p className="shop-kicker">Choose your finish</p>
          <h1 className="shop-title">One ritual. <span>Two finishes.</span></h1>
          <p className="shop-intro">
            A screen-free breathing guide for quieter nights. Same calming
            experience, in the finish that feels most like you.
          </p>
        </div>
      </header>

      <main className="shop-products">
        <div className="shop-grid">
          {products.map((product) => (
            <article className={`shop-card ${product.theme}`} key={product.id}>
              <Link className="shop-media" to={`/products/${product.id}`} aria-label={`View ${product.finish} Skye`}>
                <span className="shop-edition"><i className="shop-swatch" />{product.finish} edition</span>
                {product.image ? (
                  <img src={product.image} alt={product.imageAlt} />
                ) : (
                  <span className="shop-device" role="img" aria-label="Red Skye breathing device">
                    <span className="shop-leds" aria-hidden="true"><i /><i /><i /><i /></span>
                  </span>
                )}
              </Link>
              <div className="shop-card-body">
                <div>
                  <h2 className="shop-product-name">{product.name}</h2>
                  <p className="shop-finish">{product.finish} finish</p>
                </div>
                <p className="shop-price">
                  {product.price}
                  <span className="shop-tax">Including GST</span>
                </p>
                <div className="shop-card-actions">
                  <Link className="shop-link" to={`/products/${product.id}`}>View {product.finish}</Link>
                  <p className="shop-trial">Try it for <strong>15 days</strong>, risk-free.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section className="shop-benefits" aria-label="Purchase benefits">
        <div className="shop-benefit-grid">
          {benefits.map((benefit) => (
            <div className="shop-benefit" key={benefit.title}>
              <span className="shop-benefit-icon">{benefit.icon}</span>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
