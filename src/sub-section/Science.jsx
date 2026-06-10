import React from "react";
import Science1 from "../images/Science1.png";
import Science2 from "../images/Science2.png";

export default function ScienceSection() {
  return (
    <div className="w-full flex flex-col" style={{ minHeight: "150vh" }}>

      {/* ── PART 1: Dark bg — Science behind Skye ── */}
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-12 lg:px-20 flex-1"
        style={{ backgroundColor: "#2f2f2f", minHeight: "50vh" }}
      >
        {/* Left: Image with caption overlay */}
        <div className="relative w-full sm:w-[42%] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={Science1}
            alt="The science behind Skye"
            className="w-full h-full object-cover"
            style={{ minHeight: "260px", maxHeight: "340px" }}
          />
          <div className="absolute bottom-0 left-0 w-full px-5 py-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white font-bold text-lg sm:text-xl">
              The science behind Skye
            </p>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="w-full sm:w-[52%] flex flex-col gap-5 py-8 sm:py-12">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Skye works by activating the vagus nerve, the main pathway between
            your brain and body, and a key part of the parasympathetic nervous
            system. When you breathe at the right rhythm, your heart rate slows,
            cortisol levels drop, and your body moves into a calmer, more
            relaxed state.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            That's how Skye's guided breathing can help you feel calmer within
            minutes, from easing stress to helping you fall asleep more
            naturally.
          </p>
          <div className="mt-2">
            <button className="px-7 py-3 rounded-full border border-white text-white text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
              More Research
            </button>
          </div>
        </div>
      </div>

      {/* ── PART 2: Full-bleed image section — 30 days ── */}
      <div className="relative w-full flex-1" style={{ minHeight: "60vh" }}>
        <img
          src={Science2}
          alt="Experience life-changing results in 30 days"
          className="w-full h-full object-cover"
          style={{ minHeight: "60vh" }}
        />
        {/* Overlay text centred on the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 sm:pt-14 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug max-w-md">
            Experience life-changing results in 30 days
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-4 max-w-sm leading-relaxed">
            Everyone's experience is different, but these are the kinds of
            changes people often notice. We're not magicians, but we think these
            results are pretty magical.
          </p>
        </div>
      </div>

      {/* ── PART 3: Dark bg — Day breakdown ── */}
      <div
        className="w-full flex flex-col items-center justify-evenly px-6 sm:px-12 lg:px-20 py-12 sm:py-16 gap-8"
        style={{ backgroundColor: "#2f2f2f", minHeight: "40vh" }}
      >
        {/* Three columns */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-0">
          {/* Day 1–10 */}
          <div className="flex-1 flex flex-col items-center text-center px-4">
            <h3 className="text-amber-400 text-xl sm:text-2xl font-extrabold mb-4">
              Day 1-10
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Get accustomed to syncing your breath with the vibration of Skye.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-gray-600 mx-2" />

          {/* Day 11–20 */}
          <div className="flex-1 flex flex-col items-center text-center px-4">
            <h3 className="text-amber-400 text-xl sm:text-2xl font-extrabold mb-4">
              Day 11-20
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              You'll notice that slow breathing triggers parasympathetic
              activity, helping your body to relax.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-gray-600 mx-2" />

          {/* Day 21–30 */}
          <div className="flex-1 flex flex-col items-center text-center px-4">
            <h3 className="text-amber-400 text-xl sm:text-2xl font-extrabold mb-4">
              Day 21-30
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Breathing with Skye you will experience deep relaxation as your
              heart rate syncs with your breathing.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-gray-400 text-xs sm:text-sm text-center mt-2">
          *For the optimal results, use Skye daily for 2 to 3 weeks.
        </p>
      </div>
    </div>
  );
}