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
      { label: "Track your order", to: "/track-order" },
    ],
  },
  {
    title: "Policies",
    items: [
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
];

const css = `
.skye-footer{background:#c8000a;color:#fff;font-family:'Inter',system-ui,sans-serif;padding:56px 24px 24px;display:flex;flex-direction:column;gap:40px}
.skye-foot-top{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.skye-foot-col h4{margin:0 0 14px;font-size:13px;font-weight:800}
.skye-foot-col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.skye-foot-col a{color:#fff;text-decoration:none;font-size:13px;opacity:.95}
.skye-foot-col a:hover{text-decoration:underline}
.skye-social{display:flex;gap:12px;align-items:flex-start}
.skye-social span{width:28px;height:28px;border-radius:6px;background:#fff;color:#c8000a;display:grid;place-items:center;font-size:12px;font-weight:800}
.skye-disclaimer{font-size:10px;line-height:1.6;text-align:center;max-width:640px;margin:0 auto;opacity:.9}
.skye-foot-bottom{display:flex;flex-direction:column;gap:12px;align-items:center;font-size:12px;border-top:1px solid rgba(255,255,255,.25);padding-top:20px}
.skye-made{display:flex;align-items:center;gap:8px}
.skye-flag{width:28px;height:18px;background:linear-gradient(#ff9933 33%,#fff 33% 66%,#138808 66%)}
@media(min-width:640px){
  .skye-foot-top{grid-template-columns:repeat(3,1fr) auto}
}
@media(min-width:768px){
  .skye-footer{padding:72px 48px 28px}
  .skye-foot-bottom{flex-direction:row;justify-content:space-between}
}
@media(min-width:1280px){
  .skye-footer{padding:88px 80px 32px}
  .skye-foot-col a,.skye-foot-col h4{font-size:15px}
}
`;

export default function Footer() {
  return (
    <footer className="skye-footer">
      <style>{css}</style>

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
          <span>in</span>
          <span>ig</span>
        </div>
      </div>

      <p className="skye-disclaimer">
        *Skye is not a medical device. It is not intended to replace medical
        devices or professional medical care. Skye is not designed to diagnose,
        treat, cure, mitigate, alleviate, or prevent any disease or medical
        condition, nor to investigate, replace, or modify any physiological
        process. If you have questions about a medical condition or your
        health, please consult a doctor or qualified healthcare professional.
      </p>

      <div className="skye-foot-bottom">
        <span>© 2025 Skye Devices Private Limited. All rights reserved.</span>
        <span className="skye-made">
          <i className="skye-flag" /> Made in India
        </span>
      </div>
    </footer>
  );
}