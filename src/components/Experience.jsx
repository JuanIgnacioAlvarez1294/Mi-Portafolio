import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import oracle from "../assets/oracle.png";
import springboot from "../assets/springboot.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";

const Experience = ({ darkMode }) => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: darkMode ? "shadow-orange-500" : "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: darkMode ? "shadow-blue-500" : "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: darkMode ? "shadow-yellow-500" : "shadow-yellow-600",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: darkMode ? "shadow-blue-600" : "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: darkMode ? "shadow-sky-400" : "shadow-sky-600",
    },
    {
      id: 6,
      src: oracle,
      title: "oracle",
      style: darkMode ? "shadow-red-400" : "shadow-red-600",
    },
    {
      id: 7,
      src: springboot,
      title: "springboot",
      style: darkMode ? "shadow-green-400" : "shadow-green-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: darkMode ? "shadow-gray-400" : "shadow-gray-600",
    },
    {
      id: 9,
      src: mysql,
      title: "mysql",
      style: darkMode ? "shadow-blue-400" : "shadow-blue-600",
    },
  ];

  const boxStyle = darkMode ? "" : "bg-gray-300";

  return (
    <div
      name="experiencia"
      className={`bg-gradient-to-b w-full md:h-screen ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experiencia
          </p>
          <p className="py-6">
            Estas son las tecnologías con las que he trabajado.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} ${boxStyle}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

