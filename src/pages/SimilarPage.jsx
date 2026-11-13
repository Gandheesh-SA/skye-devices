import Footer from "../components/Footer";
import skyeImage from "../images/home/HM Page Red from Skye Website.png";
import moonbirdImage from "../images/moonbird.png";

const comparison = [
  ["Origin", "Made in India", "Made in Belgium"],
  ["Breathing guidance", "Vibrations and pauses", "Expands and contracts"],
  ["Smartphone app", "Not required", "Optional"],
  ["Heart rate & HRV tracking", "No", "Yes"],
  ["Battery life", "Up to 14 days", "Around 2 hours"],
  ["Charging", "USB-C", "Magnetic charger"],
  ["Warranty", "1 year", "2 years"],
  ["Risk-free trial", "15 Days", "30 Days"],
];

export default function SimilarPage() {
  return (
    <>
      <style>{`
        .similar-page{background:#fff;color:#2b2b2b;font-family:'Inter',system-ui,sans-serif}
        .similar-page *{box-sizing:border-box}
        .similar-inner{width:min(100%,900px);margin:0 auto;padding:clamp(60px,8vw,100px) clamp(20px,6vw,58px) clamp(80px,10vw,130px)}
        .similar-title{font-size:clamp(22px,2.4vw,30px);font-weight:800;line-height:1.15;text-transform:uppercase;letter-spacing:-.035em;margin:0}
        .similar-title span{color:var(--accent)}
        .similar-subtitle{font-size:13px;font-weight:700;margin:10px 0 clamp(34px,5vw,58px)}
        .similar-copy{max-width:760px;font-size:clamp(13px,1.15vw,16px);line-height:1.35}
        .similar-copy p{margin:0 0 20px}
        .similar-copy a{color:inherit;text-decoration:underline;text-underline-offset:3px}
        .similar-products{display:grid;grid-template-columns:repeat(2,180px);justify-content:end;gap:clamp(42px,8vw,100px);margin:clamp(56px,7vw,82px) 0 28px;padding-right:0}
        .similar-product{width:180px;height:180px;border-radius:24px;overflow:hidden;background:#f1f1f1;box-shadow:0 12px 30px rgba(0,0,0,.08);transition:transform .3s ease}
        .similar-product:hover{transform:translateY(-6px)}
        .similar-product img{display:block;width:100%;height:100%;object-fit:cover}
        .similar-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
        .similar-table{width:100%;min-width:600px;border-collapse:separate;border-spacing:0;font-size:14px;text-align:center;background:#fff;border:1px solid #e5e5e5;border-radius:18px;overflow:hidden;box-shadow:0 14px 34px rgba(0,0,0,.06)}
        .similar-table th,.similar-table td{padding:16px 12px;border-bottom:1px solid #e5e5e5}
        .similar-table th:first-child,.similar-table td:first-child{width:30%;font-weight:800;text-align:center;padding-left:12px}
        .similar-table th{font-weight:800;background:#fafafa;font-size:15px;vertical-align:bottom}
        .similar-table th:first-child{vertical-align:middle}
        .similar-table-product{display:block;width:150px;height:150px;margin:0 auto 12px;border-radius:20px;object-fit:cover;box-shadow:0 8px 20px rgba(0,0,0,.08)}
        .similar-table th:nth-child(2){color:var(--accent)}
        .similar-table tr:last-child td{border-bottom:0}
        @media(max-width:640px){
          .similar-products{justify-content:center;gap:22px;margin-top:42px}
          .similar-product{width:clamp(130px,38vw,180px);height:clamp(130px,38vw,180px)}
          .similar-table{font-size:11px;min-width:560px}
          .similar-table th,.similar-table td{padding:9px 5px}
        }
      `}</style>
      <section className="similar-page">
        <div className="similar-inner">
          <h1 className="similar-title">A Similar Idea from <span>Europe</span></h1>
          <p className="similar-subtitle">Moonbird, from Belgium</p>

          <div className="similar-copy">
            <p>The importance of sleep and its impact on our health and well-being have long been recognized in Western countries, particularly in Europe, where policies address working hours, rest and night work. Naturally, several companies have emerged in this market, building products to help people improve their well-being and sleep.</p>
            <p>One such product that caught our attention is Moonbird, a handheld breathing coach from Belgium. With over 60,000 active users, Moonbird is an encouraging example of how guided breathing is helping people around the world relax and build better sleep habits.</p>
            <p>But we didn't set out to replicate an existing product. In fact, we came across Moonbird only after developing Skye. We started with a problem we experienced ourselves: struggling to fall asleep in an increasingly connected world.</p>
            <p>Like many Indians navigating the demands and distractions of modern life, we wanted a simple way to unwind without reaching for another screen. So, we built our own solution. We believe more people in India deserve access to simple tools that help them slow down, relax and sleep better. And we're glad to see others around the world working towards the same goal.</p>
            <p><strong>Curious about Moonbird?</strong>{" "}<a href="https://www.moonbird.life/" target="_blank" rel="noopener noreferrer">Visit their website.</a></p>
          </div>

          <div className="similar-table-wrap">
            <table className="similar-table">
              <thead><tr><th>Feature</th><th><img className="similar-table-product" src={skyeImage} alt="Skye breathing device" />Skye</th><th><img className="similar-table-product" src={moonbirdImage} alt="Moonbird breathing coach" />Moonbird</th></tr></thead>
              <tbody>{comparison.map(([feature, skye, moonbird]) => <tr key={feature}><td>{feature}</td><td>{skye}</td><td>{moonbird}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
