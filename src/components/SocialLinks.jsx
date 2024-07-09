import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = ({ darkMode }) => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/juan-ignacio-1294j20i30a",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/JuanIgnacioAlvarez",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:contacto@juanignacio.tech",
    },
    {
      id: 4,
      child: (
        <>
          Curriculum <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV-JuanIgnacio.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  // Modificación: Cambio en la generación de la clase para el color de fondo
  const socialLinksClass = `hidden lg:flex flex-col top-[35%] left-0 fixed ${
    darkMode ? "text-black" : "text-black"
  }`;

  return (
    <div className={socialLinksClass}>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              (darkMode ? "bg-gray-500" : "bg-gray-200") + // Modificación: Cambio en la generación de la clase para el color de fondo
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
