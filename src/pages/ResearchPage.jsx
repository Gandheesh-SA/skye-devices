import Footer from "../components/Footer";

export default function ResearchPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(60px,8vh,140px)]">
          
          {/* Header Section */}
          <h1 className="text-[clamp(32px,4vw,46px)] font-semibold text-gray-900 mb-[clamp(24px,4vh,50px)]">
            Research
          </h1>

          {/* Intro Text - Balanced leading for mobile */}
          <div className="max-w-[850px] text-gray-700 text-[clamp(16px,1.05vw,18px)] leading-relaxed sm:leading-[1.85] space-y-6">
            <p>
              Slow breathing has long been used in breathing and meditation practices to calm the mind, reduce stress, and prepare the body for rest. Hundreds of studies today show that when breathing slows down, the body naturally shifts toward a calmer, more rested state. The nervous system begins to settle, heart rate variability (HRV) improves, and the body gradually moves away from stress and toward recovery </p>

<p>Yet in today’s fast-moving world, guided breathing is often harder to follow than it sounds. Many people turn to apps or videos for help, but using a screen, especially soon after waking up or before sleep, can feel distracting rather than calming. Counting breaths, tracking timing, or trying to follow instructions can also take attention away from simply breathing.</p>

<p>Skye was designed to make slow breathing easier to follow. Using gentle vibrations, it guides breathing through simple sessions designed for focused mornings, calmer moments during the day, and better sleep at night. Breathe in as it vibrates, hold when it pauses, and breathe out as it vibrates again. No screens, no counting, no distractions, just a calming breathing rhythm guided through touch.</p>

<p>Whether used soon after waking up, before sleep, during stressful moments, or before a quick power nap, Skye is designed to make calming breathing routines easier to follow and easier to return to every day.</p><p>

If you would like to learn more, we have included a few YouTube videos and peer-reviewed research articles below as a starting point to better understand slow breathing and guided breathing exercises. We encourage you to explore further and learn more about the science behind breathing and how it influences stress, focus, relaxation, and sleep.
            </p>
          </div>

          {/* Videos Section */}
          <div className="mt-[clamp(60px,10vh,140px)]">
  <h2 className="text-center text-gray-900 font-semibold text-[clamp(22px,1.8vw,28px)] mb-[clamp(32px,5vh,60px)]">
    Featured Videos
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      "https://www.youtube.com/embed/2vVfqgxpl_4",
      "https://www.youtube.com/embed/x4m_PdFbu-s",
      "https://www.youtube.com/embed/DZZ2lQ9mdKI",
      "https://www.youtube.com/embed/g-nZBmxLBOo",
    ].map((video, index) => (
      <div
        key={index}
        className="
          group
          bg-white
          rounded-3xl
          border border-gray-200
          shadow-sm
          hover:shadow-xl
          transition-all
          duration-300
          overflow-hidden
        "
      >
        <div className="relative aspect-video">
          <iframe
            src={video}
            title={`YouTube Video ${index + 1}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="px-5 py-4">
          <p className="text-sm font-medium text-gray-800">
            Video {index + 1}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Watch on YouTube
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
  <div className="mt-[clamp(60px,10vh,140px)]">
  <h2 className="text-center text-gray-900 font-semibold text-[clamp(22px,1.8vw,28px)] mb-12">
    Research Articles
  </h2>

  <div className="space-y-6">
    {[
      {
        id: "01",
        title:
          "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
        link: "https://doi.org/10.3389/fnhum.2018.00353",
      },
      {
        id: "02",
        title:
          "Self-Regulation of Breathing as an Adjunctive Treatment of Insomnia",
        link: "https://doi.org/10.3389/fpsyt.2018.00780",
      },
      {
        id: "03",
        title:
          "The Effects of Presleep Slow Breathing and Music Listening on Polysomnographic Sleep Measures – a Pilot Trial",
        link: "https://doi.org/10.1038/s41598-020-64218-7",
      },
      {
        id: "04",
        title:
          "Breathing Practices for Stress and Anxiety Reduction: Conceptual Framework of Implementation Guidelines Based on a Systematic Review of the Published Literature",
        link: "https://doi.org/10.3390/brainsci13121612",
      },
    ].map((article) => (
      <div
        key={article.id}
        className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Number Badge */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-lg font-semibold text-white">
          {article.id}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-relaxed text-gray-900">
            {article.title}
          </h3>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black"
          >
            📄 Read Full Article
            <span className="text-gray-400">→</span>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}