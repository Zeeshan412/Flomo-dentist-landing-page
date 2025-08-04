// src/components/Card.jsx
import React from "react";
import Button from "./Button";
import { card } from "../assets";

const Card = ({ SvgIcon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center max-w-xs w-full">
      {SvgIcon && (
        <div className="flex justify-center mb-4">
          <SvgIcon className="h-16 w-16 text-blue-500" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
