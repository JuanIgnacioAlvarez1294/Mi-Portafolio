import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

/**
 * Footer Component
 * English: Clean, modern footer with dynamic theme support and institutional brand colors.
 */

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/nacho.alvarez1294",
      label: "Instagram",
      hover: "hover:text-pink-500"
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/juanignacio-tech",
      label: "LinkedIn",
      hover: "hover:text-teclab" // Azul Teclab
    },
    {
      id: 3,
      icon: <FaGithub size={24} />,
      href: "https://github.com/JuanIgnacioAlvarez1294",
      label: "GitHub",
      hover: "hover:text-siglo21" // Verde Siglo 21
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={24} />,
      href: "/Lic.InformáticaAlvarez.pdf",
      label: "Currículum",
      download: true,
      hover: "hover:text-gray-400"
    }
  ];

  return (
    <footer className={`py-8 transition-colors duration-500 border-t ${
      darkMode 
        ? "bg-black text-white border-white/10" 
        : "bg-gray-100 text-gray-800 border-gray-200"
    }`}>
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LADO IZQUIERDO: Copyright y Marca */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-medium">
            &copy; {currentYear} <span className="text-siglo21 font-bold">Juan</span>
            <span className="text-teclab font-bold">Ignacio</span>
          </p>
          <p className="text-xs opacity-60 mt-1 uppercase tracking-tighter">
            Fullstack Developer | Innovación Continua
          </p>
        </div>

        {/* LADO DERECHO: Redes Sociales */}
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download}
              title={link.label}
              className={`transition-all duration-300 transform hover:scale-125 ${link.hover} ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* BARRA DE COLOR INFERIOR (Detalle de Identidad) */}
      <div className="mt-8 flex h-1 w-full">
        <div className="bg-siglo21 flex-1"></div>
        <div className="bg-teclab flex-1"></div>
      </div>
    </footer>
  );
}

export default Footer;