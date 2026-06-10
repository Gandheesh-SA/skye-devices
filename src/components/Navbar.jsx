import React, { useState } from "react";
import logo from "../images/Logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50">

      {/* CONTAINER */}
      <div className="max-w-[1800px] mx-auto px-[clamp(20px,5vw,80px)] py-[clamp(14px,2vh,24px)] flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Skye Devices"
            className="h-[clamp(70px,7vh,120px)] w-auto object-contain"
          />
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-[3vw] text-[#3F3F46] text-[clamp(18px,1vw,22px)] font-medium">

          <NavLink to="/" className={({isActive}) => isActive ? "text-black font-semibold" : ""}>
            Home
          </NavLink>

          <NavLink to="/about" className={({isActive}) => isActive ? "text-black font-semibold" : ""}>
            About
          </NavLink>

          <NavLink to="/research" className={({isActive}) => isActive ? "text-black font-semibold" : ""}>
            Research
          </NavLink>

          <NavLink to="/corporate" className={({isActive}) => isActive ? "text-black font-semibold" : ""}>
            Corporate
          </NavLink>

          <NavLink to="/faq" className={({isActive}) => isActive ? "text-black font-semibold" : ""}>
            FAQ
          </NavLink>

        </nav>


        {/* DESKTOP SHOP BUTTON */}
        <div className="hidden md:block">
          <NavLink
            to="/shop"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-[clamp(16px,1.6vw,28px)] py-[clamp(8px,1vh,14px)] rounded-full text-[clamp(14px,1vw,20px)] font-medium"
          >
            Shop
          </NavLink>
        </div>


        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-[6px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <nav className="flex flex-col items-center gap-6 py-10 text-lg">

            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/research" onClick={() => setMenuOpen(false)}>Research</NavLink>
            <NavLink to="/corporate" onClick={() => setMenuOpen(false)}>Corporate</NavLink>
            <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>

            <NavLink
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full"
            >
              Shop
            </NavLink>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Navbar;