import React from "react";
import DeviceImage from "../images/Device1.png";
import HandImage from "../images/Hand.png";

export default function HowToUseSkye() {
  return (
    <section className="w-full bg-white flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10" style={{ minHeight: "75vh" }}>
      {/* Dark Card */}
      <div
        className="w-full rounded-3xl flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-12 sm:py-16"
        style={{ backgroundColor: "#2b2b2b", minHeight: "65vh" }}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-6 text-center tracking-tight">
          How to use Skye
        </h2>

        {/* Intro */}
        <p className="text-gray-200 text-base sm:text-lg text-center mb-6 max-w-xl leading-relaxed">
          Skye is designed to be simple and distraction-free, with just one button.
        </p>

        {/* Steps */}
        <ul className="flex flex-col items-center gap-3 mb-10 w-full max-w-xl">
          <li className="text-gray-200 text-base sm:text-lg text-center">
            <span className="text-gray-400 mr-2">•</span>
            <span className="font-bold text-white">Press once</span> to check the current breathing mode
          </li>
          <li className="text-gray-200 text-base sm:text-lg text-center">
            <span className="text-gray-400 mr-2">•</span>
            <span className="font-bold text-white">Press again</span> to switch between modes, shown through the LED indicator
          </li>
          <li className="text-gray-200 text-base sm:text-lg text-center">
            <span className="text-gray-400 mr-2">•</span>
            <span className="font-bold text-white">Press and hold</span> to begin your breathing exercise
          </li>
        </ul>

        {/* Device + Hand illustration */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Device */}
          <div className="relative">
            <img
              src={DeviceImage}
              alt="Skye Device"
              className="w-32 sm:w-40 lg:w-48 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Hand */}
          <img
            src={HandImage}
            alt="Hand pressing Skye device"
            className="w-16 sm:w-20 lg:w-24 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}