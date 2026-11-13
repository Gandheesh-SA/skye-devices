import Footer from "../components/Footer";
import teamImage from "../images/team.png";

const paragraphs = [
  `For most of us, the products we use every day are easy to take for granted. We pick them up, use them, put them away and move on. But there's a lot that goes into making something feel just right. The way it looks, the way it feels in your hand, how it works and how easily it fits into your routine.`,
  `That's what we're interested in at Skye Devices. We like making things that solve everyday problems, without adding more complexity to people's lives. We care about the details, from the first sketch to the finished product, and everything in between.`,
  `After spending several years designing and building electronic products for other businesses, we decided to start building products of our own. Our first product was Skye - Sleep or Scroll, a screen-free device that helps you fall asleep by guiding your breathing through gentle vibrations.`,
  `The idea came from a problem we knew quite well. Like many people, we spent far too much time on our phones, especially before bed. We wanted a simpler way to wind down, without reaching for yet another screen. That idea eventually became Skye - Sleep or Scroll.`,
  `Designed and developed by us, and manufactured with local partners right here in Chennai, Skye - Sleep or Scroll is our first product under our own name.`,
  `There's something special about making something that exists beyond a screen. Something people can hold, use and make a part of their everyday lives. Someday, we'd love to walk into a cafe, spot a stranger using something we've built, and quietly feel pretty good about it. Until then, we'll keep building.`,
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-new{background:#fff;color:#292929;font-family:'DM Sans','Inter',system-ui,sans-serif}
        .about-new *{box-sizing:border-box}
        .about-new-inner{width:min(100%,900px);margin:0 auto;padding:clamp(52px,7vw,90px) clamp(22px,6vw,90px) clamp(72px,10vw,120px)}
        .about-new-team{width:100%;display:block;aspect-ratio:529/355;object-fit:cover;object-position:center;border-radius:22px;margin-bottom:clamp(82px,10vw,130px)}
        .about-new-copy{max-width:610px}
        .about-new h1{margin:0 0 clamp(28px,4vw,42px);font-size:clamp(21px,2.2vw,30px);font-weight:800;line-height:1.15;letter-spacing:-.035em;text-transform:uppercase}
        .about-new h1 .red{color:var(--accent)}
        .about-new p{margin:0 0 22px;font-size:clamp(13px,1.15vw,16px);line-height:1.52;color:#333}
        @media(max-width:600px){
          .about-new-inner{padding-top:34px}
          .about-new-team{border-radius:16px;margin-bottom:70px}
          .about-new h1{font-size:clamp(20px,6vw,26px);margin-bottom:30px}
          .about-new p{line-height:1.6;margin-bottom:20px}
        }
      `}</style>
      <section className="about-new">
        <div className="about-new-inner">
          <img className="about-new-team" src={teamImage} alt="The Skye Devices team" />
          <div className="about-new-copy">
            <h1>
              <span className="red">Building</span> Things People Use <span className="red">Every Day.</span>
            </h1>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
