import React from "react";
import { ladygaga, problemSolution, star, warning } from "../assets";

const StruggleCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-[17px] border border-gray-200 p-4 sm:p-6 w-full sm:w-[80%] md:w-[527px] h-auto min-h-[70px] sm:min-h-[90px] flex items-center mb-3 sm:mb-4">
      <div className="text-left">
        <h3 className="text-base sm:text-lg font-semibold text-blue-900">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

const StruggleSection = () => {
  // Create card data
  const cards = [
    {
      title: "Daily Chaos",
      description: "Communication breakdowns with your staff cause frustration and wasted time."
    },
    {
      title: "Team Turnover",
      description: "Constant retraining, inconsistent care, and patient frustration due to staff changes."
    },
    {
      title: "Inefficient Training",
      description: "New staff take too long to reach full productivity, affecting practice performance."
    },
    {
      title: "Inconsistent Patient Care",
      description: "Different team members provide varying levels of service quality to patients."
    }
  ];

  return (
    <section id="struggle-section" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6 sm:mb-10 md:mb-16">
          {/* Star indent and Problem & Solution SVG in the same line */}
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <img 
              src={star} 
              alt="Star" 
              className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] mr-2 filter-blue"
            />
            <div 
              className="w-[150px] sm:w-[197px] h-[18px] sm:h-[21px] text-center font-poppins font-medium text-xs sm:text-sm leading-[18px] sm:leading-[21px] tracking-[2.8px] uppercase"
            >
              <img 
                src={problemSolution} 
                alt="Problem & Solution" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Heading directly below the Problem & Solution SVG */}
          <div className="w-full sm:w-[320px] md:w-[420px] text-center">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-blue-900 whitespace-normal sm:whitespace-nowrap font-poppins leading-tight sm:leading-snug"
            >
              The struggle is real
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3 font-poppins">
              You're not alone. These challenges plague practices across the country.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Left side - Common practice pain points heading and 4 cards */}
          <div className="w-full md:w-[550px] flex-shrink-0 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            {/* Common practice pain points heading with warning icon aligned with cards */}
            <div className="mb-4 sm:mb-6 w-full sm:w-[80%] md:w-auto">
              <div className="flex items-center">
                <img 
                  src={warning} 
                  alt="Warning" 
                  className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] mr-2 sm:mr-3 relative top-[2px] sm:top-[3px]"
                />
                <div>
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold font-sen leading-[140%] text-blue-900"
                  >
                    Common practice pain points.
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start w-full">
              {cards.map((card, index) => (
                <StruggleCard 
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          {/* Right side - LadyGaga SVG image with matching container size */}
          <div className="w-full sm:w-[90%] md:w-[550px] flex-shrink-0 flex justify-center items-start" style={{ height: "auto", minHeight: "580px" }}>
            <img 
              src={ladygaga} 
              alt="Dental Practice Challenges" 
              className="w-full h-auto max-w-full sm:max-w-[450px] md:max-w-full rounded-2xl"
              style={{ 
                minHeight: "540px",
                height: "540px",
                objectFit: "cover",
                objectPosition: "top"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StruggleSection;