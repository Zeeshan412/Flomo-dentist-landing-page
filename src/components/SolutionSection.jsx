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
    <section id="solution-section" className="py-16 bg-white">
      <div className="px-4 relative flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Left side - BabaYaga SVG with specified measurements */}
        <div 
          className="w-full md:w-[551px] flex-shrink-0 flex justify-center items-start"
          style={{
            height: '771px'
          }}
        >
          {/* Wrapper div with border radius */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{
              width: '551px',
              height: '771px',
            }}
          >
            <img 
              src={BabaYaga} 
              alt="Dental practice solution" 
              className="w-full h-full object-cover babayaga-image"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>

        {/* Right side - Solution text content with FeatureCards */}
        <div 
          className="w-full md:w-[633px] flex-shrink-0 rounded-[20px] p-8 feature-cards-container"
          style={{
            height: '771px',
            position: 'relative',
            border: 'none' // Making the border invisible
          }}
        >
          <div className="h-full flex flex-col">
            <div>
              {/* New heading with tick icon */}
              <div className="flex items-center mb-6 relative">
                <div 
                  style={{ 
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                    marginRight: '10px'
                  }}
                >
                  <img 
                    src={Tick} 
                    alt="Tick" 
                    className="w-full h-full"
                  />
                </div>
                <p 
                  className="text-[#1E1E2F] font-semibold mobile-text-adjust"
                  style={{ 
                    fontFamily: 'Poppins',
                    fontSize: '26px'
                  }}
                >
                  Here's how Flomo has your back
                </p>
              </div>

              <p className="text-gray-700 mb-8 mobile-subtitle-adjust" style={{ fontFamily: 'Poppins' }}>
                Your dental team's knowledge hub that puts your expertise at everyone's fingertips.
              </p>
              
              {/* Feature cards without numbering icons */}
              <div className="space-y-4">
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