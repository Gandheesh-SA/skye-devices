import Footer from "../components/Footer";

export default function ResearchPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(60px,8vh,140px)]">
          
          {/* Header Section */}
          <h1 className="text-[clamp(32px,4vw,46px)] font-semibold text-gray-900 mb-[clamp(24px,4vh,50px)]">
            Resource
          </h1>

          {/* Intro Text - Balanced leading for mobile */}
          <div className="max-w-[850px] text-gray-700 text-[clamp(16px,1.05vw,18px)] leading-relaxed sm:leading-[1.85] space-y-6">
            <p>
              Meditation supports better mental health, but in today’s fast-moving
              world, finding the time or a quiet space to sit and practice is not
              always easy. That is where micro-meditation comes in. As reflected in
              ancient Indian literature, the mind is trained through repeated
              returns to awareness.
            </p>
            <p>
              Micro-meditation brings the benefits of meditation such as improved
              focus, sustained attention, better productivity, and reduced stress
              into your day through short, intentional pauses taken again and again.
              These small resets help the mind return to the present and stay attentive.
            </p>
            <p>
              Skye supports this practice as a standalone timer that gently vibrates
              at user-set intervals. Each vibration is a simple reminder to pause,
              take three deep breaths, observe, and continue your work.
            </p>
          </div>

          {/* Videos Section */}
          <div className="mt-[clamp(60px,10vh,140px)]">
            <h2 className="text-center text-gray-900 font-semibold text-[clamp(22px,1.8vw,28px)] mb-[clamp(32px,5vh,60px)]">
              Videos
            </h2>

            {/* Changed to 1 column on mobile, 2 on tablet/desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,3vw,40px)]">
              {[1, 2, 3, 4].map((video) => (
                <div
                  key={video}
                  className="bg-gray-100 md:bg-gray-200 rounded-[24px] p-3 md:p-4 transition-transform hover:scale-[1.01]"
                >
                  <div className="bg-[#2A2A2A] rounded-[16px] aspect-video w-full shadow-inner"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Articles Section */}
          <div className="mt-[clamp(70px,12vh,160px)]">
            <h2 className="text-center text-gray-900 font-semibold text-[clamp(22px,1.8vw,28px)] mb-[clamp(32px,5vh,60px)]">
              Research Articles
            </h2>

            <div className="space-y-[clamp(20px,3vh,40px)]">
              {[4, 5].map((num) => (
                <div 
                  key={num}
                  className="bg-[#2B2B2B] text-white rounded-[24px] md:rounded-[28px] px-6 py-8 md:px-[60px] md:py-[50px] flex flex-col gap-4"
                >
                  <h3 className="text-[clamp(18px,1.4vw,24px)] font-medium md:font-semibold leading-snug">
                    {num}. The feeling of the passage of time against the time of the external clock
                  </h3>

                  <div className="text-gray-300 text-[14px] md:text-[16px] flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>Link to full article:</span>
                    <a
                      href="https://doi.org/10.1016/j.concog.2023.103535"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-gray-200 hover:text-white break-all sm:ml-1"
                    >
                      https://doi.org/10.1016/j.concog.2023.103535
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