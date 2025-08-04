import React from "react";
import { blueArrow } from "../assets";

const ContactSection = () => {
  return (
    <section
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center h-auto min-h-[250px] md:min-h-[359px]"
      style={{ background: "linear-gradient(105.22deg, #04215C -0.01%, #144AB7 106.26%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 font-sen">
            Ready to transform your <br className="hidden sm:block" />
            practice?
          </h2>
          <p className="text-white text-lg mb-3 sm:mb-4 max-w-3xl mx-auto"></p>
          <div className="mt-[-10px] sm:mt-[-15px]">
            <button className="bg-white w-[120px] sm:w-[140px] md:w-[159px] h-[36px] sm:h-[40px] md:h-[48px] justify-center inline-flex items-center text-[#072B73] px-2 sm:px-3 md:px-4 rounded-full gap-x-[6px] sm:gap-x-[8px] md:gap-x-[10px] hover:opacity-90 transition-all whitespace-nowrap text-xs sm:text-sm md:text-base">
              <span>Contact Us</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#072B73] rounded-full flex items-center justify-center shrink-0">
                <img
                  src={blueArrow}
                  alt="arrow"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 object-contain filter-blue"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
