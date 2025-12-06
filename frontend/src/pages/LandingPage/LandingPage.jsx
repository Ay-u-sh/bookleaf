import React from "react";
import "./LandingPage.css";
import HowItWorks from "./components/HowItWorks";
import FeatureHighlights from "./components/FeatureHighlights";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
export default function LandingPage() {
  return (
    <div className="landing">
      <Hero />
      <HowItWorks />
      <FeatureHighlights />
      <Footer />
    </div>
  );
}
