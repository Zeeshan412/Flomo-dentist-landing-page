import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div 
      className="flex items-center p-5 rounded-[17px] border border-[#C4FFD8] bg-[#EFFFF5] feature-card"
      style={{ 
        width: '600px',
        height: '140px'
      }}
    >
      {icon && (
        <div className="flex-shrink-0 mr-5">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#04215C] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;