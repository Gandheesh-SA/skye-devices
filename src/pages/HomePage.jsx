import React from "react";
import Hero from "../sub-section/Hero";

import Modes from "../sub-section/DeviceMode";
import Press from "../sub-section/Press";
import Founders from "../sub-section/Founder";
import Features from "../sub-section/Features";
import Testimonials from "../sub-section/Testimonials";
import Gift from "../sub-section/Gift";
import Footer from "../components/Footer";
import Corporates from "../sub-section/Corporate";
import Breathing from "../sub-section/Breathing";
import Use from "../sub-section/Use";
import Mode from "../sub-section/Modes"
import Science from "../sub-section/Science"
import Feature from "../sub-section/Features"
const HomePage = () => {
  return (
    <>
      <Hero />
      
      <section id="how_it_works">
         <Science />
    <Feature />
      <Mode />
      <Use />
      <Breathing />
      </section>
      <Founders />
      <Press />
      <Corporates />
       <Testimonials /> 
      <Gift />
      <Footer />
    </>
  );
};

export default HomePage;