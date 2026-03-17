import React from "react";
import JuanIgnacioAlvarez from "../assets/JuanIgnacioAlvarez.jpg";

const AcercaDe = ({ darkMode }) => {
  return (
    <div
      name="acerca de"
      className={`w-full min-h-screen py-20 flex items-center transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* COLUMNA IMAGEN */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-siglo21 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teclab rounded-br-2xl"></div>
            
            <img
              src={JuanIgnacioAlvarez}
              alt="Juan Ignacio Alvarez"
              className="rounded-2xl w-64 h-80 md:w-full md:h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-transparent hover:border-white/10"
            />
          </div>
        </div>

        {/* COLUMNA TEXTO REFINADO */}
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h2 className={`text-5xl font-extrabold inline border-b-4 border-siglo21 uppercase tracking-tighter ${
                darkMode ? "text-white" : "text-gray-900"
            }`}>
              Mi Historia
            </h2>
          </div>

          <div className={`space-y-6 text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            <p>
              Soy <span className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Licenciado en Informática</span> con una fuerte vocación por el desarrollo de software. Mi camino profesional combina la disciplina académica con la práctica constante en el ecosistema <span className="text-siglo21 font-bold italic">Java & Spring Boot</span>.
            </p>

            <p>
              He centrado mi formación reciente en la creación de soluciones escalables, explorando arquitecturas de <span className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Microservicios y despliegues con Docker</span>. Además, disfruto construyendo experiencias de usuario dinámicas utilizando <span className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>React y Next.js</span>.
            </p>

            <p>
              Vengo de un entorno laboral que ha forjado mi <span className="font-bold underline decoration-teclab">ética de trabajo y capacidad de resolución bajo presión</span>. Hoy, con el título en mano, busco dar el salto definitivo al sector IT para aplicar mis conocimientos en proyectos reales, aportando valor, proactividad y un compromiso total con la excelencia técnica.
            </p>
          </div>

          <div className={`mt-10 p-6 rounded-xl border-l-4 border-teclab italic ${
            darkMode ? "bg-teclab/10 text-gray-300" : "bg-teclab/5 text-gray-700"
          }`}>
            "Como Licenciado, entiendo que la tecnología no solo se usa, se construye con propósito. Estoy listo para programar el futuro en equipos de alto rendimiento."
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;