import { Link } from "react-router-dom";

const columns = [
  {
    title: "Shop",
    items: [
      { label: "Skye for you", to: "/shop" },
      { label: "Skye for business", to: "/corporate" },
    ],
  },
  {
    title: "Customer Care",
    items: [
      { label: "FAQ", to: "/faq" },
      { label: "Shipping & Delivery", to: "/shipping" },
      { label: "Cancellation & Refund", to: "/refund" },
      { label: "Warranty Policy", to: "/warranty" },
      { label: "How Skye works", to: "/about" },
    ],
  },
  {
    title: "Policies",
    items: [
      { label: "Terms & Conditions", to: "/terms_and_conditions" },
      { label: "Privacy Policy", to: "/privacy_policy" },
    ],
  },
];

const css = `
.skye-footer{--foot-gutter:24px;background:#c8000a;color:#fff;font-family:'Inter',system-ui,sans-serif;padding:0 var(--foot-gutter);display:flex;flex-direction:column;gap:0}
.skye-foot-tagline{margin-inline:calc(var(--foot-gutter) * -1);padding:clamp(58px,8vw,100px) var(--foot-gutter);border-bottom:1px solid rgba(255,255,255,.72)}
.skye-foot-tagline h2{max-width:950px;margin:0;font-size:clamp(32px,5vw,64px);font-weight:800;line-height:1.15;letter-spacing:-.035em;text-transform:uppercase}
.skye-foot-top{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:34px 0 54px}
.skye-foot-col h4{margin:0 0 10px;font-size:12px;font-weight:800}
.skye-foot-col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}
.skye-foot-col a{color:#fff;text-decoration:none;font-size:11px;opacity:.95}
.skye-foot-col a:hover{text-decoration:underline}
.skye-social{display:flex;gap:12px;align-items:flex-start}
.skye-social span{width:24px;height:24px;border-radius:5px;background:#fff;color:#c8000a;display:grid;place-items:center;font-size:10px;font-weight:800}
.skye-disclaimer-row{display:flex;justify-content:center;margin-inline:calc(var(--foot-gutter) * -1);padding:0 var(--foot-gutter) 48px;text-align:center}
.skye-disclaimer{width:100%;max-width:600px;margin:0 auto;font-size:9px;line-height:1.45;text-align:center;opacity:.88}
.skye-foot-bottom{display:flex;flex-direction:column;gap:10px;align-items:center;margin-inline:calc(var(--foot-gutter) * -1);font-size:10px;border-top:1px solid rgba(255,255,255,.55);padding:18px var(--foot-gutter) 46px}
.skye-made{display:flex;align-items:center;gap:8px}
.skye-flag{width:24px;height:15px;background:linear-gradient(#ff9933 33%,#fff 33% 66%,#138808 66%)}
@media(min-width:640px){
  .skye-foot-top{grid-template-columns:repeat(3,1fr) auto}
}
@media(min-width:768px){
  .skye-footer{--foot-gutter:48px}
  .skye-foot-top{padding-top:42px}
  .skye-foot-bottom{flex-direction:row;justify-content:space-between}
}
@media(min-width:1280px){
  .skye-footer{--foot-gutter:80px}
  .skye-foot-top{padding-top:46px}
  .skye-foot-col a{font-size:12px}
  .skye-foot-col h4{font-size:13px}
}
`;

export default function Footer() {
  return (
    <footer className="skye-footer">
      <style>{css}</style>

      <div className="skye-foot-tagline">
        <h2>Everything looks better after a good night’s sleep.</h2>
      </div>

      <div className="skye-foot-top">
        {columns.map((c) => (
          <div className="skye-foot-col" key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link to={i.to}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="skye-social">
          <a href="https://www.linkedin.com/company/skye-devices" aria-label="LinkedIn"><span>in</span></a>
          <a href="https://www.instagram.com/skye.devices/" aria-label="Instagram"><span>ig</span></a>
        </div>
      </div>

      <div className="skye-disclaimer-row">
        <p className="skye-disclaimer">
          *Skye is not a medical device. It is not intended to replace medical
          devices or professional medical care. Skye is not designed to diagnose,
          treat, cure, mitigate, alleviate, or prevent any disease or medical
          condition, nor to investigate, replace, or modify any physiological
          process. If you have questions about a medical condition or your
          health, please consult a doctor or qualified healthcare professional.
        </p>
      </div>

      <div className="skye-foot-bottom">
        <span>© {new Date().getFullYear()} Skye Devices Private Limited. All rights reserved.</span>
        <span className="skye-made">
          <i className="skye-flag" /> Made in India
        </span>
      </div>
    </footer>
  );
}
