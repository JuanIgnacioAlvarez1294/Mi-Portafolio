import React, { useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Presentacion from "../assets/portfolio/presentacion.mp4";

/**
 * Componente Inicio - Versión Identidad Profesional
 * Integración de títulos: Técnico (Teclab), Analista y Licenciado (Siglo 21)
 */

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    backdropFilter: "blur(4px)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "800px",
    aspectRatio: "16/9",
    backgroundColor: "#000",
    border: "1px solid #333",
    borderRadius: "15px",
    padding: "0",
    overflow: "hidden",
  },
};

if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

const Inicio = ({ darkMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div
      name="inicio"
      className={`h-screen w-full transition-all duration-500 ${
        darkMode 
          ? "bg-gradient-to-b from-black via-black to-gray-900 text-white" 
          : "bg-gray-100 text-gray-900"
      } flex items-center`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row w-full justify-center items-center h-full px-8 gap-12">
        
        {/* COLUMNA DE TEXTO */}
        <div className="flex flex-col justify-center h-full text-center md:text-left flex-1 order-2 md:order-1">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Juan Ignacio Alvarez
          </h2>
          
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
            <span className="h-1 w-8 bg-siglo21 rounded-full"></span>
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-90 text-siglo21">
              Licenciado en Informática | Java Backend Developer
            </p>
          </div>

          <p className={`py-6 max-w-lg text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
              Profesional graduado con una sólida trayectoria técnica y académica: 
              <span className="text-teclab font-bold"> Técnico</span>, 
              <span className="text-siglo21 font-bold"> Analista</span> y 
              <span className="text-siglo21 font-bold"> Licenciado en Informática</span>. 
              Mi enfoque principal es el ecosistema <span className={`font-bold italic ${darkMode ? "text-white" : "text-gray-900"}`}>Java & Spring Boot</span>, 
              con dominio en arquitecturas de <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Microservicios, Docker</span> 
              y soluciones Full Stack con <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>React</span>.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={openModal}
              className={`group text-white w-fit px-8 py-4 my-2 flex items-center rounded-full font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 ${
                darkMode 
                ? "bg-gradient-to-r from-siglo21 to-teclab shadow-siglo21/20" 
                : "bg-gradient-to-r from-siglo21 to-teclab shadow-teclab/30"
              }`}
            >
              Ver Presentación
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* COLUMNA DE IMAGEN CON GLOW ACADÉMICO */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative group">
            {/* Efecto de aura dual: Verde (Siglo 21) y Azul (Teclab) */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-siglo21 to-teclab rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <img
              src={HeroImage}
              alt="Perfil Juan Ignacio"
              className="relative rounded-3xl mx-auto w-64 md:w-80 lg:w-96 shadow-2xl transition-transform duration-700 hover:scale-[1.02] border border-white/10"
            />
          </div>
        </div>
      </div>

      {/* MODAL DE VIDEO */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Video de Presentación"
      >
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-red-500/80 text-white w-10 h-10 rounded-full backdrop-blur-md transition-all flex items-center justify-center font-bold"
          >
            ✕
          </button>
          
          <ReactPlayer 
            url={Presentacion} 
            controls 
            width="100%" 
            height="100%"
            playing={modalIsOpen}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Inicio;