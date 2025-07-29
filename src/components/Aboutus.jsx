import React from "react";
import aboutImage from "../assets/aboutus.jpg"; // replace with your actual image file

const About = () => {
  return (
    <section className="w-full py-20 px-6 md:px-24 bg-gray-50" id="about">
      {/* Section Heading */}
      <div className="text-center mb-16">
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#00214d] mt-2">
          Get to Know About Us Better
        </h2>
      </div>

      {/* Image + Text Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={aboutImage}
            alt="About Dentist"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-3xl font-bold text-[#00214d] mb-4">
            We Care About Your Smile
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Flomo Dental Clinic, we are passionate about giving you the best dental experience. With our state-of-the-art technology and compassionate team, your oral health is in safe hands.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
