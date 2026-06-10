import React from "react";
import foundersImage from "../images/Founder.png";

const Founders = () => {
  return (
    <section className="bg-[#1F1F1F] text-white min-h-screen py-[clamp(100px,15vh,220px)]">

      <div className="w-[92%] max-w-[1400px] mx-auto text-center">

        {/* ===== TITLE ===== */}
        <h1 className="text-[clamp(28px,3vw,60px)] font-semibold mb-[clamp(10px,2vh,20px)]">
          Three friends. One big idea.
        </h1>

        <p className="text-[clamp(14px,1vw,18px)] text-gray-400 mb-[clamp(60px,10vh,140px)]">
          Meet our founders
        </p>

        {/* ===== IMAGE ===== */}
        <div className="mb-[clamp(60px,10vh,140px)]">
          <div className="rounded-[2vw] overflow-hidden mx-auto w-[clamp(320px,85vw,1100px)] shadow-2xl">
            <img
              src={foundersImage}
              alt="Founders"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ===== STORY SECTION ===== */}
        <div className="text-left max-w-[900px] mx-auto">

          <h3 className="text-[clamp(18px,1.5vw,28px)] font-semibold mb-[clamp(20px,3vh,40px)]">
            Where it all began
          </h3>

          <p className="text-[clamp(15px,1.2vw,20px)] text-gray-300 leading-relaxed mb-[clamp(30px,5vh,60px)]">
            Our co-founders{" "}
            <span className="text-yellow-400">Akash</span>,{" "}
            <span className="text-yellow-400">Barath</span> and{" "}
            <span className="text-yellow-400">Veera</span>{" "}
            started Skye back in February, 2025. From studying electronics engineering
            to a shared frustration with how modern tech monopolises attention,
            influence choices, and make us addicted to their products, the three
            had a lot in common to bond over, including struggling to stay focused
            and finding time to slow down.
          </p>

          {/* Button */}
          <button className="bg-white text-black px-[clamp(20px,2.5vw,40px)] py-[clamp(10px,1.5vh,18px)] rounded-full text-[clamp(14px,1vw,18px)] font-medium hover:opacity-90 transition">
            Read full story
          </button>

        </div>

      </div>

    </section>
  );
};

export default Founders;