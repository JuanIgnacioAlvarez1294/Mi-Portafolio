import React, { useState } from "react";
import ReactPlayer from "react-player";

// Importación de imágenes
import HotelWebImg from "../assets/portfolio/HotelWebImg.png";
import RH_PROJECTImg from "../assets/portfolio/RH_PROJECTImg.png";
import MenudigitalImg from "../assets/portfolio/MenudigitalImg.png";
import JournalAppImg from "../assets/portfolio/JournalAppImg.png";
import CalendarAppImg from "../assets/portfolio/CalendarAppImg.png";
import FinanzaPersonalImg from "../assets/portfolio/FinanzaPersonalImg.png";

// Importación de videos
import MenúDigital from "../assets/portfolio/MenúDigital.mp4";
import RH_PROJECT from "../assets/portfolio/RH_PROJECT.mp4";
import CalendarApp from "../assets/portfolio/CalendarApp.mp4";
import HotelWeb from "../assets/portfolio/HotelWeb.mp4";
import JournalApp from "../assets/portfolio/JournalApp.mp4";
import FinanzaPersonal from "../assets/portfolio/FinanzaPersonal.mp4";

/**
 * Portafolio Component
 * English: Displaying projects using a modern grid with glassmorphism and institutional highlights.
 */

const Portafolio = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const fullStackProjects = [
    {
      id: 1,
      src: CalendarAppImg,
      title: "Calendar Pro",
      tech: "Spring Boot & React",
      demoLink: CalendarApp,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/CalenPro-Monorepo.git",
    },
    {
      id: 2,
      src: MenudigitalImg,
      title: "Menú Digital",
      tech: "Node.js & React",
      demoLink: MenúDigital,
      codeLink: "https://github.com/JuanIgnacioAlvarez/Menu-Digital.git",
    },
    {
      id: 3,
      src: RH_PROJECTImg,
      title: "Sistema RRHH",
      tech: "Java Spring Boot",
      demoLink: RH_PROJECT,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/Sistema-de-Recursos-Humanos-con-Spring-Boot-y-React",
    },
  ];

  const frontendProjects = [
    {
      id: 4,
      src: JournalAppImg,
      title: "Journal App",
      tech: "React & Firebase",
      demoLink: JournalApp,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/Journal-App.git",
    },
    {
      id: 5,
      src: HotelWebImg,
      title: "Hotel Experience",
      tech: "Tailwind & React",
      demoLink: HotelWeb,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/experience-react-tailwind",
    },
    {
      id: 6,
      src: FinanzaPersonalImg,
      title: "Finanzas Personales",
      tech: "React Hooks",
      demoLink: FinanzaPersonal,
      codeLink: "https://github.com/JuanIgnacioAlvarez1294/Finanzas-Personales-React-App.git",
    },
  ];

  const ProjectCard = ({ project, borderColor }) => (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
      darkMode ? "bg-gray-900/50 border-white/10" : "bg-white border-gray-200"
    } border shadow-xl`}>
      {/* Image Container */}
      <div className="overflow-hidden h-48 relative">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${borderColor}`}>
          {project.tech}
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{project.title}</h3>
        <div className="flex gap-4">
          <button
            onClick={() => openModal(project.demoLink)}
            className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
              darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            Video Demo
          </button>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 py-2 rounded-lg font-semibold text-center border transition-all ${
              darkMode ? "border-white/20 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div
      name="portafolio"
      className={`py-20 w-full min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-4 border-siglo21 uppercase tracking-widest">
            Portafolio
          </p>
          <p className="py-6 text-lg opacity-70">
            Explora mis proyectos desarrollados con tecnologías de vanguardia.
          </p>
        </div>

        {/* FullStack Section - Highlighted with Teclab Blue */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-teclab rounded-full"></div>
            <h2 className="text-3xl font-bold italic">Fullstack & Backend</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((project) => (
              <ProjectCard key={project.id} project={project} borderColor="bg-teclab" />
            ))}
          </div>
        </div>

        {/* Frontend Section - Highlighted with Siglo 21 Green */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-siglo21 rounded-full"></div>
            <h2 className="text-3xl font-bold italic">Frontend React</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project) => (
              <ProjectCard key={project.id} project={project} borderColor="bg-siglo21" />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal - Reusing logic with better styling */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" 
               onClick={(e) => e.stopPropagation()}>
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
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