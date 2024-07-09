import React from "react";
import GastoSemanal from "../assets/portfolio/GastoSemanal.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portafolio = ({ darkMode }) => {
  const portafolios = [
    {
      id: 1, // Un identificador único para este proyecto
      src: GastoSemanal, // Ruta o URL de la imagen representativa
      demoLink: "https://presupuesto-reactjs-juan.netlify.app/",
      codeLink:"https://github.com/JuanIgnacioAlvarez/presupuesto-en-react.git",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: process.env.PUBLIC_URL + "/src/assets/portfolio/expo.mp4",
      codeLink:"https://github.com/JuanIgnacioAlvarez/presupuesto-en-react.git",
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  const portafolioClass = `grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ${
    darkMode ? "text-white" : "text-black"
  }`;

  const boxStyle = darkMode ? "" : "bg-gray-300"; // Agregar estilo de fondo para el modo claro

  return (
    <div
      name="portafolio"
      className={`bg-gradient-to-b w-full md:h-screen ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">Mira algunos de mis trabajos aquí</p>
        </div>

        <div className={portafolioClass}>
          {portafolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${boxStyle}`}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;