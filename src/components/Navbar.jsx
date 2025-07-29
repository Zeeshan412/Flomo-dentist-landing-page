import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow md:static fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Flomo</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li onClick={() => scrollToSection("home")} className="hover:text-blue-600 cursor-pointer">Home</li>
        <li onClick={() => scrollToSection("about")} className="hover:text-blue-600 cursor-pointer">About</li>
        <li onClick={() => scrollToSection("services")} className="hover:text-blue-600 cursor-pointer">Services</li>
        <li onClick={() => scrollToSection("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Book Appointment
      </button>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-40">
          <a onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600">Home</a>
          <a onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600">About</a>
          <a onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600">Services</a>
          <a onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
