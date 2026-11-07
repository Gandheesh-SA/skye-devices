import Footer from "../components/Footer";

export default function ResearchPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(60px,8vh,140px)]">
          
          <div className="max-w-[1000px] text-gray-800">
            <h1 className="text-[clamp(28px,3.3vw,46px)] font-extrabold uppercase leading-tight">
              Supporting <span className="text-[var(--accent)]">Research</span>
            </h1>

            <p className="mt-5 text-[clamp(17px,1.4vw,22px)] leading-relaxed">
              The Research Library — studies on guided breathing and sleep.
            </p>

            <div className="mt-[clamp(42px,6vh,68px)] space-y-5 text-[clamp(16px,1.25vw,20px)] leading-[1.35]">
              <p>
                Guided breathing can help calm the mind, ease stress, and prepare
                the body for sleep. Skye makes it easier to follow, using gentle
                vibrations to guide each breath, without screens, counting, or
                distractions.
              </p>
              <p>
                We’ve included a few YouTube videos and peer-reviewed research
                articles below to help you explore guided breathing and the science
                behind it, including how it may influence stress, anxiety, and sleep.
              </p>
            </div>
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
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-semibold text-white">
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
