import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import FAQPage from "./pages/FAQ";
import ShopPage from "./pages/ShopPage";
import Products from "./pages/Products";
import { Navigate } from "react-router-dom";
import TermsPage from "./pages/TC";
import PrivacyPolicy from "./pages/PP"
import Shipping from "./pages/Shipping"
import Refund from "./pages/Refund"
import Warranty from "./pages/Warranty"
import AdminPage from "./pages/AdminPage"
import CheckoutPage from "./pages/CheckoutPage"
import SimilarPage from "./pages/SimilarPage"

function AppContent() {
  const location = useLocation();
  const isUpdatedPage = ["/", "/shop", "/products"].includes(location.pathname) || location.pathname.startsWith("/products/") || location.pathname.startsWith("/shop/");
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar key={location.pathname} variant={location.pathname === "/" ? "dark" : "light"} home={location.pathname === "/"} />}

      <main key={location.pathname} className={`page-transition${location.pathname === "/" ? "" : " page-content"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/similar-idea" element={<SimilarPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/products" element={<Navigate to="/shop" replace />} />
          <Route path="/products/:productId" element={<Products key={location.pathname} />} />
          <Route path="/shop/:productId" element={<Products key={location.pathname} />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/terms_and_conditions" element={<TermsPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
