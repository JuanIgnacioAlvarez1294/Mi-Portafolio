import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import darkModeIcon from "../assets/dark-mode-toggle-icon.svg";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      setNavVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setNavVisible(false), 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Definir las secciones con sus respectivos nombres
  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca de", label: "Acerca de" },
    { id: "portafolio", label: "Portafolio" },
    { id: "experiencia", label: "Experiencia" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        !navVisible ? "-translate-y-full" : ""
      } transition-transform duration-300 ease-in-out ${
        darkMode ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 h-24">
          <img
            src={process.env.PUBLIC_URL + "/Logo-home.png"}
            alt="Logo de JuanIgnacio"
            className={`w-24 h-auto ${darkMode ? "filter invert" : ""}`}
          />
          <div
            onClick={() => setNav(!nav)}
            className={`cursor-pointer ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {nav ? (
              <FaTimes size={30} style={{ marginRight: "auto" }} />
            ) : (
              <FaBars size={30} />
            )}
          </div>
        </div>

        {nav && (
          <div
            className={`${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <ul className="flex flex-col items-center">
              {sections.map(({ id, label }) => (
                <NavLinks
                  key={id}
                  toSection={id} // Cambiar 'link' a 'toSection'
                  className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                    darkMode ? "text-gray-500" : "text-black"
                  }`}
                  onClick={() => setNav(!nav)}
                  darkMode={darkMode}
                >
                  {label}
                </NavLinks>
              ))}
            </ul>

            <div className="flex justify-center mt-4">
              <button
                className={`rounded ${
                  darkMode
                    ? "bg-blue-300 hover:bg-blue-300 text-white"
                    : "bg-white-300 hover:bg-white-400 text-gray-800"
                }`}
                onClick={toggleDarkMode}
              >
                <img
                  src={darkModeIcon}
                  alt={darkMode ? "Light Mode" : "Dark Mode"}
                  className="w-10 h-10"
                />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={`h-24 px-4 hidden md:flex justify-between items-center`}>
        <img
          src={process.env.PUBLIC_URL + "/Logo-home.png"}
          alt="Logo de JuanIgnacio"
          className={`w-24 h-auto ${
            darkMode ? "filter invert" : "filter bg-gray-600"
          }`}
        />

        <ul className="flex">
          {sections.map(({ id, label }) => (
            <NavLinks
              key={id}
              toSection={id}
              className={`px-2 md:px-6 cursor-pointer capitalize font-medium text-base md:text-lg ${
                darkMode ? "text-white" : "text-black"
              } hover:scale-105 duration-200`}
              onClick={() => setNav(false)}
              darkMode={darkMode}
            >
              {label}
            </NavLinks>
          ))}
        </ul>

        <button
          className={`rounded ${
            darkMode
              ? "bg-blue-400 hover:bg-blue-500 text-white"
              : "bg-white-300 hover:bg-white-400 text-gray-800"
          }`}
          onClick={toggleDarkMode}
        >
          <img
            src={darkModeIcon}
            alt={darkMode ? "Light Mode" : "Dark Mode"}
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
