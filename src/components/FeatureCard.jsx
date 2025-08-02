import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-[17px] border border-gray-200 p-4 sm:p-6 w-full h-auto min-h-[70px] sm:min-h-[90px] flex items-center">
      <div className="text-left">
        <h3 className="text-base sm:text-lg font-semibold text-blue-900 font-poppins">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm font-poppins">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;