import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import StruggleSection from "./components/StruggleSection";
import SolutionSection from "./components/SolutionSection";
import FeatureSection from "./components/FeatureSection";
import DifferentSection from "./components/DifferentSection";
import AboutMainSection from "./components/AboutMainSection";
import FoundersSection from "./components/FoundersSection";
import ContactSection from "./components/ContactSection";
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
      <AboutMainSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
