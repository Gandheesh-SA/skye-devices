import React from "react";
import hinduLogo from "../images/HinduLogo.png";
import articleImage from "../images/HinduArticle.png";

const Press = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen py-[clamp(100px,15vh,220px)]">

      <div className="w-[92%] max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(60px,8vw,160px)] items-center">

        {/* ===== LEFT SIDE ===== */}
        <div className="text-center lg:text-left">

          {/* Logo */}
          <div className="mb-[clamp(30px,4vh,60px)] flex justify-center lg:justify-start">
            <img
              src={hinduLogo}
              alt="The Hindu Logo"
              className="w-[clamp(140px,20vw,260px)] h-auto object-contain"
            />
          </div>

          {/* Quote */}
          <p className="text-[clamp(18px,1.5vw,28px)] text-gray-700 leading-relaxed mb-[clamp(30px,5vh,70px)]">
            “This simple timer device is changing the way people manage focus and time.”
          </p>

          {/* Button */}
          <a
  href="https://www.thehindu.com/life-and-style/this-simple-timer-device-is-changing-the-way-people-manage-focus-and-time/article70028603.ece"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-center bg-[#1F1F1F] text-white px-[clamp(24px,3vw,50px)] py-[clamp(12px,1.5vh,22px)] rounded-full text-[clamp(14px,1vw,18px)] font-medium hover:opacity-90 transition"
>
  Full article here
</a>

        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex justify-center">

          <img
            src={articleImage}
            alt="The Hindu Article"
            className="w-[clamp(320px,45vw,650px)] h-auto object-contain shadow-xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Press;