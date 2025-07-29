import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-[#f7fafe]">
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00214d] leading-tight">
          Smile Brighter <br /> With <span className="text-blue-600">Flomo Dentistry</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Gentle, friendly dental care you and your family can trust.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0 md:ml-10 max-w-md">
        <img
          src={heroImg}
          alt="Dentist smiling"
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
