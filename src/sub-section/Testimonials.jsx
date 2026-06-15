import React, { useState } from "react";
import linkedinLogo from "../images/Social.png";

import person1 from "../images/Barath.png";
// import person2 from "../assets/testimonial-2.jpg";

const testimonials = [
  {
    profilePhoto: person1,
    quote:
      "At first, I wasn’t sure if something this simple would work. But after using Skye for a few weeks, I noticed I was less stressed and more aware during the day. Those small pauses add up. Now it’s just part of my life.",
    name: "Barath M S",
    role: "Founder Butter Videos, Chennai.",
    linkedinUrl: "#",
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[index];

  return (
    <section className="bg-[#FAFAFA] min-h-screen py-[clamp(100px,15vh,200px)] px-[clamp(20px,5vw,120px)]">

      <div className="max-w-[1400px] mx-auto">

        {/* ===== CARD ===== */}
        <div className="bg-black text-white rounded-[2vw] overflow-hidden flex flex-col lg:flex-row shadow-xl">

          {/* LEFT PROFILE IMAGE */}
          <div className="lg:w-1/2">
            <img
              src={current.profilePhoto}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-1/2 p-[clamp(30px,6vw,80px)] flex flex-col justify-center">

            <p className="text-[clamp(16px,1.3vw,22px)] leading-relaxed mb-[clamp(40px,6vh,80px)]">
              “{current.quote}”
            </p>

            <h3 className="text-[clamp(20px,1.8vw,32px)] font-semibold mb-2">
              {current.name}
            </h3>

            <p className="text-gray-400 text-[clamp(14px,1vw,18px)] mb-6">
              {current.role}
            </p>

            {/* LINKEDIN SECTION */}
            <a
              href={current.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-500 transition text-[clamp(14px,1vw,18px)]"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-[clamp(18px,1.2vw,24px)] h-auto"
              />
              <span>{current.name.split(" ")[0]}'s LinkedIn</span>
            </a>

          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="flex justify-center items-center gap-6 mt-[clamp(40px,6vh,100px)]">

          <button
            onClick={prevSlide}
            className="w-[clamp(36px,3vw,50px)] h-[clamp(36px,3vw,50px)] rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition"
          >
            ←
          </button>

          <span className="text-gray-600 text-[clamp(14px,1vw,18px)]">
            {index + 1} / {testimonials.length}
          </span>

          <button
            onClick={nextSlide}
            className="w-[clamp(36px,3vw,50px)] h-[clamp(36px,3vw,50px)] rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition"
          >
            →
          </button>

        </div>

      </div>

      
    </section>
  );
};

export default Testimonials;