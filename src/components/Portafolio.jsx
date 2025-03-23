import React, { useState } from "react";
import GastoSemanal from "../assets/portfolio/GastoSemanal.png";
import installNode from "../assets/portfolio/panningTrip.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/seguroHogar.png";
import reactWeather from "../assets/portfolio/addStudent.png";
import ReactPlayer from "react-player"; // Importar ReactPlayer
import ProbandoVideo from "../assets/portfolio/Probando.mp4";

const Portafolio = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el modal
  const [videoUrl, setVideoUrl] = useState(""); // Estado para controlar la URL del video

  // Función para abrir el modal con el video
  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  // Definir proyectos de Backend y Frontend
  const backendProjects = [
    {
      id: 1,
      src: reactWeather,
      demoLink: ProbandoVideo, // Usamos el video importado
      codeLink: "https://github.com/JuanIgnacioAlvarez/presupuesto-en-react.git",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink: ProbandoVideo,
      codeLink: "https://github.com/JuanIgnacioAlvarez/presupuesto-en-react.git",
    },
    {
      id: 3,
      src: navbar,
      demoLink: ProbandoVideo,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/Sistema-de-Recursos-Humanos-con-Spring-Boot-y-React",
    },
  ];

  const frontendProjects = [
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://github.com/JuanIgnacioAlvarez1294/ProyectoCotizador",
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/ProyectoCotizador",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://github.com/JuanIgnacioAlvarez1294/experience-react-tailwind",
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/experience-react-tailwind",
    },
    {
      id: 6,
      src: GastoSemanal,
      demoLink: "https://presupuesto-reactjs-juan.netlify.app/",
      codeLink: "https://github.com/JuanIgnacioAlvarez/presupuesto-en-react.git",
    },
  ];

  // Clase para el portafolio, cambia el texto según el modo
  const portafolioClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0 ${
    darkMode ? "text-white" : "text-black"
  }`;

  // Estilo para el fondo de las cajas
  const boxStyle = darkMode ? "bg-gray-800" : "bg-gray-300"; // Asegúrate de que el fondo sea visible en modo claro

  // Cambiar el color del botón "Code" según el modo
  const buttonStyle = darkMode
    ? "bg-gray-800 text-white" // Estilo para el modo oscuro
    : "bg-gray-300 text-black"; // Estilo para el modo claro

  return (
    <div
      name="portafolio"
      className={`bg-gradient-to-b w-full min-h-screen ${
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

        {/* Backend + Frontend Projects Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Backend & Frontend (Spring Boot + React)
          </h2>
          <div className={portafolioClass}>
            {backendProjects.map(({ id, src, demoLink, codeLink }) => (
              <div
                key={id}
                className={`shadow-md shadow-gray-600 rounded-lg ${boxStyle}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  {demoLink && (
                    <button
                      onClick={() => openModal(demoLink)} // Abre el modal con el video
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Demo
                    </button>
                  )}
                  {codeLink && (
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                      <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${buttonStyle}`}>
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Projects Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Frontend React Projects</h2>
          <div className={portafolioClass}>
            {frontendProjects.map(({ id, src, demoLink, codeLink }) => (
              <div
                key={id}
                className={`shadow-md shadow-gray-600 rounded-lg ${boxStyle}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                      </button>
                    </a>
                  )}
                  {codeLink && (
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                      <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${buttonStyle}`}>
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para reproducir el video */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" // Aseguramos que el modal esté en una capa superior con z-50
          onClick={closeModal} // Cierra el modal al hacer clic en el fondo
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing /> {/* playing auto-reproduce */}
            <button
              className="absolute top-0 right-0 m-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portafolio;
