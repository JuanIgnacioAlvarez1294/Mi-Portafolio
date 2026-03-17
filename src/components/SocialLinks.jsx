import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

/**
 * SocialLinks Component
 * English: Sidebar for social media links with glassmorphism and institutional colors.
 */

const SocialLinks = ({ darkMode }) => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com/in/juanignacio-tech",
      // English: Using Siglo 21 Green
      color: "bg-teclab",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/JuanIgnacioAlvarez1294",
      // English: Standard Dark for GitHub
      color: "bg-[#333]",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:nacho1294.ji@gmail.com",
      // English: Using Teclab Blue
      color: "bg-siglo21",
    },
    {
      id: 4,
      child: (
        <>
          Curriculum <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Lic.InformáticaAlvarez.pdf",
      // English: Neutral gray for CV
      color: "bg-gray-600",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download, color }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-40 h-12 px-4 ml-[-105px] hover:ml-[-10px] hover:rounded-r-lg duration-500 transition-all shadow-lg ` +
              `${color} ${style || ""}`
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white font-medium"
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