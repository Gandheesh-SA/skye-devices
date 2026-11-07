import corporateVideo from "../images/Corp.jpeg";
import featuresImage from "../images/about/five.png";
import Footer from "../components/Footer";

export default function CorporatePage() {
  return (
    <>
      <section className="bg-white">

        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">

          <div className="max-w-[900px] mx-auto">
            <h1 className="text-[clamp(28px,3vw,42px)] font-extrabold text-gray-900 uppercase leading-tight">
              Skye for <span className="text-[var(--accent)]">Corporate</span>
            </h1>
            <p className="mt-4 text-gray-700 text-[clamp(15px,1.15vw,18px)]">
              Help your employees sleep better and wake up more productive.
            </p>
          </div>

          <div className="flex justify-center mt-[clamp(48px,7vh,76px)]">
            <div className="relative w-full max-w-[900px] rounded-[28px] overflow-hidden bg-gray-100">
              <img
                src={corporateVideo}
                alt="Skye corporate introduction"
                className="w-full h-auto object-contain bg-gray-100"
              />
              <a
                href="https://www.youtube.com/watch?v=aWfpcAVDWN0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play Skye corporate introduction video"
                className="absolute inset-0 grid place-items-center bg-black/10 transition hover:bg-black/20"
              >
                <span className="grid h-[clamp(64px,8vw,88px)] w-[clamp(64px,8vw,88px)] place-items-center rounded-full bg-white/95 shadow-xl transition-transform hover:scale-105">
                  <span className="ml-1 block h-0 w-0 border-y-[14px] border-y-transparent border-l-[23px] border-l-[var(--accent)]" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-[clamp(36px,5vh,54px)]">
            <a
              href="mailto:contact@skyedevices.com"
              className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-9 py-3 rounded-full text-[14px] font-semibold hover:bg-[#a50008] transition"
            >
              Email to enquire
            </a>
          </div>

          <div className="text-center mt-[clamp(60px,8vh,100px)] max-w-[720px] mx-auto">

            <h2 className="text-[clamp(24px,2.2vw,34px)] font-semibold text-gray-900 leading-snug">
              Help your workforce feel calmer, more focused, and better rested.
            </h2>

            <p className="mt-4 text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
              Using simple guided breathing routines, Skye helps employees feel calmer, more focused, and better rested, so they can show up at their best throughout the workday.
            </p>

          </div>

          <div className="mt-[clamp(80px,10vh,120px)] flex justify-center">

            <img
              src={featuresImage}
              alt="Corporate Benefits"
              className="w-full max-w-[900px] object-contain"
            />

          </div>

                    <div className="mt-[clamp(60px,10vh,140px)]">
  <h2 className="text-center text-gray-900 font-semibold text-[clamp(22px,1.8vw,28px)] mb-[clamp(32px,5vh,60px)]">
    Featured Videos
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      "https://www.youtube.com/embed/aWfpcAVDWN0?si=JqipIjWrOcVStOp5",
      "https://www.youtube.com/embed/4Lb5L-VEm34?si=liBQDnZOM216rzf4",
     
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

        </div>

      </section>

      <Footer />
    </>
  );
}
