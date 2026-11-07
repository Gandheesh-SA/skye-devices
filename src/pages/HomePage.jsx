import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import heroVideo from "../images/home/Hero Video from Skye Website.mp4";
import storyVideo from "../images/home/Skye Website Video 2.mp4";
import modesVideo from "../images/home/4 Modes Video.MP4";
import silverImage from "../images/home/Skye Website HM Page Silver.png";
import redImage from "../images/home/HM Page Red from Skye Website.png";
import scrollingImage from "../images/home/Can't Stop Scrolling - Skye Website.jpg";

const modes = [
  ["MODE 1", "4s", "4s", "4s", "4s", "5 mins"],
  ["MODE 2", "4s", "5s", "6s", "2s", "5 mins"],
  ["MODE 3", "4s", "2s", "6s", "2s", "7 mins"],
  ["MODE 4", "4s", "2s", "6s", "2s", "12 mins"],
];

const steps = [
  { title: "Breathe in", text: "As Skye starts to vibrate.", icon: "∿" },
  { title: "Hold", text: "As the vibration stops.", icon: "⏸" },
  { title: "Breathe out", text: "As Skye vibrates again.", icon: "∿" },
  { title: "Hold", text: "As the vibration stops once more.", icon: "⏸" },
];

const reviews = [
  {
    title: "Love it!",
    text: "I've struggled with falling asleep for a long time. Been using Headspace sleep audios for ages, but sometimes they actually make my mind wander more.",
    name: "Barath",
  },
  { title: "", text: "", name: "" },
  { title: "", text: "", name: "" },
  { title: "", text: "", name: "" },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;1,500&display=swap');

.home{--red:#c8000a;--red-bright:#c8000a;--ink:#1a1a1a;font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:#fff;overflow-x:hidden}
.home *{box-sizing:border-box}
.sec{min-height:100vh;min-height:100svh;width:100%;position:relative;display:flex;flex-direction:column}
.center{align-items:center;justify-content:center;text-align:center;padding:48px 24px}
.accent{color:var(--red)}
.home h1,.home h2,.home h3,.home p{margin:0}

.media-fill{width:100%;height:100%;display:block;object-fit:cover}

/* 1 hero */
.hero{background:#111;isolation:isolate}
.hero::after{content:"";position:absolute;inset:0;z-index:0;background:linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.03) 55%,rgba(0,0,0,.3));pointer-events:none}
.hero-video{position:absolute;inset:0}
.hero-text{position:absolute;z-index:2;top:50%;left:50%;width:100%;margin:0;transform:translate(-50%,-50%);color:#fff;font-weight:700;letter-spacing:.5em;font-size:14px;text-align:center;padding:0 24px;text-shadow:0 2px 18px rgba(0,0,0,.55)}

/* 2 statement */
.statement h2{font-size:clamp(30px,7vw,64px);font-weight:800;line-height:1.1;max-width:900px;text-transform:uppercase}
.statement .by{font-size:clamp(34px,7vw,56px);font-weight:800;color:var(--red);display:block}
.statement .for{color:var(--red)}
.press{margin-top:48px;display:flex;flex-direction:column;align-items:center;gap:8px;font-size:12px}
.press b{font-family:'Playfair Display',serif;font-size:18px;border-bottom:1px solid #999;padding-bottom:4px}

/* 3 video + quote */
.video-sec .stage{flex:1;position:relative;min-height:60vh}
.video-sec .stage::after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.27);pointer-events:none}
.stage-video{position:absolute;inset:0}
.video-caption{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1;color:#fff;font-size:clamp(14px,2.4vw,24px);text-align:center;width:min(80%,520px);line-height:1.5;pointer-events:none}
.quote{background:var(--red);color:#fff;text-align:center;padding:24px;display:flex;flex-direction:column;gap:12px;align-items:center}
.quote p{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(14px,2vw,20px);max-width:560px}
.quote b{font-family:'Playfair Display',serif;font-size:clamp(16px,2.4vw,24px)}

/* 4 products */
.products{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr}
.prod{position:relative;min-height:50svh;overflow:hidden;background:#c8000a}
.prod img{position:absolute;inset:0;transition:transform .55s ease}
.prod:hover img{transform:scale(1.035)}
.prod::after{content:"";position:absolute;inset:auto 0 0;height:40%;background:linear-gradient(transparent,rgba(0,0,0,.48));pointer-events:none}
.prod a{position:absolute;left:clamp(20px,4vw,56px);bottom:clamp(22px,4vw,48px);z-index:2;color:#fff;font-weight:800;font-size:13px;letter-spacing:.08em;text-decoration:none;text-transform:uppercase;border:1px solid rgba(255,255,255,.72);border-radius:999px;padding:13px 20px;backdrop-filter:blur(8px);background:rgba(0,0,0,.2)}
.prod a:hover{background:#fff;color:var(--red)}

/* 5 insomnia */
.split{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr}
.split .copy{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:48px 24px}
.split .media{min-height:50svh;position:relative}
.split .media>.media-fill{position:absolute;inset:0}
.copy h2{font-size:clamp(22px,3vw,34px);font-weight:800;text-transform:uppercase}
.copy p{font-size:clamp(13px,1.4vw,16px);line-height:1.6;max-width:420px}
.cta{background:var(--red);color:#fff;border:0;border-radius:999px;padding:12px 24px;font-weight:700;font-size:13px;cursor:pointer}
.perks{display:flex;gap:24px;margin-top:20px;font-size:11px;flex-wrap:wrap;justify-content:center}
.perks span{display:flex;flex-direction:column;align-items:center;gap:6px}

/* 6 modes */
.modes .media{min-height:40svh}
.modes .media video{background:#111}
.modes .panel{background:var(--red);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:40px 20px}
.modes .panel h2{font-size:clamp(20px,2.6vw,32px);font-weight:800}
.modes .panel p{font-size:clamp(12px,1.3vw,15px);line-height:1.6;max-width:420px}
.tbl-wrap{width:100%;max-width:520px;overflow-x:auto;background:#fff;padding:12px;margin-top:8px}
.tbl{width:100%;border-collapse:collapse;color:#222;font-size:10px;min-width:380px}
.tbl th,.tbl td{border:1px solid #bbb;padding:8px 6px;text-align:center}
.tbl th{font-weight:800}
.tbl td:first-child{font-weight:800}

/* 7 steps */
.how{min-height:auto;padding:clamp(64px,8vw,110px) 24px}
.how h2{font-size:clamp(28px,5.5vw,56px);font-weight:800;text-transform:uppercase;line-height:1.15}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:32px 16px;margin-top:clamp(38px,5vw,56px);max-width:900px;width:100%}
.step{display:flex;flex-direction:column;align-items:center;gap:10px;font-size:13px}
.step .ic{font-size:36px;line-height:1}
.step b{color:var(--red)}
.step.hold b{color:var(--ink)}

/* reviews */
.reviews{min-height:auto;padding:clamp(64px,8vw,100px) 0 clamp(70px,9vw,110px) 24px;justify-content:center;gap:24px}
.reviews h2{font-size:clamp(22px,3vw,32px);font-weight:800}
.reviews h2 span{color:var(--red)}
.reviews p.sub{font-size:14px}
.track{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 24px 8px 0;-webkit-overflow-scrolling:touch}
.card{flex:0 0 min(80%,300px);scroll-snap-align:start;border:2px solid var(--red);min-height:300px;padding:24px;display:flex;flex-direction:column;gap:12px}
.card .stars{color:var(--red);letter-spacing:.2em}
.card h3{font-size:14px;font-weight:800}
.card p{font-size:13px;line-height:1.5}
.card small{margin-top:auto;font-size:12px}

/* tablet */
@media(min-width:640px){
  .products{grid-template-columns:1fr 1fr;grid-template-rows:1fr}
  .steps{grid-template-columns:repeat(4,1fr)}
  .tbl{font-size:11px}
}
/* Preserve the complete frame on narrow and unusually tall screens. */
@media(max-width:767px){
  .hero{min-height:auto;aspect-ratio:9/16}
  .hero-video{object-fit:cover;object-position:center;background:#111}
  .stage-video{object-fit:contain;object-position:center;background:#2a0004}
  .video-sec{min-height:auto}
  .video-sec .stage{min-height:auto;aspect-ratio:16/9;background:#2a0004}
  .products{min-height:auto}
  .prod{min-height:auto;aspect-ratio:1/1}
  .prod img{object-fit:contain}
  .split .media{min-height:auto;aspect-ratio:4/5;background:#111}
  .split .media>.media-fill{object-fit:contain}
  .modes .media{aspect-ratio:9/16}
}
/* desktop */
@media(min-width:768px){
  .hero-text{font-size:22px}
  .split{grid-template-columns:1fr 1fr;grid-template-rows:1fr}
  .split .media{min-height:0}
  .split.flip .media{order:-1}
  .modes{grid-template-columns:1fr 1fr}
  .modes .media{min-height:0}
  .reviews{padding-left:48px}
  .tbl{font-size:12px}
}
@media(min-width:1280px){
  .reviews{padding-left:80px}
  .card{flex-basis:340px}
  .hero-text{font-size:28px}
}
`;

export default function Home() {
  return (
    <div className="home" id="top">
      <style>{css}</style>

      {/* 1. Hero */}
      <section className="sec hero" id="about">
        <video className="media-fill hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <p className="hero-text">SLEEP OR SCROLL</p>
      </section>

      {/* 2. Statement */}
      <section className="sec center statement">
        <h2>
          <span className="by">BY</span>
          SKYE IS MADE <span className="for">FOR</span> PEOPLE WHO SCROLL WHEN
          THEY SHOULD BE SLEEPING.
        </h2>
        <div className="press">
          <b>THE HINDU</b>
          <span>AS SEEN IN THE HINDU</span>
        </div>
      </section>

      {/* 3. Video + quote */}
      <section className="sec video-sec" id="research">
        <div className="stage">
          <video className="media-fill stage-video" autoPlay muted loop playsInline preload="metadata">
            <source src={storyVideo} type="video/mp4" />
          </video>
        </div>
        <div className="quote">
          <p>
            “If I don’t sleep 11 to 12 hours a day, it’s not right. If I don’t
            have that amount of sleep, I hurt myself.”
          </p>
          <b>Roger Federer</b>
        </div>
      </section>

      {/* 4. Products */}
      <section className="sec products" id="shop">
        <div className="prod">
          <img className="media-fill" src={silverImage} alt="Silver Skye breathing device" />
          <Link to="/products/silver">TRY SILVER →</Link>
        </div>
        <div className="prod">
          <img className="media-fill" src={redImage} alt="Red Skye breathing device" />
          <Link to="/products/red">TRY RED →</Link>
        </div>
      </section>

      {/* 5. Can't stop scrolling */}
      <section className="sec split">
        <div className="copy">
          <h2>
            <span className="accent">Can’t stop</span>
            <br />
            scrolling at night?
          </h2>
          <p>
            In India, 8 in 10 people scroll on their phones just before bed to
            relax, often at the expense of sleep. Skye is a screen-free device
            that uses gentle vibrations to pace your breathing, offering a
            better way to relax and ease into sleep.
          </p>
          <Link className="cta" to="/shop">Try Skye free for 15 days</Link>
          <div className="perks">
            <span>
              <i>🚚</i>Free shipping
            </span>
            <span>
              <i>🛡️</i>1-year warranty
            </span>
            <span>
              <i>↩️</i>15-day money-back
            </span>
          </div>
        </div>
        <div className="media">
          <img className="media-fill" src={scrollingImage} alt="Person scrolling on a phone in bed at night" />
        </div>
      </section>

      {/* 6. Modes */}
      <section className="sec split modes">
        <div className="media">
          <video className="media-fill" autoPlay muted loop playsInline preload="metadata">
            <source src={modesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="panel">
          <h2>4 MODES TO CHOOSE FROM.</h2>
          <p>
            Everyone breathes differently. Our four modes let you find a
            breathing pace that feels comfortable for your body, helping you
            breathe without strain, relax your mind, and ease into sleep.
          </p>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th />
                  <th>INHALE</th>
                  <th>HOLD</th>
                  <th>EXHALE</th>
                  <th>HOLD</th>
                  <th>DURATION</th>
                </tr>
              </thead>
              <tbody>
                {modes.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. How it works */}
      <section className="sec center how" id="faq">
        <h2>
          GET TO BED. HOLD SKYE.
          <br />
          <span className="accent">BREATHE ALONG.</span>
        </h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className={`step ${s.title === "Hold" ? "hold" : ""}`}>
              <span className="ic">{s.icon}</span>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="sec reviews" id="corporate">
        <h2>
          THE <span>HYPE</span> IS REAL
        </h2>
        <p className="sub">From our 1000+ users</p>
        <div className="track">
          {reviews.map((r, i) => (
            <article className="card" key={i}>
              <div className="stars">★★★★★</div>
              {r.title && <h3>{r.title}</h3>}
              {r.text && <p>{r.text}</p>}
              {r.name && <small>{r.name}</small>}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
