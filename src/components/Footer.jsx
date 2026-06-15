import { Link } from "react-router-dom";
import linkedinLogo from "../images/Social.png";
import { HashLink } from 'react-router-hash-link';
import indianFlag from "../images/IndianFlag.jpg"
import instaLogo from "../images/InstaLogo.png"
export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300">

      {/* ===== TOP TAGLINE ===== */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1600px] mx-auto px-[clamp(20px,6vw,140px)] py-[clamp(80px,12vh,160px)]">
          <h1 className="text-[clamp(32px,6vw,90px)] font-extrabold tracking-wide leading-tight text-white uppercase">
            LESS STRESS.
            <br />
            MORE Focus.
            <br />
            BETTER SLEEP.
          </h1>
        </div>
      </div>

     {/* ===== SOCIAL STRIP ===== */}
<div className="border-b border-gray-700">
  <div className="max-w-[1600px] mx-auto px-[clamp(20px,6vw,140px)] py-[clamp(30px,5vh,70px)] flex flex-col md:flex-row justify-between items-center gap-6">

    <p className="text-gray-400 text-[clamp(14px,1vw,18px)] text-center md:text-left">
      Follow us for updates and specials
    </p>

    {/* Right Side Icons Container */}
    <div className="flex items-center gap-6">
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/company/skye-devices"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-blue-400 hover:text-blue-500 transition text-[clamp(14px,1vw,18px)]"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="w-[clamp(18px,1.2vw,24px)] h-auto"
        />
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/skye.devices?igsh=MXR3aHRubDYyd2V5bQ==" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-pink-500 hover:text-pink-600 transition text-[clamp(14px,1vw,18px)]"
      >
        <img
          src={instaLogo} 
          alt="Instagram"
          className="w-[clamp(18px,1.2vw,24px)] h-auto"
        />
      </a>
    </div>

  </div>
</div>

      {/* ===== LINKS SECTION ===== */}
      <div className="max-w-[1600px] mx-auto px-[clamp(20px,6vw,140px)] py-[clamp(60px,10vh,140px)] grid grid-cols-1 md:grid-cols-3 gap-[clamp(40px,6vw,120px)] text-[clamp(14px,1vw,18px)]">

        {/* Shop */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Shop</h3>
          <ul className="space-y-4">
            <li><Link to="/shop" className="hover:text-white transition">Skye for you</Link></li>
            <li><Link to="/corporate" className="hover:text-white transition">Skye for business</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Customer Care</h3>
          <ul className="space-y-4">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition">Shipping & Delivery</Link></li>
            <li><Link to="/refund" className="hover:text-white transition">Cancellation & Refund</Link></li>
            <li><Link to="/warranty" className="hover:text-white transition">Warranty Policy</Link></li>
            <li><HashLink smooth to="#how_it_works" className="hover:text-white transition">How Skye works</HashLink></li>
            <li><Link to="/track-order" className="hover:text-white transition">Track your order</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Policies</h3>
          <ul className="space-y-4">
            <li><Link to="/terms_and_conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy_policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

<div className="border-t border-gray-700">
  <div className="max-w-[1600px] mx-auto px-[clamp(20px,6vw,140px)] py-10 text-gray-400 text-sm flex justify-between items-center">
    {/* Left Side: Copyright */}
    <span>© 2025 Skye Devices Private Limited. All rights reserved.</span>

    {/* Right Side: Indian Logo */}
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-widest">Made in</span>
      <img 
        src={indianFlag} 
        alt="India Logo" 
        className="h-6 w-auto"
      />
    </div>
  </div>
</div>

    </footer>
  );
}