import React, { useState } from "react";
import linkedinLogo from "../images/Social.png";

import person1 from "../images/testimonials/profile1.jpeg"
import person2 from "../images/testimonials/profile2.jpeg"
import person3 from "../images/testimonials/profile3.jpeg"
import person4 from "../images/testimonials/profile4.jpeg"

const testimonials = [
  {
    profilePhoto: person1,
    quote:
      "As a doctor working rotating night shifts, getting quality sleep during the day has always been a challenge. Even when I was exhausted, it could take me a long time to fall asleep. While looking for something that could help, I came across Skye. Following the breathing exercises felt awkward at first, but it quickly became easier. Now, instead of lying awake with my mind racing, I focus on the breathing guidance and drift off much faster. It's become an essential part of my post-shift routine.",
    name: "Dr. Binu Thomas Bose",
    role: "Emergency physician",
    
  },
    {
    profilePhoto: person2,
    quote:
      "I've been trying to build a better morning routine for years. My biggest problem was reaching for my phone the moment I woke up. I'd open Instagram, scroll for an hour, and then feel terrible about wasting the start of my day. I started using Skye for a breathing exercise as soon as I wake up, before touching anything else. The difference was immediate. From the very first day, my mornings felt calmer and more intentional. Instead of getting pulled into social media, I was able to start my day on my own terms. I've recommended Skye to many of my friends, and several of them have started using it too.",
    name: "Akshay V",
    role: "Security Analyst",

  },
    {
    profilePhoto: person3,
    quote:

"I started using Skye whenever I felt stressed or overwhelmed, especially before meetings. Just focusing on the breathing helps slow my thoughts down and gives me a sense of calm. It's a simple habit, and I find it much easier to focus on my breathing with Skye than on my own.",
    name: "Purnima M",
    role: "Data Analyst",
  },
    {
    profilePhoto: person4,
    quote:
      "During exam season and while preparing for my thesis presentation, I often felt anxious and found it hard to concentrate. I'd sit down to study, get distracted, and quickly feel overwhelmed by everything I had to do. Skye became a simple way to reset. Spending a few minutes following the breathing exercises helped me calm down, settle my thoughts, and get back to studying with a clearer mind. It's one of the few habits I've actually stuck with because I can feel the difference almost immediately.",
    name: "S A Gandheesh",
    role: "Postgraduate Student",
   
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