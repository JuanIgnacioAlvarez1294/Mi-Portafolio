import React from "react";
import milogoDark from "../assets/milogoDark.png";
import milogoLight from "../assets/milogoLight.png";

const Contacto = ({ darkMode }) => {
  const logo = darkMode ? milogoDark : milogoLight;
  const darkLogoStyle = {
    width: "700px", // Cambio este valor según el tamaño deseado para milogoDark
    height: "auto",
  };
  const textColor = darkMode ? "text-black-300" : "text-black-600"; // Color del texto en modo light
  const lightLogoStyle = {
    width: darkLogoStyle.width, // Utiliza el mismo ancho que milogoDark
    height: darkLogoStyle.height, // Utiliza la misma altura que milogoDark
  };

  const labelColor = darkMode ? "text-white" : "text-black-600"; 

  return (
    <div
      name="contacto"
      className={`flex h-screen bg-gradient-to-b ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
        <div
          className={`pb-8 text-4xl font-bold inline border-b-4 ${
            darkMode ? "border-gray-500" : "border-gray-900"
          }`}
        >
          Contacto
        </div>
        <p className={`py-6 lg:pl-32 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Envíe el siguiente formulario para ponerse en contacto conmigo
        </p>

        <form
          action="https://getform.io/f/e1470229-15c5-427a-9be6-0c5b0468884d"
          method="POST"
          className="flex flex-col w-full lg:min-w-full lg:pl-60 bg "
        >
          <label htmlFor="name" className={labelColor}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Introduzca su nombre"
            className={`p-2 bg-transparent border-2 rounded-md text-black focus:outline-none ${
              darkMode ? "border-gray-500" : "border-gray-300"
            }`}
          />

          <label htmlFor="email" className={labelColor}>
            Correo Electrónico:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Introduce tu correo electrónico"
            className={`my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none ${textColor} ${
              darkMode ? "border-gray-500" : "border-gray-300"
            }`}
          />

          <label htmlFor="message" className={labelColor}>
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Ingrese su mensaje"
            rows="10"
            className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${textColor} ${
              darkMode ? "border-gray-500" : "border-gray-300"
            }`}
          ></textarea>

          <button
            className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${
              darkMode ? "border-gray-500" : "border-gray-300"
            }`}
          >
            Hablemos!!!
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0 mt-8">
        <img
          src={logo}
          alt="Mi Logo"
          className={`rounded-lg object-cover ${
            darkMode ? "" : "w-3/4 h-3/4" // Cambio el tamaño de milogoLight si es necesario
          }`}
          style={darkMode ? darkLogoStyle : lightLogoStyle} // Aplico el estilo correspondiente al modo
        />
      </div>
    </div>
  );
};

export default Contacto;
