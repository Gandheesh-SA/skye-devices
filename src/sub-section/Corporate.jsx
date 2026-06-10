import React from "react";
import corporates from "../images/Corporates.png"
import { NavLink } from 'react-router-dom';

export default function Corporates() {
  return (
    <div className="bg-white font-sans">
      {/* Top divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Image card with overlay text */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3]">
              {/* Replace src with your actual image */}
              <img
                src={corporates}
                alt="Corporate wellness meeting"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Overlay label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl sm:text-3xl font-bold text-center leading-snug px-4">
                  Skye for
                  <br />
                  Corporate
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight">
              For HR &amp; Wellness Managers
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Skye helps your employees feel better instantly. By guiding them
              through calming breathing exercises, it helps reduce stress,
              improve focus, and support better sleep.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Instead of gifting another coffee mug or water bottle, give your
              team something meaningful, a wellness companion they can actually
              use every day
            </p>

            {/* CTA Button */}
        <div className="mt-2">
  <NavLink 
    to="/corporate" 
    className="inline-block bg-gray-900 hover:bg-gray-700 transition-colors duration-200 text-white text-base font-medium px-8 py-4 rounded-full"
  >
    Learn more
  </NavLink>
</div>
          </div>

        </div>
      </section>

      {/* Bottom divider */}
      <div className="w-full h-px bg-gray-200" />
    </div>
  );
}