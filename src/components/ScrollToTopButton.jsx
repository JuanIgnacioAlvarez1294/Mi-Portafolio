import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

/**
 * ScrollToTopButton Component
 * English: Improved scroll-to-top button with institutional gradients and smooth entry animations.
 */

function ScrollToTopButton({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  // English: Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // English: Handle visibility with a slightly higher threshold for better UX
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-500 transform ${
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-20 opacity-0 scale-50"
      } ${
        darkMode 
          ? "bg-gradient-to-br from-siglo21 to-teclab shadow-siglo21/20" 
          : "bg-gradient-to-br from-teclab to-blue-400 shadow-teclab/20"
      } shadow-2xl hover:scale-110 active:scale-90 group`}
      aria-label="Scroll to top"
    >
      {/* English: Icon with dynamic color based on mode */}
      <FaArrowUp 
        className={`text-xl transition-colors duration-300 ${
          darkMode ? "text-white" : "text-white"
        } group-hover:-translate-y-1 duration-300`} 
      />
      
      {/* English: Subtle pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-20 group-hover:hidden"></span>
    </button>
  );
}

export default ScrollToTopButton;