import React from "react";
import doctorsImg from "../assets/doctors.svg";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            About Us
          </h2>
          
          {/* Line below the heading with gradient border and blur effect - gray version */}
          <div className="flex justify-center mb-8 relative">
            <div 
              className="hidden md:block"
              style={{
                width: "866px",
                height: "0px",
                maxWidth: "100%",
                margin: "0 auto",
                position: "relative",
                border: "1px solid",
                borderImageSource: "linear-gradient(90deg, rgba(229, 231, 235, 0) 0%, #E5E7EB 50%, rgba(229, 231, 235, 0) 100%)",
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
                borderImageSource: "linear-gradient(90deg, rgba(229, 231, 235, 0) 0%, #E5E7EB 50%, rgba(229, 231, 235, 0) 100%)",
                borderImageSlice: "1",
                opacity: 1,
                backdropFilter: "blur(150)",
                WebkitBackdropFilter: "blur(150)"
              }}
            ></div>
          </div>
        </div>

        {/* New content layout - Two columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 overflow-hidden">
          {/* Left side content */}
          <div className="w-full md:w-1/2 flex flex-col">
            
            <p className="text-gray-700 mb-6">
              Dr. Jeff Greenberg and Dr. Eric Block are full-time practicing dentists and owners of dental offices in Massachusetts. Although they originally met years ago, it wasn't until reconnecting at a dental conference in 2022 that they realized how much they had in common—not just as clinicians, but as business owners navigating the same daily frustrations.
            
              As dentists, they found themselves having the same conversations over and over: the stress of onboarding new team members, the inefficiencies of repeating instructions, and the frustration of not having clearly documented systems in place.
            
              Like many dentists, they knew the clinical side—but running the business side smoothly was another story.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="w-full md:w-1/2">
            <img 
              src={doctorsImg} 
              alt="Dental professionals using Flomo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;