import React, { useState } from "react";
import { logo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="max-w-[1440px] mx-auto px-4 md:px-6 h-[99px] flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Flomo Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-[#072B73] font-medium">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">About Us</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Login</span>
          <div className="ml-4">
            <Button />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#072B73] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger Icon */}
            <div
              className={`w-6 h-0.5 bg-[#072B73] transition-all duration-300 ${isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#072B73] my-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#072B73] transition-all duration-300 ${isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[99px] left-0 w-full py-4 z-50 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-4 text-[#072B73] font-medium">
            <span className="hover:text-blue-600 cursor-pointer transition-colors py-2">Home</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors py-2">
              About Us
            </span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors py-2">Login</span>
            <div className="mt-2 mb-2">
              <Button />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
