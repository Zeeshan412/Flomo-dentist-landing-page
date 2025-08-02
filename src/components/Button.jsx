import React from "react";
import arrow from "../assets/arrow.svg";

const Button = ({ text = "Book A Demo" }) => {
  return (
    <button className="bg-[#072B73] w-[140px] sm:w-[159px] h-[40px] sm:h-[48px] justify-center inline-flex items-center text-white px-3 sm:px-4 rounded-full gap-x-[8px] sm:gap-x-[10px] hover:opacity-90 transition-all whitespace-nowrap text-sm sm:text-base">
      <span>{text}</span>
      <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shrink-0">
        <img
          src={arrow}
          alt="arrow"
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
        />
      </span>
    </button>
  );
};

export default Button;
