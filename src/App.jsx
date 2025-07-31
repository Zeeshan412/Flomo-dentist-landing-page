import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import StruggleSection from "./components/StruggleSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StruggleSection />
      <Card />
    </>
  );
};

export default App;
