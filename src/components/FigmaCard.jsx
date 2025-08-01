import React from "react";
import greyarrow from "../assets/greyarrow.svg";

const FigmaCard = ({ title, description, icon, className, customStyle = {}, transparentBg = false, hideArrow = false }) => {
  // Split title at "br" and create an array of lines
  const titleLines = title ? title.split("br").map(line => line.trim()) : [];
  
  // Determine text color based on customStyle
  const textColor = customStyle.color || "inherit";
  
  return (
    <div
      className={`feature-card w-full h-full relative rounded-3xl ${!transparentBg ? 'bg-white' : ''} shadow-lg flex p-4 sm:p-5 md:p-6 ${className || ""}`}
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        minHeight: "130px",
        height: "100%",
        ...customStyle
      }}
    >
      {/* Grey Arrow SVG Icon positioned responsively - only shown when hideArrow is false */}
      {!hideArrow && (
        <img
          src={greyarrow}
          alt="Arrow icon"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute rounded-xl opacity-100"
          style={{
            bottom: "15px",
            right: "15px",
            filter: textColor === "#fff" ? "brightness(0) invert(1)" : "none" // Make arrow white if text is white
          }}
        />
      )}
      
      {/* Left side - Feature icon */}
      {icon && (
        <div className="flex items-center justify-center" style={{ width: "50px", minWidth: "50px" }}>
          <img
            src={icon}
            alt={`${titleLines[0]} icon`}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            style={{
              objectFit: "contain",
              filter: textColor === "#fff" ? "brightness(0) invert(1)" : "none" // Make icon white if text is white
            }}
          />
        </div>
      )}
      
      {/* Right side - Title and description */}
      <div className={`flex-1 flex flex-col justify-center ${icon ? 'pl-4' : ''}`}>
        {titleLines.length > 0 && (
          <h3 
            className="text-base sm:text-lg md:text-xl font-semibold mobile-text-adjust text-left mb-1"
            style={{ color: textColor }}
          >
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h3>
        )}
        {description && (
          <p 
            className="text-xs sm:text-sm md:text-base mobile-subtitle-adjust"
            style={{ 
              color: textColor === "#fff" ? "rgba(255, 255, 255, 0.8)" : "text-gray-600" 
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default FigmaCard;