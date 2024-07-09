import { useEffect, useState } from "react";
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import NavLinks from "./components/NavLinks";
import Portafolio from "./components/Portafolio";
import SocialLinks from "./components/SocialLinks";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Configurar Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyB1XwviAGnVHx8rpjfCMK9s_3rWa1F9S1M",
      authDomain: "my-portafolio-5b6df.firebaseapp.com",
      projectId: "my-portafolio-5b6df",
      storageBucket: "my-portafolio-5b6df.appspot.com",
      messagingSenderId: "627951744726",
      appId: "1:627951744726:web:57ba7fb9014839d783bb77",
      measurementId: "G-MCXR9KCDM1"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Limpieza al desmontar el componente
    return () => {
      // Código de limpieza si es necesario
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`h-full w-full mx-auto ${darkMode ? "dark" : ""}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Inicio darkMode={darkMode} />
      <AcercaDe darkMode={darkMode} />
      <Portafolio darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contacto darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <SocialLinks darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

