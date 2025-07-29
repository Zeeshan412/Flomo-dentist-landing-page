import React from "react";

const Footer = () => {
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#00214d] text-white py-10 px-6 md:px-24" id="contact">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Column 1: Logo / Clinic Name */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Flomo Dental</h2>
          <p className="text-gray-300">
            Your trusted partner in oral health. We care about your smile.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer">About Us</a></li>
            <li><a onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer">Services</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300">123 Smile Street, Dental City</p>
          <p className="text-gray-300">Phone: +123 456 789</p>
          <p className="text-gray-300">Email: info@flomodental.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Flomo Dental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
