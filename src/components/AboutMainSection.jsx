import React from "react";
import { doctors, liine } from "../assets";
import aboutData from "../data/aboutData.json";

const AboutMainSection = () => {
  const { mainParagraphs } = aboutData.aboutUs;

  return (
    <section
      id="about-us-section"
      className="w-full bg-gradient-to-b from-blue-50 to-white py-8 sm:py-10 md:py-12 lg:py-16"
    >
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
                  filter:
                    "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(164deg) brightness(90%) contrast(90%)",
                  opacity: 1,
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)",
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
                  filter:
                    "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(164deg) brightness(90%) contrast(90%)",
                  opacity: 1,
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)",
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
            <div
              className="rounded-2xl overflow-hidden w-full max-w-full sm:max-w-[450px] md:max-w-full"
              style={{ maxHeight: "calc(100%)" }}
            >
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
  );
};

export default AboutMainSection;
