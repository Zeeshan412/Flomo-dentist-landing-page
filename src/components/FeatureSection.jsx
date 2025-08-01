import React from "react";
import FigmaCard from "./FigmaCard";

// Import SVG icons
import pencilIcon from "../assets/pencil.svg";
import searchIcon from "../assets/search.svg";
import vectorIcon from "../assets/Vector.svg";
import hiipaIcon from "../assets/hiipa.svg";
import pageIcon from "../assets/page.svg";
import groupIcon from "../assets/Group.svg";

const FeatureSection = () => {
  return (
    <section 
      id="feature-section"
      className="py-12 sm:py-14 md:py-16 w-full relative"
      style={{
        background: "linear-gradient(95deg, #C8E2FA -5.43%, #FFFFFF 109.37%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="features-heading-container relative mx-auto"
          style={{
            width: "220px",
            height: "21px",
            marginBottom: "30px"
          }}
        >
          <h2 
            className="text-center uppercase absolute left-1/2 transform -translate-x-1/2"
            style={{
              width: "220px",
              height: "21px",
              fontFamily: "Sen, sans-serif",
              fontWeight: "700",
              fontSize: "44px",
              lineHeight: "21px",
              letterSpacing: "0px",
              opacity: "1",
              color: "#072B73",
            }}
          >
            Features
          </h2>
        </div>
        
        <p 
          className="text-center mx-auto mb-2"
          style={{
            fontFamily: "Sen",
            fontWeight: "700",
            fontStyle: "Bold",
            fontSize: "24px",
            lineHeight: "1.3",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#1E84B5",
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto 10px",
          }}
        >
          Reduce stress by keeping your entire team aligned, trained, and on the same page.
        </p>
        
        <p 
          className="text-center mx-auto"
          style={{
            fontFamily: "Sen",
            fontWeight: "700",
            fontStyle: "Bold",
            fontSize: "16px",
            lineHeight: "1.5",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#527282",
            width: "100%",
            maxWidth: "996px",
            margin: "0 auto 80px",
            padding: "0 15px"
          }}
        >
          Flomo is a centralized hub for all your workflows, policies, procedures, and systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16">
          {/* Feature cards with consistent sizing */}
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="Step-by-Step SOP br Creator" 
                icon={pageIcon}
              />
            </div>
          </div>
          
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="Smart Search Across All SOPS" 
                icon={searchIcon}
              />
            </div>
          </div>
          
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="Global Search br And Replace" 
                icon={pencilIcon}
              />
            </div>
          </div>
          
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="Role-Based br Onboarding" 
                icon={groupIcon}
              />
            </div>
          </div>
          
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="Virtual Assistantship br Setup" 
                icon={vectorIcon}
              />
            </div>
          </div>
          
          <div className="flex justify-center h-auto">
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
              <FigmaCard 
                title="HIPAA-Compliant & br Secure" 
                icon={hiipaIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;