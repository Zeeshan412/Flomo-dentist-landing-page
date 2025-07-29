import React from "react";

const Homepage = () => {
  return (
    <section id="home" className="bg-[#F5F9FF] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
          Helping Dentists Thrive With Less Stress
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Get more patients, grow your revenue, and spend more time doing what you love — dentistry.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#6366F1] text-white px-6 py-3 rounded-lg hover:bg-[#4F46E5] transition">
            Book a Demo
          </button>
          <button className="bg-white border border-[#6366F1] text-[#6366F1] px-6 py-3 rounded-lg hover:bg-[#EEF2FF] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
