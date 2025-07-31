import React from "react";
import LadyGagaIcon from "../assets/ladygaga.svg";
import ProblemSolutionIcon from "../assets/Problem & Solution.svg";
import Star from "../assets/star.svg";
import Warning from "../assets/warning.svg";

const StruggleCard = ({ title, description }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-[17px] border border-gray-200 p-6 w-[527px] h-[90px] flex items-center mb-4">
      <div className="text-left">
        <h3 className="text-lg font-semibold text-[#04215C]">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          {/* Star indent and Problem & Solution SVG in the same line */}
          <div className="flex items-center justify-center mb-4">
            <img 
              src={Star} 
              alt="Star" 
              className="w-[12px] h-[12px] mr-2"
              style={{ filter: "invert(32%) sepia(96%) saturate(1352%) hue-rotate(203deg) brightness(97%) contrast(98%)" }}
            />
            <div 
              className="w-[197px] h-[21px] text-center"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '21px',
                letterSpacing: '2.8px',
                textTransform: 'uppercase',
              }}
            >
              <img 
                src={ProblemSolutionIcon} 
                alt="Problem & Solution" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Heading directly below the Problem & Solution SVG */}
          <div className="w-[420px] text-center">
            <h2 
              className="text-[44px] font-bold text-[#04215C] whitespace-nowrap"
              style={{ 
                fontFamily: 'Poppins',
                lineHeight: '53px'
              }}
            >
              The struggle is real
            </h2>
            <p className="text-gray-600 text-sm mt-3" style={{ fontFamily: 'Inter' }}>
              Running a practice shouldn’t mean running on fumes
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Common practice pain points heading and 4 cards */}
          <div className="w-full md:w-auto mb-10 md:mb-0">
            {/* Common practice pain points heading with warning icon aligned with cards */}
            <div className="ml-0 mb-6">
              <div 
                className="flex items-center"
                style={{ marginLeft: '0px', paddingLeft: '0px' }}
              >
                <img 
                  src={Warning} 
                  alt="Warning" 
                  className="w-[32px] h-[32px] mr-3 relative top-[3px]"
                />
                <div className="w-[373px] h-[39px]">
                  <h3 
                    className="text-[26px] font-bold"
                    style={{ 
                      fontFamily: 'Sen', 
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#04215C'
                    }}
                  >
                    Common practice pain points
                  </h3>
                </div>
              </div>
            </div>
            
            {cards.map((card, index) => (
              <StruggleCard 
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Right side - LadyGaga SVG image */}
          <div className="w-full md:w-auto flex justify-center">
            <img 
              src={LadyGagaIcon} 
              alt="Dental Practice Challenges" 
              className="h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StruggleSection;