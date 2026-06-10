import React from "react";
import deviceImage from "../images/DeviceMode.png";
import modesGridImage from "../images/Timeline.png";

const Modes = () => {
  return (
    <section className="bg-[#1F1F1F] text-white py-[clamp(100px,15vh,250px)]">

      <div className="w-[92%] max-w-[1600px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[clamp(28px,3vw,60px)] font-semibold mb-[clamp(30px,4vh,60px)]">
          One Device. Four Modes. Your Rhythm.
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-[1000px] mx-auto text-[clamp(15px,1.2vw,22px)] text-gray-300 leading-relaxed mb-[clamp(70px,10vh,150px)]">
          Skye vibrates every 5, 15, 30, or 60 minutes depending on the mode you choose.
          The <span className="text-yellow-400">5-minute mode</span> helps keep simple
          tasks on track. The <span className="text-yellow-400">60-minute mode</span>
          supports deep creative work. The
          <span className="text-yellow-400"> 15 and 30-minute modes</span> balance focus
          and creativity.
        </p>

        {/* DEVICE IMAGE */}
        <div className="mb-[clamp(80px,12vh,180px)]">
          <div className="mx-auto w-[clamp(300px,50vw,900px)]">
            <img
              src={deviceImage}
              alt="Skye Device"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* MODES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[clamp(40px,6vw,120px)] text-center mb-[clamp(80px,10vh,160px)]">

          {[
            { title: "5 minutes mode", dots: 1 },
            { title: "15 minutes mode", dots: 2 },
            { title: "30 minutes mode", dots: 3 },
            { title: "60 minutes mode", dots: 4 }
          ].map((mode, index) => (
            <div key={index}>

              <h3 className="text-[clamp(16px,1.3vw,22px)] font-semibold mb-[20px]">
                {mode.title}
              </h3>

              <div className="flex justify-center gap-3">
                {[1,2,3,4].map((dot) => (
                  <div
                    key={dot}
                    className={`w-[clamp(10px,1vw,16px)] h-[clamp(10px,1vw,16px)] rounded-full ${
                      dot <= mode.dots ? "bg-yellow-400" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* ===== DESKTOP IMAGE ===== */}
        <div className="hidden md:block mx-auto w-[clamp(320px,90vw,1500px)]">
          <img
            src={modesGridImage}
            alt="Modes Breakdown"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ===== MOBILE VERTICAL VERSION ===== */}
        <div className="md:hidden flex flex-col items-center gap-8 text-gray-300 text-lg">

          <div className="text-center">
            <p>For simple, routine work</p>
          </div>

          <div className="text-2xl">↓</div>

          <div className="text-center">
            <p>For balanced, everyday work</p>
          </div>

          <div className="text-2xl">↓</div>

          <div className="text-center">
            <p>For creative workflow</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Modes;