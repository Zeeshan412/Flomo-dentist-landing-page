import React from "react";
import FigmaCard from "./FigmaCard";
import boltIcon from "../assets/bolt.svg";
import hiipa2Icon from "../assets/hiipa 2.svg";
import heartIcon from "../assets/heart.svg";
import teethIcon from "../assets/teeth.svg";
import liineImg from "../assets/liine.svg";

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
      className="w-full relative py-8 sm:py-12 md:py-16 lg:py-24 min-h-auto md:min-h-[600px] lg:min-h-[794px]"
      style={{ background: "linear-gradient(105.22deg, #04215C -0.01%, #144AB7 106.26%)" }}
    >
      <div className="container mx-auto px-4 relative">
        {/* Star decoration elements */}
        <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-10 opacity-30 hidden md:block">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="sm:w-50 sm:h-50 md:w-60 md:h-60">
            <path d="M12 0L15.09 8.91L24 12L15.09 15.09L12 24L8.91 15.09L0 12L8.91 8.91L12 0Z" />
          </svg>
        </div>
        
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-32">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-sen">
            Why Choose Flomo?
          </h2>
          
          {/* Line below the heading using liine.svg */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 relative">
            <div className="hidden md:block w-[866px] max-w-full mx-auto relative">
              <img 
                src={liineImg} 
                alt="Decorative line" 
                className="w-full h-auto"
                style={{
                  filter: "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(164deg) brightness(90%) contrast(90%)",
                  opacity: 1,
                  border: "1px solid",
                  borderImageSource: "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)"
                }}
              />
            </div>
            {/* Mobile version of line with shorter width */}
            <div className="md:hidden block w-[250px] max-w-[80%] mx-auto relative">
              <img 
                src={liineImg} 
                alt="Decorative line" 
                className="w-full h-auto"
                style={{
                  filter: "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(164deg) brightness(90%) contrast(90%)",
                  opacity: 1,
                  border: "1px solid",
                  borderImageSource: "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Grid of FigmaCards with responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 gap-y-6 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 max-w-7xl mx-auto mt-4 sm:mt-8 md:mt-16">
          {cardData.map((card, index) => (
            <div key={index} className="relative flex justify-center">
              <div 
                className="w-full h-auto min-h-[160px] sm:min-h-[170px] md:min-h-[180px] lg:min-h-[212px] max-w-[450px] md:max-w-[550px] lg:max-w-[626px] relative rounded-[15px] sm:rounded-[20px] md:rounded-[30px]"
              >
                <FigmaCard 
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  transparentBg={true}
                  hideArrow={true}
                  className="rounded-[15px] sm:rounded-[20px] md:rounded-[30px] p-[15px] sm:p-[20px] md:p-[30px] backdrop-blur bg-white/15 border border-white/30 text-white"
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