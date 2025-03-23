import React, { useState } from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";
import Modal from "react-modal"; // Asegúrate de tener react-modal instalado
import Probando from "../assets/portfolio/Probando.mp4"; // Importa el video

// Estilos para el modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "0",
    bottom: "0",
    marginRight: "0",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Fondo oscuro para el modal
    border: "none", // Sin bordes
  },
};

const Inicio = ({ darkMode }) => {
  // Estado para controlar la apertura/cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div
      name="inicio"
      className={`h-screen w-full ${darkMode ? "bg-black" : "bg-gray-300"} ${
        darkMode ? "text-white" : "text-white"
      } flex items-center`}
    >
      {/* Contenido del componente de Inicio */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row w-full justify-center items-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          {/* Contenido del título */}
          <h2
            className={`text-4xl sm:text-7xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Juan Ignacio Alvarez
          </h2>

          {/* Contenido del párrafo */}
          <p
            className={`py-4 max-w-md ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Apasionado estudiante de Informática con habilidades sólidas en desarrollo web, destacándome en JavaScript, React, y tecnologías backend como Java, Spring Boot, y gestión de bases de datos. Comprometido con la innovación, aprendizaje continuo y habilidades sólidas en metodologías ágiles y trabajo en equipo. Encantado de compartir mi portafolio con usted ¡Bienvenido!
          </p>

          {/* Botón de enlace */}
          <div>
            <button
              onClick={openModal} // Al hacer clic, se abre el modal
              className={`group ${
                darkMode ? "text-white" : "text-gray-800"
              } w-fit px-6 py-3 my-2 flex items-center rounded-md ${
                darkMode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500"
              } cursor-pointer`}
            >
              Presentación
              <span
                className={`group-hover:rotate-90 duration-300 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>

      {/* Modal para mostrar el video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Video Modal"
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-blue-500 font-bold text-xl"
          >
            X
          </button>
        </div>
        <ReactPlayer url={Probando} controls width="100%" height="100%"/>
      </Modal>
    </div>
  );
};

export default Inicio;
