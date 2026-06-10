import workImage from "../images/about/one.png";
import surveyImage from "../images/about/two.png";
import prototypeImage from "../images/about/three.png";
import deviceImage from "../images/about/four.png";
import deviceImage1 from "../images/Device9.png";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .about-page * {
          box-sizing: border-box;
        }

        .about-page {
          font-family: 'DM Sans', sans-serif;
          background: #f9f7f4;
          color: #1a1814;
        }

        .about-page .serif {
          font-family: 'DM Serif Display', serif;
        }

        .about-page .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9b8e7e;
        }

        .about-page h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 96px);
          font-weight: 400;
          line-height: 1.0;
          color: #1a1814;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .about-page .hero-image {
          width: 100%;
          border-radius: 4px;
          object-fit: cover;
          display: block;
        }

        .about-page .rule {
          width: 40px;
          height: 1px;
          background: #c8b89a;
          display: block;
          margin-bottom: 32px;
        }

        .about-page p {
          font-size: clamp(15px, 1.05vw, 17px);
          line-height: 1.85;
          color: #4a4540;
          font-weight: 300;
          margin: 0;
        }

        .about-page .text-block {
          max-width: 580px;
        }

        .about-page .text-block p + p {
          margin-top: 24px;
        }

        .about-page .link-accent {
          color: #b87333;
          text-decoration: none;
          border-bottom: 1px solid #b8733360;
          transition: border-color 0.2s;
        }
        .about-page .link-accent:hover {
          border-color: #b87333;
        }

        .about-page .split-grid {
          display: grid;
          gap: clamp(40px, 6vw, 100px);
          align-items: center;
        }

        .about-page .split-grid.left-heavy {
          grid-template-columns: 1.15fr 0.85fr;
        }

        .about-page .split-grid.right-heavy {
          grid-template-columns: 0.85fr 1.15fr;
        }

        @media (max-width: 768px) {
          .about-page .split-grid.left-heavy,
          .about-page .split-grid.right-heavy {
            grid-template-columns: 1fr;
          }
          .about-page .split-grid img {
            order: -1;
          }
        }

        .about-page .split-image {
          width: 100%;
          border-radius: 3px;
          object-fit: cover;
          display: block;
        }

        .about-page .section-number {
          font-family: 'DM Serif Display', serif;
          font-size: 11px;
          color: #c8b89a;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 20px;
        }

        .about-page .founders-note {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(22px, 2.5vw, 34px);
          font-weight: 400;
          line-height: 1.5;
          color: #1a1814;
          font-style: italic;
          letter-spacing: -0.01em;
        }

        .about-page .closing-signature {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(18px, 1.6vw, 24px);
          font-weight: 400;
          color: #1a1814;
          font-style: italic;
          line-height: 1.9;
        }

        .about-page .closing-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, #c8b89a, transparent);
          margin-bottom: 48px;
          display: block;
        }

        .about-page .tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9b8e7e;
          background: #ede9e3;
          padding: 6px 14px;
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .about-page .prototype-caption {
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #9b8e7e;
          margin-top: 16px;
          text-transform: uppercase;
        }
      `}</style>

      <section className="about-page">
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "clamp(80px,10vh,140px) clamp(24px,5vw,100px)",
          }}
        >

          {/* ── Header ── */}
          <div style={{ marginBottom: "clamp(64px,10vh,120px)" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "32px" }}>
              Our story
            </span>
            <h1>
              About<br />
              <span style={{ fontStyle: "italic", color: "#9b8e7e" }}>Skye</span>
            </h1>
          </div>

          {/* ── Hero image ── */}
          <div style={{ marginBottom: "clamp(72px,12vh,140px)" }}>
            <img
              src={deviceImage}
              alt="Skye device"
              className="hero-image"
              style={{ maxHeight: "520px", objectPosition: "center" }}
            />
          </div>

          {/* ── Opening copy ── */}
          <div className="text-block" style={{ marginBottom: "clamp(72px,12vh,140px)" }}>
            <span className="rule" />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p>
                We began with something we, and a lot of our friends, were going through
                ourselves. We weren't sleeping well at night. We'd wake up tired, unfocused,
                and somehow already behind before the day even started. By the end of the
                day, we were mentally drained, but falling asleep still didn't come easily.
                It felt like a cycle we kept repeating.
              </p>
              <p>
                Like a lot of people, we turned to meditation and breathing apps. Guided
                breathing became part of our mornings to feel more focused and our nights
                to wind down before sleep. Some of it genuinely helped. But there was one
                thing that kept happening. To start a session, we had to pick up our phone.
                And many times, instead of actually beginning, we'd end up scrolling,
                checking notifications, or getting distracted before we even started.
              </p>
              <p>
                That's when something clicked for us. Guided breathing, especially before
                sleep and soon after waking up, really helped. But it shouldn't depend on
                the same screen that constantly pulls at our attention. We wanted something
                simpler, calmer, and screen-free. That idea became Skye.
              </p>
            </div>
          </div>

          {/* ── Split: text + work image ── */}
          <div
            className="split-grid left-heavy"
            style={{ marginBottom: "clamp(72px,12vh,140px)" }}
          >
            <div>
              <span className="section-number">01 / Research</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p>
                  Before building anything, we wanted to validate the idea. We ran an
                  online survey with more than 700 people across ages and professions.
                  The message was clear. Mental fatigue is common. Sustained attention
                  is difficult. People want something practical that fits into real life.
                </p>
                <p>
                  By early May 2025, we built our first working prototype with a 3D-printed
                  case and started testing it with real users. The feedback was encouraging.
                  People found the guided breathing routines calming, easy to follow, and
                  simple to fit into everyday life, especially soon after waking up and
                  before sleep.
                </p>
                <p>
                  Building hardware in India is challenging, but we wanted Skye to be
                  rooted in breathing and meditation practices, and designed with modern
                  engineering standards. We focused on creating something simple, durable,
                  and thoughtful to use every day.
                </p>
              </div>
            </div>
            <img
              src={workImage}
              alt="Skye development"
              className="split-image"
              style={{ aspectRatio: "4/5", objectPosition: "center" }}
            />
          </div>

          {/* ── Pull quote ── */}
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto clamp(72px,12vh,140px)",
              textAlign: "center",
              padding: "clamp(48px,6vh,80px) 0",
              borderTop: "1px solid #ddd8d0",
              borderBottom: "1px solid #ddd8d0",
            }}
          >
            <p className="founders-note">
              "We wanted to be thoughtful about waste. Electronic waste is growing rapidly,
              and we didn't want Skye to add to it."
            </p>
          </div>

          {/* ── Sustainability text block ── */}
          <div className="text-block" style={{ marginBottom: "clamp(72px,12vh,140px)" }}>
            <span className="rule" />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p>
                We also wanted to be thoughtful about waste. Electronic waste is growing
                rapidly, and we didn't want Skye to add to it. A USB-C cable is not
                included, as most people already have one, helping reduce unnecessary
                waste and packaging. With up to 14 days of battery life on a charge,
                Skye quietly fits into your routine without becoming another device you
                constantly need to charge.
              </p>
              <p>
                We also wanted to challenge the idea that electronics made in India are
                less reliable. Skye is built with high-quality components sourced globally,
                custom-designed electronics, and a durable anodised aluminium body
                designed to last.
              </p>
              <p>
                We believe calming routines and guided breathing should feel simple,
                accessible, and easy to follow. They should not be expensive, complicated,
                or dependent on another screen. Skye is made in small batches with honest
                pricing, thoughtful design, and careful attention to quality.
              </p>
            </div>
          </div>

          {/* ── Split: prototype image + text ── */}
          <div
            className="split-grid right-heavy"
            style={{ marginBottom: "clamp(72px,12vh,140px)" }}
          >
            <div>
              <img
                src={prototypeImage}
                alt="Prototype"
                className="split-image"
                style={{ aspectRatio: "4/5", objectPosition: "center" }}
              />
              <p className="prototype-caption">
                First functional prototype — Aug 2025
              </p>
            </div>
            <div>
              <span className="section-number">02 / Craft</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p>
                  Skye was started in February 2025. We all studied electronics
                  engineering together and shared the same frustration with how modern
                  technology captures attention, influences behaviour, and keeps people
                  hooked.
                </p>
                <p>
                  Since distractions are constant, we believed a calm breathing companion
                  needed a reliable anchor — something separate with a clear, standalone
                  purpose. So we built one.
                </p>
                <p>
                  A simple device that is not linked to your phone or the internet, and
                  gently guides you through breathing at set intervals. Each session
                  reminds you to pause, breathe, and return to what you were doing —
                  calmer and more present.
                </p>
              </div>
            </div>
          </div>

          {/* ── Second hero image ── */}
          <div style={{ marginBottom: "clamp(72px,12vh,120px)" }}>
            <img
              src={deviceImage1}
              alt="Skye device"
              className="hero-image"
              style={{ maxHeight: "480px", objectPosition: "center" }}
            />
          </div>

          {/* ── Closing ── */}
          <div style={{ maxWidth: "600px" }}>
            <span className="closing-rule" />
            <p style={{ marginBottom: "40px" }}>
              Skye is not just another electronic device. It is a simple, screen-free
              way to slow down, breathe, and build calmer mornings, better nights, and
              quieter moments in between. And this is only the beginning.
            </p>
            <div className="closing-signature">
              Much love,<br />
              Team Skye
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}