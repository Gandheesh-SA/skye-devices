import React from "react";
import mountainImage from "../images/Mountains.jpg";

const NoPhone = () => {
  return (
    <section className="bg-[#FAFAFA] pt-[clamp(80px,10vh,180px)] pb-[clamp(80px,12vh,200px)]">
      <div className="relative w-[92%] max-w-[1600px] mx-auto rounded-[2vw] overflow-hidden">
        <div className="relative h-[clamp(400px,70vh,850px)]">
          <img
            src={mountainImage}
            alt="Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[900px] ml-[clamp(30px,6vw,120px)] text-white">
              <h2 className="text-[clamp(26px,3vw,58px)] font-semibold mb-[clamp(25px,4vh,60px)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                Why not use a phone or smartwatch?
              </h2>
              <div className="text-[clamp(15px,1.2vw,22px)] leading-relaxed space-y-[clamp(20px,3vh,40px)] drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
                <p>
                  To get the real benefits of meditation, you need uninterrupted focus.
                  <span className="font-semibold">
                    {" "}Studies show that even the presence of a phone, when switched off,
                    can be distracting.
                  </span>{" "}
                  When you use your phone as a timer, it becomes even easier to lose focus
                  and get pulled into apps or notifications.
                </p>
                <p>
                  Skye removes all that noise. It gives you a simple,
                  distraction-free way to pause, breathe, reconnect with the
                  moment, and practice micro-meditation in daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoPhone;