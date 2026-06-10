import React from "react";

const Comparison = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen py-[clamp(80px,12vh,200px)]">
      <div className="w-[92%] max-w-[1400px] mx-auto text-center">
        <h1 className="text-[clamp(26px,2.8vw,52px)] font-semibold text-gray-800 mb-[clamp(20px,3vh,40px)]">
          Traditional Meditation vs. Micro-Meditation with Skye
        </h1>
        <p className="text-[clamp(15px,1.2vw,22px)] text-gray-600 leading-relaxed max-w-[900px] mx-auto mb-[clamp(60px,10vh,150px)]">
          We all know meditation is good for us, but finding time every day is hard.
          Life gets busy, and we forget. That’s why micro-meditation with Skye works.
          It’s made for real life, for busy people.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(30px,5vw,120px)] mb-[clamp(50px,8vh,120px)]">
          <div className="bg-gradient-to-b from-[#1F1F1F] to-[#2A2A2A] text-white rounded-[2vw] p-[clamp(30px,5vw,80px)] text-left shadow-xl relative">
            <div className="absolute top-[clamp(20px,3vh,40px)] right-[clamp(20px,3vw,40px)] text-red-500 text-[clamp(22px,2vw,40px)]">
              ❌
            </div>
            <h3 className="text-[clamp(18px,1.6vw,30px)] font-semibold mb-[clamp(20px,3vh,40px)]">
              Traditional Meditation
            </h3>
            <ul className="space-y-[clamp(10px,1.5vh,20px)] text-[clamp(14px,1.1vw,20px)] text-gray-300">
              <li>• Needs separate time</li>
              <li>• Needs a quiet place</li>
              <li>• Hard to do every day</li>
              <li>• Feels like another task</li>
              <li>• Needs technique and practice</li>
              <li>• Feels overwhelming at first</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-[#1F1F1F] to-[#2A2A2A] text-white rounded-[2vw] p-[clamp(30px,5vw,80px)] text-left shadow-xl relative">
            <div className="absolute top-[clamp(20px,3vh,40px)] right-[clamp(20px,3vw,40px)] text-green-500 text-[clamp(22px,2vw,40px)]">
              &#10004;
            </div>
            <h3 className="text-[clamp(18px,1.6vw,30px)] font-semibold mb-[clamp(20px,3vh,40px)]">
              Micro-Meditation with Skye
            </h3>
            <ul className="space-y-[clamp(10px,1.5vh,20px)] text-[clamp(14px,1.1vw,20px)] text-gray-300">
              <li>• Fits into your day</li>
              <li>• Works anywhere</li>
              <li>• Easy to stay consistent</li>
              <li>• Feels natural</li>
              <li>• No learning curve</li>
              <li>• Simple and effortless</li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          className="text-blue-600 underline text-[clamp(14px,1vw,18px)] hover:text-blue-800 transition"
        >
          Learn more about micro-meditation here.
        </a>
      </div>
    </section>
  );
};

export default Comparison;