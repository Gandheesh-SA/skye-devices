import { useState } from "react";
import Footer from "../components/Footer";
import ProductDetails from "../sub-section/ProductDetail"
import ProductAccordion from "../sub-section/ProductMISC"
import bannerImg from "../images/shop/Banner.png"
import HowToUse from "../sub-section/HowToUse"
import Testimonials from "../sub-section/Testimonials";
import Science from "../sub-section/ScienceBehind"
import Team from "../sub-section/team"

export default function ShopPage() {
 
  return (
  <>
     <ProductDetails />
     <ProductAccordion />
     <div style={{ width: "100%", lineHeight: 0 }}>
  <img
    src={bannerImg}
    alt="Minimal & Modern Scandinavian-inspired design"
    style={{ width: "100%", display: "block", objectFit: "cover" }}
  />
</div>
<HowToUse />
 <Testimonials /> 
 <Science />
 <Team />
 <Footer />
  </>
  );
}