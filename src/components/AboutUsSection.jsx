import React from "react";
import { doctors, doctor1, doctor2, liine, blueArrow } from "../assets";
import aboutData from "../data/aboutData.json";

const AboutUsSection = () => {
  const { mainParagraphs, founders } = aboutData.aboutUs;
  
  return (
    <>
      {/* About Us Section */}
      <section id="about-us-section" className="w-full bg-gradient-to-b from-blue-50 to-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4">
              About Us
            </h2>
            
            {/* Line below the heading using liine.svg */}
            <div className="flex justify-center mb-8 relative">
              <div className="hidden md:block w-[866px] max-w-full mx-auto relative">
                <img 
                  src={liine} 
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
                  src={liine} 
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

          {/* New content layout - Two columns */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-hidden">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Map through paragraphs from JSON with dangerouslySetInnerHTML to render HTML tags */}
              {mainParagraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
            
            {/* Right side image */}
            <div className="w-full md:w-1/2 flex items-start justify-center">
              <div className="rounded-2xl overflow-hidden w-full max-w-full sm:max-w-[450px] md:max-w-full" style={{ maxHeight: "calc(100%)" }}>
                <img 
                  src={doctors} 
                  alt="Dental professionals using Flomo" 
                  className="w-full h-auto object-contain md:object-cover rounded-lg"
                  style={{ maxHeight: "520px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4">
              Meet Our Founders
            </h2>
            
            {/* Line below the heading using liine.svg */}
            <div className="flex justify-center mb-8 relative">
              <div className="hidden md:block w-[866px] max-w-full mx-auto relative">
                <img 
                  src={liine} 
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
                  src={liine} 
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
          
          {/* Founders Container */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-xs sm:max-w-md md:max-w-5xl mx-auto">
            {/* Map through founders from JSON */}
            {founders.map((founder) => {
              // Dynamically select the image based on the image property in JSON
              const founderImage = founder.image === "doctor1" ? doctor1 : doctor2;
              
              return (
                <div key={founder.id} className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl rounded-b-xl">
                  <div className="h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden">
                    <img 
                      src={founderImage} 
                      alt={founder.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{founder.name}</h3>
                    <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">{founder.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section 
        className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center h-auto min-h-[250px] md:min-h-[359px]"
        style={{ background: "linear-gradient(105.22deg, #04215C -0.01%, #144AB7 106.26%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 font-sen">
              Ready to transform your <br className="hidden sm:block"/>
              practice?
            </h2>
            <p className="text-white text-lg mb-3 sm:mb-4 max-w-3xl mx-auto">
              
            </p>
            <div className="mt-[-10px] sm:mt-[-15px]">
              <button
                className="bg-white w-[120px] sm:w-[140px] md:w-[159px] h-[36px] sm:h-[40px] md:h-[48px] justify-center inline-flex items-center text-[#072B73] px-2 sm:px-3 md:px-4 rounded-full gap-x-[6px] sm:gap-x-[8px] md:gap-x-[10px] hover:opacity-90 transition-all whitespace-nowrap text-xs sm:text-sm md:text-base"
              >
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
    </>
  );
};

export default AboutUsSection;