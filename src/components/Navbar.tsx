import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full z-40 transition-all duration-300"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">DT</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
