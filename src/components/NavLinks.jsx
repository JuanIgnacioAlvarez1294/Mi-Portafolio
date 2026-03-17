import React from "react";
import { Link } from "react-scroll";

/**
 * NavLinks Component
 * English: Optimized navigation link with animated underlines and institutional hover effects.
 */

const NavLinks = ({ toSection, className, onClick, darkMode, children }) => {
  // English: Base classes for the link, adding relative for the absolute underline effect
  const baseLinkClass = `
    relative cursor-pointer capitalize font-medium duration-300 group
    ${className ? className : ''} 
    ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
  `;

  return (
    <Link
      to={toSection}
      smooth
      duration={500}
      offset={-70} // English: Adjust this based on your Navbar height
      onClick={onClick}
      className={baseLinkClass}
    >
      {children}
      
      {/* English: Animated underline that uses Siglo 21 green or Teclab blue on hover */}
      <span className={`
        absolute bottom-[-4px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full
        ${toSection === 'inicio' || toSection === 'portafolio' ? 'bg-siglo21' : 'bg-teclab'}
      `}></span>
    </Link>
  );
};

export default NavLinks;