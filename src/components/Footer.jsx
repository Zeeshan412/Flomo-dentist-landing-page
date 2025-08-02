import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-6 sm:mb-8 md:mb-12">
          {/* Logo only - on the left */}
          <div className="mb-6 sm:mb-8 md:mb-0 max-w-[200px] mx-auto md:mx-0">
            <img src={Logo} alt="Flomo Logo" className="h-8 sm:h-10 mb-4 sm:mb-6 mx-auto md:mx-0" />
          </div>

          {/* Centered headings with Contact Us pushed right */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-24 justify-center items-center sm:items-start flex-grow">
            {/* Quick Links */}
            <div className="mb-6 sm:mb-0 text-center sm:text-left">
              <h3 className="text-lg font-bold mb-3 md:mb-4 text-blue-900">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-blue-900 hover:text-blue-700 text-sm sm:text-base">Home</a></li>
                <li><a href="#" className="text-blue-900 hover:text-blue-700 text-sm sm:text-base">About Us</a></li>
                <li><a href="#" className="text-blue-900 hover:text-blue-700 text-sm sm:text-base">Features</a></li>
              </ul>
            </div>

            {/* Contact Us - moved further right */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold mb-3 md:mb-4 text-blue-900">Contact Us</h3>
              <p className="text-blue-900 text-sm sm:text-base">jeffrey@useflomo.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;