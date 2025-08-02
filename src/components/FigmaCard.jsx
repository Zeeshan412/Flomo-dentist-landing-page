import React from "react";
import greyarrow from "../assets/greyarrow.svg";

const FigmaCard = ({ title, description, icon, className, customStyle = {}, transparentBg = false, hideArrow = false }) => {
  // Split title at "br" and create an array of lines
  const titleLines = title ? title.split("br").map(line => line.trim()) : [];
  
  // Convert custom style props to Tailwind classes
  let cardClasses = `w-full h-full relative rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg flex p-3 sm:p-4 md:p-6 min-h-[110px] sm:min-h-[120px] md:min-h-[130px]`;
  
  // Add background color classes
  if (!transparentBg) {
    if (customStyle.backgroundColor === "#072B73") {
      cardClasses += " bg-blue-900";
    } else if (customStyle.backgroundColor === "#144AB7") {
      cardClasses += " bg-blue-700";
    } else if (customStyle.backgroundColor && customStyle.backgroundColor.includes("linear-gradient")) {
      cardClasses += " bg-blue-gradient";
    } else {
      cardClasses += " bg-white";
    }
  }
  
  // Add text color classes
  if (customStyle.color === "#fff" || className?.includes("text-white")) {
    cardClasses += " text-white";
  }
  
  // Add any additional classes passed as props
  if (className) {
    cardClasses += ` ${className}`;
  }
  
  return (
    <div className={cardClasses}>
      {/* Grey Arrow SVG Icon positioned responsively - only shown when hideArrow is false */}
      {!hideArrow && (
        <img
          src={greyarrow}
          alt="Arrow icon"
          className="absolute top-6 right-6"
        />
      )}

      {/* Icon positioned responsively */}
      {icon && (
        <div className="flex-shrink-0 mr-4">
          <img src={icon} alt="Feature icon" className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      )}

      {/* Content container */}
      <div className="flex flex-col">
        {/* Title with line breaks */}
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
          {titleLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default FigmaCard;