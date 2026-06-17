import corporateVideo from "../images/Corp.jpeg";
import featuresImage from "../images/about/five.png";
import Footer from "../components/Footer";

export default function CorporatePage() {
  return (
    <>
      <section className="bg-white">

        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">

          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-[clamp(30px,4vh,60px)]">
            Corporate
          </h1>

          <div className="flex justify-center">
            <div className="w-full max-w-[900px] rounded-[28px] overflow-hidden">
              <img
                src={corporateVideo}
                alt="Corporate Video"
                className="w-full object-cover"
              />

            </div>
          </div>

          <div className="text-center mt-[clamp(60px,8vh,100px)] max-w-[720px] mx-auto">

            <h2 className="text-[clamp(24px,2.2vw,34px)] font-semibold text-gray-900 leading-snug">
              Help your workforce feel calmer, more focused, and better rested.
            </h2>

            <p className="mt-4 text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
              Using simple guided breathing routines, Skye helps employees feel calmer, more focused, and better rested, so they can show up at their best throughout the workday.
            </p>

          </div>

        <div className="flex justify-center mt-[clamp(30px,4vh,50px)]">
  <a 
    href="mailto:contact@skyedevices.com" 
    className="inline-flex items-center justify-center bg-[#2E2E2E] text-white px-8 py-3 rounded-full text-[15px] hover:bg-black transition"
  >
    Email to enquire
  </a>
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
      "https://youtu.be/aWfpcAVDWN0?si=MaFA88P0i3E8n_Om",
      "https://youtu.be/4Lb5L-VEm34?si=NI87Icc65KyUZ3m8",
     
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