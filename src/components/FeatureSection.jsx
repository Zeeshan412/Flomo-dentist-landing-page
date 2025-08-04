import React from "react";
import FeatureCard from "./FeatureCard";
import FigmaCard from "./FigmaCard";
import { pencil, search, vector, hiipa, page, group } from "../assets";

const FeatureSection = () => {
  return (
    <section
      id="feature-section"
      className="py-8 sm:py-10 md:py-12 lg:py-16 w-full relative bg-blue-white-gradient"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="features-heading-container relative mx-auto mb-6 sm:mb-8 w-[160px] sm:w-[180px] md:w-[220px] h-[16px] sm:h-[18px] md:h-[21px]">
          <h2 className="text-center uppercase absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl lg:text-[44px] font-bold text-[#072B73] font-sen leading-none">
            Features
          </h2>
        </div>

        <p className="text-center mx-auto mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1E84B5] font-sen leading-tight w-full max-w-[1050px]">
          Reduce stress by keeping your entire team aligned, trained, and on the same page.
        </p>

        <p className="text-center mx-auto text-xs sm:text-sm md:text-base font-bold text-[#527282] font-sen leading-normal w-full max-w-[996px] mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4">
          Flomo is a centralized hub for all your workflows, policies, procedures, and systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-4 sm:mt-8 md:mt-12 lg:mt-16">
          {/* Feature cards with consistent sizing */}
          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="Step-by-Step SOP br Creator" icon={page} />
            </div>
          </div>

          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="Smart Search Across All SOPS" icon={search} />
            </div>
          </div>

          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="Global Search br And Replace" icon={pencil} />
            </div>
          </div>

          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="Role-Based br Onboarding" icon={group} />
            </div>
          </div>

          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="Virtual Assistantship br Setup" icon={vector} />
            </div>
          </div>

          <div className="flex justify-center h-auto">
            <div className="w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px]">
              <FigmaCard title="HIPAA-Compliant & br Secure" icon={hiipa} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
