import React from "react";
import giftImage from "../images/Gift.png";
import { NavLink, Link } from "react-router-dom";

const Gift = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen flex items-center py-[clamp(100px,15vh,220px)] px-[clamp(20px,6vw,140px)]">

      <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(60px,10vw,160px)] items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="text-center lg:text-left">

          <h1 className="text-[clamp(30px,3.5vw,64px)] font-semibold text-gray-900 mb-[clamp(30px,5vh,60px)]">
            Gift better this time.
          </h1>

          <p className="text-[clamp(16px,1.3vw,22px)] text-gray-600 leading-relaxed mb-[clamp(40px,6vh,80px)] max-w-[520px] mx-auto lg:mx-0">
            Looking to gift something unique and meaningful to your loved ones?
          </p>

                   <div className="mt-6 flex justify-center sm:justify-start"> 
           <NavLink
             to="/shop" // Don't forget your destination path!
             className="flex items-center justify-center bg-[#3b5bdb] hover:bg-[#2f4ac4] transition-colors text-white py-4 w-[260px] rounded-full text-base font-semibold shadow-md"
           >
             Get Skye now
           </NavLink>
         </div>

          {/* Sub Link */}
       <div className="mt-[clamp(50px,8vh,120px)]">
  <NavLink
    to="/corporate" // Pointing to your internal route
    className="inline-flex items-center gap-3 text-gray-700 underline text-[clamp(14px,1vw,18px)] hover:text-black transition"
  >
    Explore corporate gifting for teams and leaders
    <span className="text-[clamp(16px,1vw,22px)]">→</span>
  </NavLink>
</div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center">

          <div className="w-[clamp(300px,45vw,650px)] rounded-[2vw] overflow-hidden shadow-xl">
            <img
              src={giftImage}
              alt="Gift Skye"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gift;