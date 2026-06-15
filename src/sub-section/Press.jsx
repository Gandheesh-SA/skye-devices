import React from "react";
import hinduLogo from "../images/HinduLogo.png";
import articleImage from "../images/HinduArticle.png";
import MainImage from "../images/shop/MainImage.png";
import News1 from "../images/News1.png"
import foundersImage from "../images/Founder.png";

export default function InTheNews() {
  return (
    <section className="bg-[#f7f5ef] py-20 px-6">
      <div className="mx-auto max-w-7xl border border-neutral-300 bg-[#faf9f4] shadow-sm">

<div className="flex flex-col gap-8 border-b border-neutral-300 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
  {/* Left Content */}
  <div className="space-y-4 lg:w-1/3">
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        Date
      </p>
      <p className="mt-1 text-base font-medium text-neutral-900">
        September 24, 2025
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        Category
      </p>
      <p className="mt-1 text-base font-medium text-neutral-900">
        Home &amp; Lifestyle
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        Article
      </p>
      <a
        href="https://www.thehindu.com/life-and-style/this-simple-timer-device-is-changing-the-way-people-manage-focus-and-time/article70028603.ece"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
      >
        Read Here →
      </a>
    </div>
  </div>

  {/* Center */}
  <div className="text-center lg:flex-1">
    <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
      In the News
    </p>

    <h2 className="mt-2 font-serif text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
      Featured In
    </h2>

    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-neutral-500 sm:text-sm sm:tracking-[0.2em]">
      Meditation • Mental Well-being • Focus • Productivity
    </p>
  </div>

  {/* Right Logo */}
  <div className="flex justify-center lg:w-1/3 lg:justify-end">
    <img
      src={hinduLogo}
      alt="The Hindu"
      className="h-10 w-auto sm:h-12 lg:h-16 object-contain"
    />
  </div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Left Column */}
          <div className="border-b border-r border-neutral-300 p-8 lg:border-b-0">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              LAUNCH
            </p>

            <h3 className="font-serif text-3xl font-semibold leading-tight">
              Skye Devices Launched In India
            </h3>

            <p className="mt-5 leading-7 text-neutral-600">
              A small, tactile timer designed to pull focus back without the lure of screens. Built in aluminium, it fits in your hand or pocket and can be set to intervals of five, 15, 30 or 60 minutes. At the chosen interval, it vibrates gently, reminding you of the time that has passed. Nothing more, nothing less.
            </p>

             <img
              src={News1}
              alt="Skye Meditation Timer"
              className="my-8 w-full rounded-xl object-cover"
            />

            <div className="mt-8 border-l-4 border-neutral-900 pl-4 italic text-neutral-700">
              “Attention is one of our most valuable resources.”
            </div>
          </div>

          {/* Center Feature */}
          <div className="border-b border-neutral-300 p-8 lg:border-x lg:border-b-0 border-x-0">

            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Featured Story
            </p>

            <h3 className="font-serif text-4xl font-bold leading-tight">
              This simple timer device is changing the way people manage focus
              and time.
            </h3>

            <img
              src={MainImage}
              alt="Skye Meditation Timer"
              className="my-8 w-full rounded-xl object-cover"
            />

            <p className="text-neutral-600 leading-7">
              Skye's approach to distraction-free focus and mindful routines
              has been recognized in a published feature exploring how simple,
              intentional technology can support healthier habits.
            </p>

            <a
              href="https://www.thehindu.com/life-and-style/this-simple-timer-device-is-changing-the-way-people-manage-focus-and-time/article70028603.ece"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Read the Published Article →
            </a>
          </div>

          {/* Right Column */}
          <div className="p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              FOUNDERS
            </p>

            <h3 className="font-serif text-3xl font-semibold leading-tight">
              Meet the Founders behind the Revolutionary Technology
            </h3>

            <p className="mt-5 leading-7 text-neutral-600">
              In 2025, electronics engineering graduates Akash, Barath, and Veera co-founded Skye. Bonded by a shared struggle with focus, the trio launched the venture out of frustration with modern tech’s tendency to monopolize attention and drive product addiction.
            </p>

           <img
              src={foundersImage}
              alt="Skye Meditation Timer"
              className="my-8 w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Footer Strip */}
        <div className="border-t border-neutral-300 px-8 py-5 text-center text-xs uppercase tracking-[0.3em] text-neutral-500">
          Building mindful routines • One session at a time
        </div>
      </div>
    </section>
  );
}