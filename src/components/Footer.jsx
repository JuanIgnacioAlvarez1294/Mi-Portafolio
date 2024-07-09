import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Footer({ darkMode }) {
  return (
    <footer className={`bg-${darkMode ? 'black' : 'gray-200'} text-${darkMode ? 'white' : 'gray-800'} py-4`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        <p className="text-center md:text-left text-sm">&copy; 2023 JuanIgnacio. Todos los derechos reservados.</p>
        <div className="flex space-x-4 items-center justify-center mt-4 md:mt-0">
          <a href="https://www.instagram.com/nacho.alvarez1294" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl" title="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/juan-ignacio-1294j20i30a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" title="LinkedIn" />
          </a>
          <a href="https://github.com/JuanIgnacioAlvarez" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" title="GitHub" />
          </a>
          {/* Agregamos el botón de descarga de currículum con el icono BsFillPersonLinesFill */}
          <a
            href="/CV-JuanIgnacio.pdf" // Reemplaza con la URL de tu currículum
            download="CV-JuanIgnacio.pdf" // Establece el nombre de descarga
            className={`flex items-center text-${darkMode ? 'white' : 'gray-800'}`}
            title="Currículum"
          >
            <BsFillPersonLinesFill className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
