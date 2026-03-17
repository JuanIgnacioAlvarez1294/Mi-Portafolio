import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import milogoDark from "../assets/milogoDark.png";
import milogoLight from "../assets/milogoLight.png";

/**
 * Contacto Component
 * English: Contact form integrated with EmailJS, featuring institutional branding and responsive split layout.
 */

const Contacto = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_xdg8irn',
      'template_p4a4vks',
      form.current,
      '5uIgEVwgKOy-6HZki'
    )
    .then((result) => {
      alert("¡Mensaje enviado con éxito!");
      form.current.reset(); // English: Clear form after success
    }, (error) => {
      alert("Hubo un error. Por favor, inténtalo de nuevo.");
    });
  };

  const logo = darkMode ? milogoDark : milogoLight;
  const inputBg = darkMode ? "bg-[#121212]" : "bg-white";
  const borderColor = darkMode ? "border-gray-700 focus:border-teclab" : "border-gray-300 focus:border-siglo21";

  return (
    <div
      name="contacto"
      className={`w-full min-h-screen flex items-center transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-8 py-20 gap-12">
        
        {/* LADO IZQUIERDO: FORMULARIO */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="pb-8">
            <p className="text-5xl font-extrabold inline border-b-4 border-teclab uppercase tracking-widest">
              Contacto
            </p>
            <p className="py-6 text-lg opacity-70">
              ¿Tienes un proyecto en mente? Hablemos y trabajemos juntos.
            </p>
          </div>

          <div className={`p-8 rounded-2xl shadow-2xl ${darkMode ? "bg-gray-900/50" : "bg-white"}`}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-full space-y-4"
            >
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre completo"
                  className={`p-3 rounded-lg border-2 outline-none transition-all duration-300 ${inputBg} ${borderColor}`}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className={`p-3 rounded-lg border-2 outline-none transition-all duration-300 ${inputBg} ${borderColor}`}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Cuéntame sobre tu propuesta..."
                  className={`p-3 rounded-lg border-2 outline-none transition-all duration-300 resize-none ${inputBg} ${borderColor}`}
                ></textarea>
              </div>

              <button
                className="mt-4 py-4 rounded-xl font-bold text-white uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-siglo21 to-teclab shadow-lg shadow-teclab/20"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* LADO DERECHO: LOGO / BRANDING */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* English: Background glow using university colors */}
            <div className={`absolute -inset-4 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? "bg-teclab" : "bg-siglo21"}`}></div>
            
            <img
              src={logo}
              alt="Juan Ignacio Logo"
              className="relative z-10 w-full max-w-[500px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;