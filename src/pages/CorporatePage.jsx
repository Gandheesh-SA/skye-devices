import corporateVideo from "../images/Thumbnail.png";
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
              Skye helps your workforce perform better, instantly.
            </h2>

            <p className="mt-4 text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
              Better time management, sharper focus, and lower stress.
              Skye keeps your employees at their best.
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

        </div>

      </section>

      <Footer />
    </>
  );
}