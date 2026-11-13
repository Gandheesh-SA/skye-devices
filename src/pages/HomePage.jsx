import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import silverImage from "../images/shop/MainImage.png";
import redImage from "../images/home/HM Page Red from Skye Website.png";
import scrollingImage from "../images/home/Can't Stop Scrolling - Skye Website.jpg";

const heroVideo = "https://res.cloudinary.com/dxweenzoo/video/upload/f_auto,q_auto,vc_auto,w_1920/v1794135146/Hero_Video_from_Skye_Website_gvhpw4.mp4";
const storyVideo = "https://res.cloudinary.com/dxweenzoo/video/upload/f_auto,q_auto,vc_auto,w_1280/v1794135158/Skye_Website_Video_2_f3h4fm.mp4";
const modesVideo = "https://res.cloudinary.com/dxweenzoo/video/upload/f_auto,q_auto,vc_auto,w_1280/v1794135156/4_Modes_Video_yiyqoi.mp4";

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

const sleepQuotes = [
  { text: "If I don't sleep 11 to 12 hours a day, it's not right. If I don't have that amount of sleep, I hurt myself.", author: "Roger Federer" },
  { text: "Sleep is extremely important to me. I need to rest and recover in order for the training I do to be absorbed by my body. I normally sleep 8–10 hours per night, and take naps during the day when I'm training hard.", author: "Usain Bolt" },
  { text: "I can't stress that enough. Sleep is everything. Sleep, exercise, health, keep the body functioning correctly. All those things, they're not just a vanity thing and it's not a laziness thing. It literally improves the quality of the way the mind functions.", author: "Matthew McConaughey" },
  { text: "Recovery and sleep are really, really important. Finding the right mixture between what you eat, the sleep and the actual activities you do is one of the hardest things to get right. That's something I'm searching for all the time.", author: "Lewis Hamilton" },
];

const reviews = [
  {
    title: "Finally, something without a screen",
    text: "I was tired of using the Calm App to help me sleep, only to end up scrolling for another 45 minutes while trying to open the app. This device doesn’t need a phone.",
    name: "Godson Samuel",
  },
  { title: "A thoughtful little gadget", text: "Got interested after seeing Skye on LinkedIn. I love products that solve everyday problems without adding another app to my phone.", name: "Pavithra" },
  { title: "Better than another sleep app", text: "I've downloaded several sleep apps over the years. The problem was that I would open my phone to go through the routine in the app to fall asleep but end up scrolling my Instagram. This happens every time, but with Skye, it's different.", name: "Asha" },
  { title: "Still building the habit", text: "I use it for a few days and then sometimes forget. I wish there was a reminder feature. The product itself is nice, but I am not consistent.", name: "Ashmitha Chandra" },
  { title: "I was sceptical at first", text: "I wasn't sure how much difference following vibrations could make. But I appreciate having a simple breathing guide instead of having to follow instructions on my phone.", name: "Niyathi" },
  { title: "Small enough to travel with", text: "I travel quite frequently for work and stay in hotels mostly. Falling asleep in a new place was always a struggle for me. Skye helps, and it's very easy to carry along.", name: "Dharshana" },
  { title: "Not an instant fix", text: "I wouldn't say it's a magic solution for sleep. But it gives me a structured way to relax before bed, and that's something I appreciate.", name: "Bala" },
  { title: "The red one looks fantastic", text: "Bought the red version and absolutely love how it looks. It's compact, beautifully made and something I actually enjoy keeping on my bedside table.", name: "Karan" },
  { title: "Bought it for myself, now gifting it", text: "I like the idea behind Skye, and I've been into guided breathing for a few years now. Never knew guided breathing through vibrations and pauses could be so intuitive.", name: "Varun" },
];

