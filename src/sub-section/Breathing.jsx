import React from "react";
// Assuming the image path remains the same
import breathing from "../images/Breathing.png";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="7" width="20" height="11" rx="2" />
        <path d="M22 11h1a1 1 0 0 1 0 3h-1" />
        <path d="M7 7V5a2 2 0 0 1 4 0v2" />
        <path d="M6 11h8" />
      </svg>
    ),
    text: "Up to 14 days of battery life",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 16h4" />
        <path d="M12 2v4" />
        <circle cx="17" cy="19" r="3" fill="currentColor" stroke="none" />
        <path d="M15.5 19l1 1 2-2" stroke="white" strokeWidth={1.5} fill="none" />
      </svg>
    ),
    text: "Full charge in 2 hours via USB-C",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: "Built to last, 1-year warranty",
  },
];

export default function BreathingSection() {
  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row items-stretch overflow-hidden min-h-[600px] md:min-h-screen">
      
      {/* Left: Image Container */}
      {/* We use h-96 on mobile to ensure it doesn't take up the WHOLE screen, but md:h-auto + flex-1 for desktop */}
      <div className="relative w-full md:w-1/2 lg:w-[45%] h-96 md:h-auto overflow-hidden">
        <img
          src={breathing}
          alt="Skye breathing device held in a hand"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right: Content Container */}
      <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 xl:px-28 bg-white">
        <div className="max-w-xl mx-auto md:mx-0">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Screen-free, calming breathing exercises, anytime, anywhere.
          </h2>

          {/* Body */}
          <p className="mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
            We deliberately kept technology in the background. Skye emits no
            Bluetooth or WiFi signals, creating a calm, distraction-free
            experience.
          </p>

          {/* Feature List */}
          <ul className="mt-10 space-y-6">
            {features.map(({ icon, text }, i) => (
              <li key={i} className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
                  {icon}
                </div>
                <span className="ml-5 text-gray-900 text-lg font-semibold tracking-tight">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}