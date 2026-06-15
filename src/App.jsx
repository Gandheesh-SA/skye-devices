import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import CorporatePage from "./pages/CorporatePage";
import FAQPage from "./pages/FAQ";
import ShopPage from "./pages/ShopPage";
import TermsPage from "./pages/TC";
import PrivacyPolicy from "./pages/PP"
import Shipping from "./pages/Shipping"
import Refund from "./pages/Refund"
import Warranty from "./pages/Warranty"

function App() {
  return (
    <Router>
      
  <ScrollToTop />
      <Navbar />

      <main className="mt-[clamp(90px,10vh,140px)]">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/terms_and_conditions" element={<TermsPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;