function LazyVideo({ src, className, label }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={shouldLoad ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}

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
.statement{padding-top:24px}
.statement .preposition{display:inline-grid;vertical-align:baseline;height:1.1em;min-width:2.25ch;overflow:hidden;color:var(--red);line-height:1.1}
.statement .preposition span{grid-area:1/1;animation:prepositionFlip 4s cubic-bezier(.2,.75,.25,1) infinite}
.statement .preposition span:nth-child(2){animation-delay:2s}
@keyframes prepositionFlip{0%,42%{opacity:1;transform:perspective(500px) rotateX(0);transform-origin:50% 100%}50%,92%{opacity:0;transform:perspective(500px) rotateX(90deg);transform-origin:50% 0}93%,100%{opacity:0;transform:perspective(500px) rotateX(-90deg);transform-origin:50% 100%}}
@media (prefers-reduced-motion:reduce){.statement .preposition span{animation:none}.statement .preposition span:nth-child(2){display:none}}
.press{margin-top:48px;display:flex;flex-direction:column;align-items:center;gap:8px;font-size:12px}
.press a{color:inherit;text-decoration:none}
.press b{font-family:'Playfair Display',serif;font-size:18px;border-bottom:1px solid #999;padding-bottom:4px}

/* 3 video + quote */
.video-sec .stage{position:relative;width:100%;aspect-ratio:16/9;min-height:0;margin:0 auto;background:#111}
.video-sec .stage::after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.27);pointer-events:none}
.stage-video{position:absolute;inset:0;object-fit:contain;object-position:center;background:#111}
.video-caption{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1;color:#fff;font-size:clamp(14px,2.4vw,24px);text-align:center;width:min(80%,520px);line-height:1.5;pointer-events:none}
.quote{background:var(--red);color:#fff;text-align:center;padding:clamp(28px,4vw,48px) 24px;display:flex;flex-direction:column;gap:12px;align-items:center;min-height:150px;justify-content:center}
.quote p{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(14px,1.7vw,18px);max-width:620px;color:#fff4d6}
.quote b{font-family:'Playfair Display',serif;font-size:clamp(16px,2vw,22px);color:#fff}
.quote-content{display:grid;gap:18px;animation:quoteReveal .7s ease both}
@keyframes quoteReveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@media (prefers-reduced-motion:reduce){.quote-content{animation:none}}

/* 4 products */
.products{min-height:auto!important;background:#f5f2ee;padding:clamp(64px,8vw,110px) clamp(18px,4vw,64px);gap:clamp(34px,5vw,60px)}
.products-head{text-align:center;display:grid;gap:12px}
.products-kicker{color:var(--red);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.products-head h2{font-size:clamp(32px,5vw,64px);font-weight:800;letter-spacing:-.045em;line-height:1}
.products-head .products-sub{color:#666;font-size:clamp(13px,1.4vw,16px)}
.products-swipe{display:none;color:#777;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.product-grid{width:min(100%,1260px);margin:0 auto;display:grid;grid-template-columns:1fr;gap:20px}
.prod{position:relative;overflow:hidden;border-radius:26px;background:#fff;box-shadow:0 18px 50px rgba(25,18,14,.09);transition:transform .35s ease,box-shadow .35s ease}
.prod:hover{transform:translateY(-6px);box-shadow:0 26px 70px rgba(25,18,14,.16)}
.prod-link{display:grid;color:var(--ink);text-decoration:none;height:100%}
.prod-visual{position:relative;aspect-ratio:1/1;overflow:hidden;background:#dedede}
.prod-visual img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.prod:hover .prod-visual img{transform:scale(1.04)}
.prod-tag{position:absolute;top:18px;left:18px;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);border-radius:999px;padding:8px 12px;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
.prod-copy{display:grid;grid-template-columns:1fr auto;align-items:end;gap:20px;padding:24px}
.prod-copy-text{display:grid;gap:7px}
.prod-copy h3{font-size:clamp(22px,2.5vw,34px);font-weight:800;letter-spacing:-.035em}
.prod-copy p{color:#686868;font-size:12px;line-height:1.5}
.prod-price{display:block;color:var(--red);font-size:14px;font-weight:800;margin-top:4px}
.prod-cta{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:var(--red);color:#fff;font-size:20px;transition:transform .25s ease,background .25s ease}
.prod:hover .prod-cta{transform:translateX(3px);background:#a50008}

/* 5 insomnia */
.split{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr}
.split .copy{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:48px 24px}
.split .media{min-height:50svh;position:relative}
.split .media>.media-fill{position:absolute;inset:0}
.copy h2{font-size:clamp(22px,3vw,34px);font-weight:800;text-transform:uppercase}
.copy p{font-size:clamp(13px,1.4vw,16px);line-height:1.6;max-width:420px}
.cta{background:var(--red);color:#fff;border:0;border-radius:999px;padding:12px 24px;font-weight:700;font-size:13px;cursor:pointer}
.perks{display:flex;gap:clamp(24px,5vw,64px);margin-top:24px;font-size:clamp(14px,1.4vw,18px);font-weight:600;flex-wrap:wrap;justify-content:center}
.perks span{display:flex;flex-direction:column;align-items:center;gap:9px;min-width:120px;animation:perkIn .7s ease both}
.perks span:nth-child(2){animation-delay:.15s}.perks span:nth-child(3){animation-delay:.3s}
.perks span i{font-size:clamp(25px,3vw,36px);font-style:normal;line-height:1;animation:perkFloat 2.8s ease-in-out infinite}
.perks span:nth-child(2) i{animation-delay:.4s}.perks span:nth-child(3) i{animation-delay:.8s}
@keyframes perkIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes perkFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@media(prefers-reduced-motion:reduce){.perks span,.perks span i{animation:none}}

/* 6 modes */
.modes .media{min-height:40svh}
.modes .media video{background:#111}
.modes .panel{background:var(--red);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:40px 20px}
.modes .panel h2{font-size:clamp(20px,2.6vw,32px);font-weight:800}
.modes .panel p{font-size:clamp(12px,1.3vw,15px);line-height:1.6;max-width:420px}
.mode-grid{width:100%;max-width:620px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:8px}
.mode-card{background:#fff;color:#202020;border-radius:16px;padding:20px;display:grid;gap:14px;text-align:left;border:1px solid rgba(32,32,32,.1);transition:transform .25s ease,border-color .25s ease}
.mode-card:hover{transform:translateY(-4px);border-color:var(--red)}
.mode-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.mode-card-head strong{font-size:14px;letter-spacing:.04em}
.mode-duration{color:var(--red);font-size:11px;font-weight:800;white-space:nowrap}
.mode-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}
.mode-step{display:grid;gap:3px;text-align:center}
.mode-step small{color:#777;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.05em}
.mode-step b{font-size:14px}

/* 7 steps */
.how{min-height:auto;padding:clamp(64px,8vw,110px) 24px}
.how h2{font-size:clamp(28px,5.5vw,56px);font-weight:800;text-transform:uppercase;line-height:1.15}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:32px 16px;margin-top:clamp(38px,5vw,56px);max-width:900px;width:100%}
.step{display:flex;flex-direction:column;align-items:center;gap:12px;font-size:14px;min-height:170px}
.step .ic{font-size:56px;line-height:1;display:inline-block;color:var(--ink);transform-origin:center}
.step.breathe-in .ic,.step.breathe-out .ic{animation:breathPulse 4s ease-in-out infinite}
.step.breathe-out .ic{animation-delay:2s}
.step.hold .ic{animation:holdPulse 4s ease-in-out infinite}
.step.hold:last-child .ic{animation-delay:2s}
@keyframes breathPulse{0%,100%{transform:scale(.65);opacity:.45}45%{transform:scale(1.35);opacity:1}65%{transform:scale(1);opacity:1}}
@keyframes holdPulse{0%,45%,100%{transform:scale(1);opacity:1}50%,65%{transform:scale(.78);opacity:.55}}
.step b{color:var(--red)}
.step.hold b{color:var(--ink)}
@media (prefers-reduced-motion:reduce){.step .ic{animation:none}}

/* reviews */
.reviews{min-height:auto;padding:clamp(64px,8vw,100px) 0 clamp(70px,9vw,110px) 24px;justify-content:center;gap:24px}
.youtube-feature{min-height:auto;padding:clamp(52px,7vw,96px) clamp(20px,6vw,88px);background:#f5f2ee;display:grid;gap:22px;justify-items:center;text-align:center}
.youtube-feature h2{font-size:clamp(24px,4vw,48px);font-weight:800;letter-spacing:-.04em;text-transform:uppercase}
.youtube-feature h2 span{color:var(--red)}
.youtube-frame{width:min(100%,980px);aspect-ratio:16/9;border:0;border-radius:22px;overflow:hidden;background:#111;box-shadow:0 16px 40px rgba(25,18,14,.12)}
.youtube-frame iframe{width:100%;height:100%;display:block;border:0}
.reviews h2{font-size:clamp(22px,3vw,32px);font-weight:800}
.reviews h2 span{color:var(--red)}
.reviews p.sub{font-size:14px}
.track{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 24px 8px 0;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.track::-webkit-scrollbar{display:none}
.reviews-track-wrap{position:relative;display:flex;align-items:center;min-width:0;padding-bottom:58px}
.review-arrow{position:absolute;z-index:2;width:38px;height:38px;border:0;border-radius:50%;background:#fff;color:var(--red);box-shadow:0 6px 18px rgba(0,0,0,.18);font-size:30px;line-height:1;cursor:pointer;display:grid;place-items:center}
.review-arrow{top:auto;bottom:8px}
.review-arrow-left{left:calc(50% - 48px)}.review-arrow-right{right:calc(50% - 48px)}
.card{flex:0 0 min(80%,300px);scroll-snap-align:start;border:2px solid var(--red);min-height:300px;padding:24px;display:flex;flex-direction:column;gap:12px}
.card .stars{color:var(--red);letter-spacing:.2em}
.card h3{font-size:14px;font-weight:800}
.card p{font-size:13px;line-height:1.5}
.card small{margin-top:auto;font-size:12px}

/* tablet */
@media(min-width:640px){
  .product-grid{grid-template-columns:1fr 1fr}
  .steps{grid-template-columns:repeat(4,1fr)}
  .tbl{font-size:11px}
}
@media(max-width:639px){
  .products{padding-inline:0;overflow:hidden}
  .products-head{padding-inline:20px}
  .products-swipe{display:block}
  .product-grid{display:flex;width:100%;max-width:none;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:20px;padding:4px 20px 24px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
  .product-grid::-webkit-scrollbar{display:none}
  .prod{flex:0 0 min(84vw,360px);scroll-snap-align:start}
  .prod:last-child{margin-right:6px}
}
/* Preserve the complete frame on narrow and unusually tall screens. */
@media(max-width:767px){
  .hero{min-height:auto;aspect-ratio:9/16}
  .hero-video{object-fit:cover;object-position:center;background:#111}
  .stage-video{object-fit:contain;object-position:center;background:#2a0004}
  .video-sec{min-height:auto}
  .video-sec .stage{width:100%;min-height:0;aspect-ratio:16/9;background:#111}
  .prod-copy{padding:20px}
  .scrolling-section{min-height:auto;display:block}
  .scrolling-section .copy{padding:64px 24px}
  .scrolling-section .media{display:none}
  .split .media{min-height:auto;aspect-ratio:4/5;background:#111}
  .split .media>.media-fill{object-fit:contain}
  .modes{min-height:auto}
  .modes .panel{order:1}
  .modes .media{order:2;aspect-ratio:4/5;min-height:0;background:#111}
  .modes .media>.media-fill{object-fit:contain}
  .modes .panel{padding:36px 16px;gap:14px}
  .modes .panel h2{font-size:24px;line-height:1.15}
  .modes .panel p{font-size:13px;max-width:34rem}
  .tbl-wrap{max-width:100%;padding:7px;margin-top:4px;overflow:hidden}
  .tbl{min-width:0;table-layout:fixed;font-size:9px}
  .tbl th,.tbl td{padding:7px 2px;overflow-wrap:anywhere}
  .tbl th:first-child,.tbl td:first-child{width:18%}
}
@media(max-width:420px){
  .mode-grid{grid-template-columns:1fr;gap:9px}
  .mode-card{padding:14px}
}
@media(max-width:380px){
  .modes .panel{padding-inline:10px}
  .tbl-wrap{padding:4px}
  .tbl{font-size:8px}
  .tbl th,.tbl td{padding:6px 1px}
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
  const reviewsTrackRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const statementRef = useRef(null);
  const [statementVisible, setStatementVisible] = useState(false);

  useEffect(() => {
    const node = statementRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      const timer = window.setTimeout(() => setStatementVisible(true), 0);
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatementVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setQuoteIndex((index) => (index + 1) % sleepQuotes.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home" id="top">
      <style>{css}</style>

      {/* 1. Hero */}
      <section className="sec hero" id="about">
        <video
          className="media-fill hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Skye hero video"
        />
        <p className="hero-text">SLEEP OR SCROLL</p>
      </section>

      {/* 2. Statement */}
      <section ref={statementRef} className={`sec center statement${statementVisible ? " is-visible" : ""}`}>
        <h2>
          SKYE IS MADE <span className="preposition" aria-label="by or for"><span>BY</span><span>FOR</span></span> PEOPLE WHO SCROLL WHEN
          THEY SHOULD BE SLEEPING.
        </h2>
        <div className="press">
          <a
            href="https://www.thehindu.com/life-and-style/this-simple-timer-device-is-changing-the-way-people-manage-focus-and-time/article70028603.ece"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Skye's feature in The Hindu"
          >
            <b>THE HINDU</b>
          </a>
          <span>AS SEEN IN THE HINDU</span>
        </div>
      </section>

      {/* 3. Video + quote */}
      <section className="sec video-sec" id="research">
        <div className="stage">
          <LazyVideo
            className="media-fill stage-video"
            src={storyVideo}
            label="People who do great things know sleep is part of the work"
          />
        </div>
        <div className="quote">
          <div className="quote-content" key={quoteIndex}>
            <p>“{sleepQuotes[quoteIndex].text}”</p>
            <b>{sleepQuotes[quoteIndex].author}</b>
          </div>
        </div>
      </section>

      {/* 4. Products */}
      <section className="sec products" id="shop">
        <div className="products-head">
          <p className="products-kicker">Choose your Skye</p>
          <h2>Same calm. Your finish.</h2>
          <p className="products-sub">A screen-free sleep ritual, available in two finishes.</p>
          <p className="products-swipe">Swipe to choose →</p>
        </div>
        <div className="product-grid">
          <article className="prod">
            <Link className="prod-link" to="/products/silver" aria-label="Explore silver Skye">
              <div className="prod-visual">
                <img src={silverImage} alt="Silver Skye breathing device" />
                <span className="prod-tag">Silver edition</span>
              </div>
              <div className="prod-copy">
                <div className="prod-copy-text">
                  <h3>Skye Silver</h3>
                  <p>Clean, minimal and quietly refined.</p>
                  <span className="prod-price">₹3,490 · Free shipping</span>
                </div>
                <span className="prod-cta" aria-hidden="true">→</span>
              </div>
            </Link>
          </article>
          <article className="prod">
            <Link className="prod-link" to="/products/red" aria-label="Explore red Skye">
              <div className="prod-visual">
                <img src={redImage} alt="Red Skye breathing device" />
                <span className="prod-tag">Red edition</span>
              </div>
              <div className="prod-copy">
                <div className="prod-copy-text">
                  <h3>Skye Red</h3>
                  <p>Bold, warm and made to stand out.</p>
                  <span className="prod-price">₹3,990 · Free shipping</span>
                </div>
                <span className="prod-cta" aria-hidden="true">→</span>
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* 5. Can't stop scrolling */}
      <section className="sec split scrolling-section">
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
          <LazyVideo
            className="media-fill"
            src={modesVideo}
            label="Skye four breathing modes"
          />
        </div>
        <div className="panel">
          <h2>4 MODES TO CHOOSE FROM.</h2>
          <p>
            Everyone breathes differently. Our four modes let you find a
            breathing pace that feels comfortable for your body, helping you
            breathe without strain, relax your mind, and ease into sleep.
          </p>
          <div className="mode-grid" aria-label="Breathing modes">
            {modes.map(([name, inhale, holdIn, exhale, holdOut, duration]) => (
              <article className="mode-card" key={name}>
                <div className="mode-card-head"><strong>{name}</strong><span className="mode-duration">{duration}</span></div>
                <div className="mode-flow">
                  {[['Inhale', inhale], ['Hold', holdIn], ['Exhale', exhale], ['Hold', holdOut]].map(([label, value]) => (
                    <div className="mode-step" key={`${name}-${label}-${value}`}><small>{label}</small><b>{value}</b></div>
                  ))}
                </div>
              </article>
            ))}
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
            <div key={i} className={`step ${s.title === "Hold" ? "hold" : s.title === "Breathe in" ? "breathe-in" : "breathe-out"}`}>
              <span className="ic">{s.icon}</span>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="youtube-feature" aria-labelledby="youtube-feature-title">
        <h2 id="youtube-feature-title">See Skye <span>in action.</span></h2>
        <div className="youtube-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/aJzTVTZUWzM"
            title="Skye Devices video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="sec reviews" id="corporate">
        <h2>
          THE <span>HYPE</span> IS REAL
        </h2>
        <p className="sub">From our 1000+ users</p>
        <div className="reviews-track-wrap">
          <button className="review-arrow review-arrow-left" type="button" aria-label="Previous testimonial" onClick={() => reviewsTrackRef.current?.scrollBy({ left: -320, behavior: "smooth" })}>‹</button>
          <div className="track" ref={reviewsTrackRef}>
          {reviews.map((r, i) => (
            <article className="card" key={i}>
              <div className="stars">★★★★★</div>
              {r.title && <h3>{r.title}</h3>}
              {r.text && <p>{r.text}</p>}
              {r.name && <small>{r.name}</small>}
            </article>
          ))}
          </div>
          <button className="review-arrow review-arrow-right" type="button" aria-label="Next testimonial" onClick={() => reviewsTrackRef.current?.scrollBy({ left: 320, behavior: "smooth" })}>›</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
