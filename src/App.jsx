import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MobileMenuButton from "./components/MobileMenuButton.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import "./styles/Portfolio.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    { id: "inicio", title: "MAIN" },
    { id: "sobre-mi", title: "ABOUT" },
    { id: "estudios", title: "EDUCATION" },
    { id: "experiencia", title: "EXPERIENCE" },
    { id: "habilidades", title: "SKILLS" },
    { id: "proyectos", title: "PROYECTS" },
    { id: "contacto", title: "CONTACT" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        sections={sections}
      />

      <main className="flex-1">
        <MobileMenuButton toggleMenu={toggleMenu} />

        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
