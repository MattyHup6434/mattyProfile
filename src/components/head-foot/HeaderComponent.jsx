import React, { useState } from "react";

const HeaderComponent = ({ toggleDarkMode, darkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 p-4 backdrop-blur-md bg-opacity-30">


      <div
        className={`absolute inset-0 opacity-20 backdrop-blur-xl rounded-lg pointer-events-none ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600"
            : "bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500"
        }`}
      ></div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6">
        <div
          className={`text-2xl font-extrabold tracking-wide ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <a href="#top">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">
              My Profile
            </span>
          </a>
        </div>

        <nav className="hidden sm:flex flex-grow">
          <ul className="flex justify-center sm:justify-start gap-4 sm:gap-6">
            <li>
              <a
                href="#projects"
                className={`transition-colors duration-300 hover:text-teal-300 ${
                  isDarkMode ? "text-white": "text-teal-800" 
                } scroll-mt-16`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`transition-colors duration-300 hover:text-teal-300 ${
                  isDarkMode ?"text-white": "text-teal-800" 
                }`}
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden flex items-center">
          <button
            className="p-3 rounded-full text-white hover:text-gray-300"
            onClick={handleMenuToggle}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 transform" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 transform" : ""
              }`}
            ></span>
          </button>
        </div>

        <button
          className={`p-3 rounded-full shadow-lg transition-all duration-300 transform ${
            isDarkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105"
              : "bg-gradient-to-r from-yellow-200 to-orange-300 hover:scale-105"
          }`}
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? "🌙" : "🌞"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col items-center mt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#projects"
                className={`transition-colors duration-300 hover:text-teal-300 ${
                  isDarkMode ? "text-white": "text-teal-800" 
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`transition-colors duration-300 hover:text-teal-300 ${
                  isDarkMode ? "text-white": "text-teal-800" 
                }`}
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
