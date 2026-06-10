import React from "react";
import heroImage from "../images/Hero.png";
import skyeDevice from "../images/SkyDevice9.png";
import { NavLink, Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="w-[90%] max-w-[1800px] mx-auto py-[clamp(40px,6vh,80px)]">

        <div className="hidden md:block relative rounded-[2vw] overflow-hidden shadow-lg aspect-[16/9]">
          <img
            src={heroImage}
            alt="Person holding Skye device"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 70%)",
            }}
          />
          <div className="relative z-10 h-full flex items-center px-[6vw]">
            <div className="max-w-[48%] text-white flex flex-col gap-[2.2vh]">
              <div className="flex items-center gap-[0.6vw]">
                <span className="text-yellow-400 text-[clamp(14px,1.1vw,22px)]">
                  ★★★★★
                </span>
                <p className="text-[clamp(12px,0.9vw,18px)] font-medium text-white/80">
                  Loved by professionals & students
                </p>
              </div>
              <h1 className="text-[clamp(28px,3.4vw,72px)] font-bold leading-[1.08]">
                A haptic guide for slow
                <br />
                breathing exercises
              </h1>
              <p className="text-[clamp(13px,1.2vw,22px)] text-white/75 leading-relaxed">
                A handheld, screen-free device that guides you through calming
                breathing exercises for focused mornings, less stressful days,
                and better sleep.
              </p>
                       <div className="mt-6 flex justify-center sm:justify-start"> 
                <NavLink
                  to="/shop" // Don't forget your destination path!
                  className="flex items-center justify-center bg-[#3b5bdb] hover:bg-[#2f4ac4] transition-colors text-white py-4 w-[260px] rounded-full text-base font-semibold shadow-md"
                >
                  Get Skye now
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:hidden relative rounded-2xl overflow-hidden shadow-lg"
          style={{ height: "820px" }}
        >
          <img
            src={skyeDevice}
            alt="Skye breathing device"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,22,40,0.97) 0%, rgba(8,22,40,0.93) 40%, rgba(8,22,40,0.82) 62%, rgba(8,22,40,0) 78%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 flex flex-col items-center text-center text-white px-7 pt-12 pb-16 gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-yellow-400 text-xl tracking-widest">
                ★★★★★
              </span>
              <p className="text-sm text-white/65 font-medium">
                Loved by professionals & students
              </p>
            </div>
            <h1 className="text-[2.1rem] font-bold leading-tight">
              A haptic guide for slow
              <br />
              breathing exercises
            </h1>
            <p className="text-[0.95rem] text-white/70 leading-relaxed max-w-[88%]">
              A handheld, screen-free device that guides you through calming
              breathing exercises for focused mornings, less stressful days,
              and better sleep.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start"> 
  <NavLink
    to="/shop" // Don't forget your destination path!
    className="flex items-center justify-center bg-[#3b5bdb] hover:bg-[#2f4ac4] transition-colors text-white py-4 w-[260px] rounded-full text-base font-semibold shadow-md"
  >
    Get Skye now
  </NavLink>
</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;