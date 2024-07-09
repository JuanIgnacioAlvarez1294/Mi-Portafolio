import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ toSection, className, onClick, darkMode, children }) => {
  const linkClass = `${className ? className : ''} ${darkMode ? "text-white" : "text-gray-800"}`;

  return (
    <Link to={toSection} smooth duration={500} onClick={onClick} className={linkClass}>
      {children}
    </Link>
  );
};

export default NavLinks;
