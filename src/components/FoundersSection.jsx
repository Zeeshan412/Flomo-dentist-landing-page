import React from "react";
import { doctor1, doctor2, liine } from "../assets";
import aboutData from "../data/aboutData.json";

const FoundersSection = () => {
  const { founders } = aboutData.aboutUs;

  return (
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
                className="w-full h-auto invert-[0.5] hue-rotate-[164deg] contrast-90 opacity-100 border border-solid"
                style={{
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
                className="w-full h-auto invert-[0.5] hue-rotate-[164deg] contrast-90 opacity-100 border border-solid"
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)",
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
              <div
                key={founder.id}
                className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl rounded-b-xl"
              >
                <div className="h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden">
                  <img
                    src={founderImage}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-1 sm:mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                    {founder.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
