import React from "react";
import FigmaCard from "./FigmaCard";
import boltIcon from "../assets/bolt.svg";
import hiipa2Icon from "../assets/hiipa 2.svg";
import heartIcon from "../assets/heart.svg";
import teethIcon from "../assets/teeth.svg";

const DifferentSection = () => {
  // Sample data for the cards based on the Figma design with their respective icons
  const cardData = [
    {
      title: "Built by Dentists, for Dentists",
      description: "We've lived the chaos of running a practice. Flomo isn't just another SaaS tool—it's designed by people who actually understand what it's like to lead a dental team through staffing gaps, rapid growth, and daily unpredictability.",
      icon: teethIcon
    },
    {
      title: "HIPAA First, Always",
      description: "Your patient data isn't an afterthought—it's sacred. Flomo is built with HIPAA compliance at its core, so you can trust your systems are protected from day one.Security and compliance aren't afterthoughts - they're built into every feature from day.",
      icon: hiipa2Icon
    },
    {
      title: "We Send Help, Not Just Software",
      description: "You don't need more tech headaches. We provide a dedicated onboarding specialist or virtual assistant (optional add-on) to help you build your SOPs and get your team up and running fast.Get dedicated support from our team of dental workow",
      icon: heartIcon
    },
    {
      title: "Quick-Swap Technology",
      description: "Things change fast in a growing practice. Our unique Search & Replace tool lets you update anesthetics, policies or former employee names in one spot—and instantly apply those changes across your entire system.",
      icon: boltIcon
    }
  ];

  return (
    <section 
      className="w-full relative py-16 md:py-24"
      style={{
        background: "linear-gradient(105.22deg, #04215C -0.01%, #144AB7 106.26%)",
        minHeight: "794px",
      }}
    >
      <div className="container mx-auto px-4 relative">
        {/* Star decoration elements */}
        <div className="absolute top-20 left-10 opacity-30 hidden md:block">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L15.09 8.91L24 12L15.09 15.09L12 24L8.91 15.09L0 12L8.91 8.91L12 0Z" />
          </svg>
        </div>
        
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Flomo?
          </h2>
          
          {/* Line below the heading with gradient border and blur effect */}
          <div className="flex justify-center mb-6 md:mb-8 relative">
            <div 
              className="hidden md:block"
              style={{
                width: "866px",
                height: "0px",
                maxWidth: "100%",
                margin: "0 auto",
                position: "relative",
                border: "1px solid",
                borderImageSource: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
                borderImageSlice: "1",
                opacity: 1,
                backdropFilter: "blur(150)",
                WebkitBackdropFilter: "blur(150)"
              }}
            ></div>
            {/* Mobile version of line with shorter width */}
            <div 
              className="md:hidden block"
              style={{
                width: "250px",
                height: "0px",
                maxWidth: "80%",
                margin: "0 auto",
                position: "relative",
                border: "1px solid",
                borderImageSource: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
                borderImageSlice: "1",
                opacity: 1,
                backdropFilter: "blur(150)",
                WebkitBackdropFilter: "blur(150)"
              }}
            ></div>
          </div>
        </div>
        
        {/* Grid of FigmaCards with responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 gap-y-8 md:gap-y-16 max-w-7xl mx-auto mt-8 md:mt-16">
          {cardData.map((card, index) => (
            <div key={index} className="relative flex justify-center">
              <div 
                style={{
                  width: "626px",
                  height: "auto",
                  minHeight: "180px",
                  maxWidth: "100%",
                  position: "relative",
                  opacity: 1,
                  borderRadius: "30px",
                }}
                className="md:h-[212px]"
              >
                <FigmaCard 
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  transparentBg={true}
                  hideArrow={true}
                  customStyle={{
                    borderRadius: "20px",
                    height: "100%",
                    padding: "20px",
                    backdropFilter: "blur(150)",
                    WebkitBackdropFilter: "blur(150)",
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#fff",
                    "@media (min-width: 768px)": {
                      borderRadius: "30px",
                      padding: "30px"
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;