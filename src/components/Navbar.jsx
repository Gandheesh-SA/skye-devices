import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Similar", to: "/similar-idea" },
  { label: "FAQ", to: "/faq" },
];

const css = `
.skye-nav{position:fixed;transition:background .25s,padding .25s;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;color:#fff;font-family:'Inter',system-ui,sans-serif}
.skye-nav.scrolled{background:rgba(20,20,20,.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);padding-top:12px;padding-bottom:12px}
.skye-logo{display:flex;flex-direction:column;line-height:1;text-decoration:none;color:#fff}
.skye-logo b{font-size:26px;font-weight:800;letter-spacing:.02em}
.skye-logo small{font-size:6px;letter-spacing:.35em;text-align:right;margin-top:2px}
.skye-links{display:none;align-items:center;gap:28px;list-style:none;margin:0;padding:0}
.skye-links a{color:#fff;text-decoration:none;font-size:11px;font-weight:600}
.skye-links a.active{text-decoration:underline;text-underline-offset:4px}
.skye-shop{background:var(--accent);color:#fff;border-radius:999px;padding:9px 20px;font-weight:700;font-size:11px;text-decoration:none}
.skye-burger{background:none;border:0;color:#fff;font-size:28px;cursor:pointer;line-height:1}
.skye-menu{position:absolute;top:100%;left:0;right:0;background:rgba(20,20,20,.95);display:flex;flex-direction:column;gap:18px;padding:24px}
.skye-menu a{color:#fff;text-decoration:none;font-weight:600;font-size:16px}
.skye-menu a.skye-shop{align-self:flex-start;font-size:14px}
.skye-nav.light{background:#fff;color:#1a1a1a;box-shadow:0 1px 0 rgba(0,0,0,.08)}
.skye-nav.light .skye-logo,.skye-nav.light .skye-links a,.skye-nav.light .skye-burger,.skye-nav.light .skye-menu a{color:#1a1a1a}
.skye-nav.light .skye-menu{background:#fff;box-shadow:0 8px 16px rgba(0,0,0,.08)}
.skye-nav.light .skye-links a.skye-shop,.skye-nav.light .skye-menu a.skye-shop{color:#fff}
@media(min-width:768px){
  .skye-nav{padding:24px 48px}
  .skye-links{display:flex}
  .skye-burger,.skye-menu{display:none}
}
@media(min-width:1280px){
  .skye-nav{padding:28px 80px}
  .skye-links a,.skye-shop{font-size:13px}
}
`;

export default function Navbar({ variant = "dark" }) {
  const light = variant === "light";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`skye-nav${light ? " light" : scrolled || open ? " scrolled" : ""}`}>
      <style>{css}</style>

      <Link to="/" className="skye-logo" aria-label="Skye Devices home">
        <b>SKYE</b>
        <small>DEVICES</small>
      </Link>

      <ul className="skye-links">
        {links.map((l) => (
          <li key={l.label}>
            <NavLink to={l.to}>{l.label}</NavLink>
          </li>
        ))}
        <li>
          <Link to="/shop" className="skye-shop">Shop</Link>
        </li>
      </ul>

      <button
        className="skye-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <nav className="skye-menu">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/shop" className="skye-shop" onClick={() => setOpen(false)}>
            Shop
          </Link>
        </nav>
      )}
    </header>
  );
}
