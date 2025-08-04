import React from "react";
import { heroLaptop, star, shadow, laptopBg, logo } from "../assets";
import Cbutton from "./Cbutton";

const Hero = () => {
  return (
    <section className="max-w-[100%] min-h-[793px] pt-36 sm:pt-40 bg-gradient-to-br from-[#04215C] to-[#144AB7] relative overflow-hidden">
      {/* Star - made responsive with relative positioning */}
      <img
        src={star}
        alt="Star"
        className="absolute w-[83px] h-[83px] top-[150px] right-[20%] md:right-[30%] lg:left-[816.9px] lg:right-auto hidden sm:block"
      />
      <img
        src={star}
        alt="Star 2"
        className="absolute w-[60px] h-[60px] top-[230px] left-[10.9px] opacity-50 hidden sm:block"
      />

      {/* Main content container - centered for all screens */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Text Block - increased spacing from top */}
        <div className="z-10 text-white max-w-xl space-y-10 mb-20 lg:mb-0 mt-20 lg:mt-28 text-center lg:text-left">
          <h1 className="text-[40px] md:text-[50px] lg:text-[59px] leading-tight lg:leading-[64.8px] font-bold font-['Sen']">
            Helping <span className="text-[#96BFFF]">Dentists</span> <br />
            <span className="text-[#96BFFF]">Thrive</span> With Less <br /> Stress
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
            Tired of the daily chaos?<br/> Flomo helps you share your knowledge, save time, and boost team efficiency.
          </p>
          <div className="mt-12">
            <Cbutton />
          </div>
        </div>

        {/* Laptop container - adjusted vertical spacing */}
        <div className="relative w-full max-w-[520px] h-[280px] sm:h-[345px] z-10 mx-auto lg:mx-0 flex items-center justify-center mt-8 lg:mt-28">
          <div className="relative">
            {/* Laptop Image */}
            <img
              src={heroLaptop}
              alt="Hero Laptop"
              className="w-full h-full object-contain relative z-10"
            />

            {/* Laptop Screen Content */}
            <div className="absolute top-[4.3%] left-[5.9%] w-[87.5%] h-[84.5%] z-20 flex items-center justify-center bg-white overflow-hidden rounded-lg">
              {/* White BG Image */}
              <img
                src={laptopBg}
                alt="Laptop Screen"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Centered Logo */}
              <img
                src={logo}
                alt="Logo"
                className="relative z-10 w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-auto object-contain"
              />
            </div>

            {/* Shadow - positioned directly under laptop */}
            <img
              src={shadow}
              alt="Laptop Shadow"
              className="absolute w-[100%] max-w-[620px] h-auto -bottom-10 left-1/2 transform -translate-x-1/2 z-[5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;