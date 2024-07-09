import React from "react";
import JuanIgnacioAlvarez from "../assets/JuanIgnacioAlvarez.jpg";

const AcercaDe = ({ darkMode }) => {
  return (
    <div
      name="acerca de"
      className={`w-full h-auto lg:h-screen bg-gradient-to-b ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row justify-center w-full h-full">
        <div className="pb-4 lg:w-1/3 lg:pb-0 flex justify-center items-center">
          <img
            src={JuanIgnacioAlvarez}
            alt="Imagen de perfil"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div
          className={`lg:w-2/3 pl-4 lg:pl-8 p-6 lg:ml-4 lg:mt-4 ${
            darkMode ? "bg-transparent" : "bg-gray-300"
          } ${darkMode ? "border-none" : "rounded-lg border-gray-300"}`}
        >
          <p
            className={`text-4xl font-bold inline ${
              darkMode ? "border-transparent" : "border-b-4"
            } ${darkMode ? "text-gray-300" : ""}`}
          >
            Acerca De
          </p>

          <p
            className={`text-xl mt-4 lg:mt-8 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Soy un apasionado estudiante de Informática que desde temprana edad
            ha encontrado fascinación en el aprendizaje y descubrimiento
            constante. La tecnología y la informática han sido mis aliadas en
            esta travesía, brindándome un universo de conocimiento en constante
            evolución que me encanta explorar. Actualmente, aunque mi trabajo es
            en una fábrica que no está directamente relacionado con mi carrera,
            he encontrado en ello una oportunidad para crecer. La empresa valora
            mi crecimiento y me apoya en la búsqueda de una trayectoria alineada
            con mi pasión por la programación. Soy una persona paciente,
            amigable y me motiva la satisfacción de logros y la resolución de
            problemas, grandes o pequeños. Mi objetivo es integrar mis
            habilidades con desafíos frescos en programación, involucrarme más
            en mi facultad y así potenciar mi compromiso con la excelencia en el
            mundo de la informática."
          </p>
          <br />
          <p className={`text-xl ${darkMode ? "text-white" : "text-gray-800"}`}>
            ¡Gracias por conocerme! Emocionado por el crecimiento que aguarda,
            estoy preparado para abrazar cada oportunidad y desafío. Ansío
            colaborar, aprender y seguir explorando en el fascinante mundo de la
            tecnología. ¡El futuro promete grandes aventuras y logros por
            descubrir!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
