/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // English: Critical for your darkMode prop to work
  theme: {
    extend: {
      colors: {
        // English: Custom identity colors
        siglo21: {
          light: '#4ade80', // Verde claro
          DEFAULT: '#2c7a4b', // Verde Siglo 21 aproximado
          dark: '#1e5232',
        },
        teclab: {
          light: '#3b82f6', // Azul claro
          DEFAULT: '#005492', // Azul Teclab aproximado
          dark: '#003a66',
        }
      },
      // English: Adding subtle glow animations
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        }
      }
    },
    fontFamily: {
      signature: ['Great Vibes'],
      sans: ['Inter', 'Raleway', 'sans-serif'], // English: Inter is more modern for UI
    }
  },
  plugins: [],
}