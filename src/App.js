import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Componentes
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Portafolio from "./components/Portafolio";
import SocialLinks from "./components/SocialLinks";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";

/**
 * App Principal - Juan Ignacio Alvarez Portfolio
 * 2026 Edition
 */

// Firebase Config (English: Move outside for better readability)
const firebaseConfig = {
  apiKey: "AIzaSyB1XwviAGnVHx8rpjfCMK9s_3rWa1F9S1M",
  authDomain: "my-portafolio-5b6df.firebaseapp.com",
  projectId: "my-portafolio-5b6df",
  storageBucket: "my-portafolio-5b6df.appspot.com",
  messagingSenderId: "627951744726",
  appId: "1:627951744726:web:57ba7fb9014839d783bb77",
  measurementId: "G-MCXR9KCDM1"
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // English: Initialize Firebase once
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    /* English: Use overflow-x-hidden to prevent horizontal scroll issues on mobile */
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
      darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
    }`}>
      
      {/* English: Navigation & Global Overlays */}
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SocialLinks darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode}/>

      {/* English: Sections */}
      <main>
        <Inicio darkMode={darkMode} />
        <AcercaDe darkMode={darkMode} />
        <Portafolio darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contacto darkMode={darkMode} />
      </main>

      {/* English: Footer */}
      <Footer darkMode={darkMode}/>
      
    </div>
  );
}

export default App;