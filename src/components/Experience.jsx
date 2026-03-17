import React from "react";

// Importación de activos
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs-icon.png"; 
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java-icon.png"; // Nueva importación
import nodejs from "../assets/nodejs-icon.png"; 
import springboot from "../assets/springio-icon.png"; 
import mysql from "../assets/mysql-icon.png";
import oracle from "../assets/oracle-icon.png";
import postgresql from "../assets/postgresql-icon.png";
import firebase from "../assets/firebase-icon.png";
import github from "../assets/github.png";
import docker from "../assets/docker-icon.png";
import postman from "../assets/getpostman-icon.png";
import kafka from "../assets/apache_kafka-icon.png";

const Experience = ({ darkMode }) => {
  const categories = [
    {
      name: "Frontend Stack",
      subtitle: "Interfaces modernas y diseño responsivo",
      techs: [
        { id: 1, src: html, title: "HTML", style: "shadow-orange-500", type: "front" },
        { id: 2, src: css, title: "CSS", style: "shadow-blue-500", type: "front" },
        { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500", type: "front" },
        { id: 4, src: tailwind, title: "Tailwind", style: "shadow-sky-400", type: "front" },
        { id: 5, src: reactImage, title: "React", style: "shadow-cyan-400", type: "front" },
        { id: 6, src: nextjs, title: "Next.js", style: "shadow-white", type: "front" },
      ]
    },
    {
      name: "Backend Core",
      subtitle: "Lógica de negocio y arquitecturas robustas",
      techs: [
        { id: 7, src: java, title: "Java", style: "shadow-red-500", type: "back" }, // Protagonista
        { id: 8, src: springboot, title: "Spring Boot", style: "shadow-green-600", type: "back" },
        { id: 9, src: nodejs, title: "Node.js", style: "shadow-green-400", type: "back" },
      ]
    },
    {
      name: "Data & Persistence",
      subtitle: "Gestión de datos relacionales y NoSQL",
      techs: [
        { id: 10, src: mysql, title: "MySQL", style: "shadow-blue-400", type: "back" },
        { id: 11, src: oracle, title: "Oracle DB", style: "shadow-red-600", type: "back" },
        { id: 12, src: postgresql, title: "PostgreSQL", style: "shadow-blue-300", type: "back" },
        { id: 13, src: firebase, title: "Firebase", style: "shadow-yellow-500", type: "back" },
      ]
    },
    {
      name: "Infrastructure & Tools",
      subtitle: "Mensajería, contenedores y herramientas de entorno",
      techs: [
        { id: 14, src: github, title: "GitHub", style: "shadow-gray-400", type: "tools" },
        { id: 15, src: docker, title: "Docker", style: "shadow-blue-500", type: "tools" },
        { id: 16, src: postman, title: "Postman", style: "shadow-orange-600", type: "tools" },
        { id: 17, src: kafka, title: "Kafka", style: "shadow-gray-300", type: "tools" },
      ]
    }
  ];

  return (
    <div
      name="experiencia"
      className={`w-full min-h-screen py-20 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-10 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-4 border-siglo21 uppercase tracking-widest">
            Habilidades
          </p>
          <p className="py-8 text-lg opacity-70">
            Ecosistema tecnológico profesional organizado por capas de arquitectura.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-8 border-l-4 border-siglo21 pl-4">
                <h2 className="text-2xl font-bold uppercase tracking-wider">{cat.name}</h2>
                <p className="text-sm opacity-60 italic">{cat.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center sm:px-0">
                {cat.techs.map(({ id, src, title, style, type }) => (
                  <div
                    key={id}
                    className={`relative group p-6 rounded-2xl transition-all duration-500 hover:scale-110 shadow-lg flex flex-col items-center justify-center ${
                      darkMode 
                      ? "bg-gray-900/40 border border-white/5 shadow-black" 
                      : "bg-white border border-gray-200 shadow-gray-200"
                    } ${style.replace('shadow-', 'shadow-').concat('/40')} hover:shadow-2xl`}
                  >
                    <div className={`absolute top-2 right-3 h-1.5 w-6 rounded-full ${
                      type === 'back' ? 'bg-teclab' : type === 'tools' ? 'bg-gray-500' : 'bg-siglo21'
                    }`}></div>

                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={src} 
                        alt={title} 
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:rotate-6" 
                      />
                    </div>
                    
                    <p className={`mt-4 font-bold tracking-wider text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {title}
                    </p>

                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                      type === 'back' ? 'bg-teclab' : type === 'tools' ? 'bg-white' : 'bg-siglo21'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-6 text-xs font-semibold opacity-40 uppercase tracking-widest border-t border-gray-800 pt-8">
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-siglo21 rounded-full"></span>
                <span>Enfoque Frontend</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-teclab rounded-full"></span>
                <span>Enfoque Backend</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-gray-500 rounded-full"></span>
                <span>Herramientas & Infra</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;