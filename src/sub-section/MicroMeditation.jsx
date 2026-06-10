import React from "react";
import deviceImage from "../images/Device.png";

const MicroMeditation = () => {
  return (
    <section className="bg-[#FAFAFA] py-[clamp(60px,8vh,160px)]">
      <div className="w-[92%] max-w-[1800px] mx-auto">
        <div className="relative rounded-[2vw] overflow-hidden bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A] px-[clamp(30px,5vw,120px)] py-[clamp(40px,6vh,120px)] flex flex-col lg:flex-row items-center gap-[clamp(30px,5vw,120px)]">
          <div className="flex-shrink-0 w-[clamp(220px,25vw,420px)]">
            <img
              src={deviceImage}
              alt="Skye Device"
              className="w-full h-auto rounded-[1.5vw] object-cover"
            />
          </div>
          <div className="max-w-[clamp(300px,45vw,750px)] text-white">
            <h2 className="text-[clamp(24px,2.5vw,48px)] font-semibold mb-[clamp(16px,2vh,40px)]">
              What is Micro-meditation?
            </h2>

            <p className="text-[clamp(14px,1.1vw,20px)] text-gray-300 leading-relaxed mb-[clamp(16px,2vh,30px)]">
              Micro-meditation is the practice of taking short, intentional pauses
              throughout the day to reset your attention, reduce stress and anxiety,
              and improve focus and productivity. Unlike traditional meditation,
              it fits easily into real work routines and can be done anytime, anywhere.
            </p>
            <p className="text-[clamp(14px,1.1vw,20px)] text-gray-300 leading-relaxed">
              <span className="text-yellow-400 font-medium cursor-pointer hover:underline">
                Research
              </span>{" "}
              shows that these brief, intentional breaks between tasks help reduce
              mental fatigue and support sustained focus and performance, making it
              easier to stay productive throughout the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroMeditation;