import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import darkModeIcon from "../assets/dark-mode-toggle-icon.svg";

/**
 * NavBar Component
 * English: Responsive navigation bar with auto-hide logic, glassmorphism, and institutional styling.
 */

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  // English: Logic to hide navbar on inactivity and show on mouse move
  useEffect(() => {
    let timeoutId;
    const handleMouseMove = () => {
      setNavVisible(true);
      clearTimeout(timeoutId);
      // Hidden after 2.5 seconds of inactivity
      timeoutId = setTimeout(() => {
        if (!nav) setNavVisible(false); // Don't hide if mobile menu is open
      }, 2500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [nav]);

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca de", label: "Acerca de" },
    { id: "portafolio", label: "Portafolio" },
    { id: "experiencia", label: "Experiencia" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        !navVisible ? "-translate-y-full" : "translate-y-0"
      } ${
        darkMode 
          ? "bg-black/70 backdrop-blur-md border-b border-white/10" 
          : "bg-white/80 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 px-6">
        
        {/* LOGO AREA */}
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/Logo-home.png"}
            alt="JuanIgnacio Logo"
            className={`w-16 h-auto cursor-pointer transition-all duration-300 ${
              darkMode ? "filter invert brightness-200" : "hover:opacity-80"
            }`}
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-2">
          {sections.map(({ id, label }) => (
            <NavLinks
              key={id}
              toSection={id}
              className="text-sm lg:text-base font-semibold px-4"
              darkMode={darkMode}
            >
              {label}
            </NavLinks>
          ))}
        </ul>

        {/* ACTIONS (Dark Mode & Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl transition-all duration-300 transform hover:rotate-12 ${
              darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img
              src={darkModeIcon}
              alt="Toggle Mode"
              className="w-7 h-7"
            />
          </button>

          {/* MOBILE BUTTON */}
          <div
            onClick={() => setNav(!nav)}
            className={`md:hidden cursor-pointer z-[110] p-2 rounded-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-all duration-500 md:hidden ${
          nav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-8">
          {sections.map(({ id, label }) => (
            <li key={id} className="w-full text-center">
              <NavLinks
                toSection={id}
                className="text-4xl font-bold block w-full py-4"
                onClick={() => setNav(false)}
                darkMode={darkMode}
              >
                {label}
              </NavLinks>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;