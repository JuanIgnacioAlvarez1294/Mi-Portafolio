import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Usaremos el ícono de flecha hacia arriba de react-icons

function ScrollToTopButton({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el desplazamiento hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación de desplazamiento suave
    });
  };

  // Manejar la visibilidad del botón basado en la posición de desplazamiento
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Agregar un listener de scroll para manejar la visibilidad del botón
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 right-4 z-50 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600`}
      onClick={scrollToTop}
    >
      <FaArrowUp className={darkMode ? "text-white" : "text-black"} />
    </div>
  );
}

export default ScrollToTopButton;
