import React from "react";
import videoThumbnail from "../images/Thumbnail.png";
import flowBg from "../images/Flow.png";

const HowItWorks = () => {
  const steps = ["Pause", "Take 3 breaths", "Observe", "Resume"];

  return (
    <section className="bg-[#1F1F1F] text-white py-[clamp(80px,12vh,200px)]">

      <div className="w-[92%] max-w-[1600px] mx-auto">

        <div className="text-center max-w-[1000px] mx-auto mb-[clamp(60px,10vh,150px)]">
          <h2 className="text-[clamp(28px,3vw,60px)] font-semibold mb-[clamp(20px,3vh,40px)]">
            How Skye works?
          </h2>

          <p className="text-[clamp(15px,1.2vw,22px)] text-gray-300 leading-relaxed">
            Skye is a standalone timer that gently vibrates at user set intervals.
            Each vibration reminds you to pause, take three deep breaths, observe,
            and resume work. With regular use, this helps reduce mental fatigue,
            improve focus and productivity, and encourage calmer responses to stress.
            Working quietly in the background, Skye brings the benefits of meditation
            into your daily life without screens, apps, or interruptions.
          </p>
        </div>

        <div className="mb-[clamp(80px,12vh,200px)]">

          <div className="relative rounded-[2vw] overflow-hidden shadow-2xl aspect-video">

            <img
              src={videoThumbnail}
              alt="Video"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 w-[clamp(60px,6vw,120px)] h-[clamp(60px,6vw,120px)] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition">
                <div className="w-0 h-0 border-l-[clamp(20px,2vw,40px)] border-l-black border-y-[clamp(12px,1.2vw,25px)] border-y-transparent ml-2" />
              </div>
            </div>

          </div>
        </div>

        <div className="text-center">

          <h3 className="text-[clamp(24px,2.5vw,48px)] font-semibold mb-[clamp(40px,6vh,100px)]">
            Micro-Meditation with Skye
          </h3>

          <div className="relative rounded-[2vw] overflow-hidden p-[clamp(30px,5vw,100px)]">

            <img
              src={flowBg}
              alt="Flow Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10">

              <p className="text-[clamp(16px,1.3vw,24px)] mb-[clamp(30px,5vh,80px)]">
                What to do when Skye vibrates
              </p>


              <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(20px,3vw,60px)]">

                {steps.map((step, index) => (
                  <React.Fragment key={index}>

                    {/* BOX */}
                    <div className="bg-[#1F1F1F] px-[clamp(30px,4vw,70px)] py-[clamp(20px,3vh,40px)] rounded-[1.5vw] text-[clamp(14px,1.1vw,22px)] font-medium shadow-xl">
                      {step}
                    </div>

                    {/* ARROWS */}
                    {index < steps.length - 1 && (
                      <>
                        {/* Desktop Arrow */}
                        <div className="hidden md:block text-[clamp(24px,2vw,40px)]">
                          →
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden text-[clamp(24px,2vw,40px)] rotate-90">
                          →
                        </div>
                      </>
                    )}

                  </React.Fragment>
                ))}

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;