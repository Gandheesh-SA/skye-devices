import React, { useState } from "react";
import Device1 from "../images/Device2.png";
import Device2 from "../images/Device3.png";
import Device3 from "../images/Device4.png";
import Device4 from "../images/Device5.png";

const modes = [
  {
    id: 1,
    label: "Mode 1",
    name: "Morning Focus",
    duration: "5 min session",
    pattern: "4s inhale · 4s hold · 4s exhale · 4s hold",
    description:
      "A classic box breathing exercise designed to improve mindfulness, focus, and mental clarity. Ideal for starting your day feeling calm, clear, and centered.",
    bestUsed: "Soon after waking up",
    image: Device1,
  },
  {
    id: 2,
    label: "Mode 2",
    name: "Calm & Reset",
    duration: "5 min session",
    pattern: "4s inhale · 4s hold · 8s exhale · 2s hold",
    description:
      "A breathing rhythm with a slower exhale to help activate your body's natural relaxation response. Designed to ease stress, quiet anxiety, and bring a sense of calm within minutes.",
    bestUsed: "During stressful or anxious moments",
    image: Device2,
  },
  {
    id: 3,
    label: "Mode 3",
    name: "Sleep Basic",
    duration: "7 min session",
    pattern: "4s inhale · 2s hold · 6s exhale · 2s hold",
    description:
      "A gentle nighttime breathing exercise designed to help your body slow down and transition into rest. Perfect for unwinding after a busy day and preparing your mind for sleep.",
    bestUsed: "Before bedtime to relax and fall asleep faster",
    image: Device3,
  },
  {
    id: 4,
    label: "Mode 4",
    name: "Sleep Advanced",
    duration: "12 min session",
    pattern: "4s inhale · 2s hold · 6s exhale · 2s hold",
    description:
      "An extended wind-down session for nights when falling asleep feels difficult. The longer duration helps calm racing thoughts, relax the nervous system, and ease you into deeper rest.",
    bestUsed: "When your mind feels restless before sleep",
    image: Device4,
  },
];

export default function BreathingModes() {
  const [activeMode, setActiveMode] = useState(0);
  const mode = modes[activeMode];

  return (
    <section className="w-full bg-white flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 selection:bg-amber-200">
      <div className="w-full max-w-5xl flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">

        <div className="text-center w-full max-w-2xl px-0 sm:px-4 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Four guided slow breathing exercises for calm, focus, and sleep
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Simple guided breathing exercises designed with{" "}
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-200 hover:decoration-blue-500 transition-colors"
            >
              research-backed
            </a>{" "}
            techniques to help you feel calmer, more focused, and sleep better.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
          {modes.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveMode(i)}
              className={`px-3 sm:px-5 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-2xl text-sm sm:text-base md:text-lg font-bold border-2 transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
                activeMode === i
                  ? "bg-amber-400 border-amber-400 text-gray-900 shadow-sm"
                  : "bg-white border-gray-200 text-gray-700 hover:border-amber-300 hover:text-gray-900"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="w-full border-t border-gray-100" />

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-16">

          <div className="flex flex-col items-center text-center space-y-4 w-full sm:w-auto lg:w-1/3 flex-shrink-0">
            <div className="w-36 sm:w-40 md:w-44 lg:w-48 h-44 sm:h-48 md:h-52 lg:h-56 flex items-center justify-center bg-gray-50 rounded-3xl p-4 transition-all duration-300">
              <img
                src={mode.image}
                alt={`Skye Device showing Mode ${mode.id}`}
                className="max-w-full max-h-full object-contain drop-shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-1">
              <p className="text-gray-900 text-sm sm:text-base font-semibold">
                <span className="text-gray-400 font-medium">Exercise:</span> {mode.name}
              </p>
              <p className="text-gray-900 text-sm sm:text-base font-semibold">
                <span className="text-gray-400 font-medium">Duration:</span> {mode.duration}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 w-full lg:w-2/3 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Breathing Rhythm
              </span>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-mono break-words">
                {mode.pattern}
              </p>
            </div>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {mode.description}
            </p>

            <div className="pt-2 border-t border-gray-50">
              <p className="text-gray-900 text-sm sm:text-base md:text-lg font-medium">
                <span className="text-gray-500 font-normal">Best used:</span> {mode.bestUsed}
              </p>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-gray-100" />

      </div>
    </section>
  );
}