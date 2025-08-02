import React from "react";
import BabaYaga from "../assets/babayaga.svg";
import FeatureCard from "./FeatureCard";
import Tick from "../assets/tick.svg";

const SolutionSection = () => {
  // Feature card data
  const features = [
    {
      title: "Centralize your knowledge",
      description: "Create a single source of truth for all practice protocols, procedures, and patient information."
    },
    {
      title: "Streamline communication",
      description: "Ensure everyone knows exactly what to do and how to do it, reducing confusion and errors."
    },
    {
      title: "Accelerate training",
      description: "Get new team members up to speed faster with immediate access to all practice knowledge."
    },
    {
      title: "Improve patient experience",
      description: "Deliver consistent, high-quality care that builds patient trust and loyalty."
    }
  ];

  return (
    <section id="solution-section" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="px-4 relative flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-8 md:gap-12">
        {/* Left side - BabaYaga SVG with responsive sizing */}
        <div className="w-full sm:w-[90%] md:w-[551px] flex-shrink-0 flex justify-center items-center mb-8 md:mb-0">
          {/* Wrapper div with border radius */}
          <div className="rounded-2xl overflow-hidden w-full h-auto">
            <img 
              src={BabaYaga} 
              alt="Dental practice solution" 
              className="w-full h-auto object-contain sm:object-cover rounded-2xl"
              style={{ 
                height: "634px",
                borderRadius: "1rem" /* This applies the rounded-2xl equivalent */
              }}
            />
          </div>
        </div>

        {/* Right side - Solution text content with FeatureCards */}
        <div className="w-full sm:w-[90%] md:w-[633px] flex-shrink-0 rounded-[20px] p-4 sm:p-6 md:p-8">
          <div className="h-full flex flex-col">
            <div>
              {/* New heading with tick icon */}
              <div className="flex items-center mb-4 sm:mb-6 relative">
                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] mr-2 sm:mr-3 md:mr-4 shrink-0">
                  <img 
                    src={Tick} 
                    alt="Tick" 
                    className="w-full h-full"
                  />
                </div>
                <p className="text-gray-900 font-semibold text-xl sm:text-2xl md:text-[26px] font-poppins">
                  Here's how Flomo has your back
                </p>
              </div>

              <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base font-poppins">
                Your dental team's knowledge hub that puts your expertise at everyone's fingertips.
              </p>
              
              {/* Feature cards without numbering icons */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <FeatureCard 
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;