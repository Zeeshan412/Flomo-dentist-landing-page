import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import StruggleSection from "./components/StruggleSection";
import SolutionSection from "./components/SolutionSection";
import FeatureSection from "./components/FeatureSection";
import DifferentSection from "./components/DifferentSection";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StruggleSection />
      <SolutionSection />
      <FeatureSection />
      <DifferentSection />
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default App;
