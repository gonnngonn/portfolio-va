import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const Sidebar = ({ isMenuOpen, toggleMenu, sections }) => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Encontrar qué sección está actualmente en vista
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajusta este valor según necesites
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    if (window.innerWidth < 1024) {
      // 1024px es el breakpoint 'lg' en Tailwind
      toggleMenu();
    }
  };

  return (
    <aside
      className={`fixed lg:sticky lg:top-0 lg:h-screen flex flex-col w-64 bg-gray-900 text-white transition-all duration-300 z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="p-4 flex justify-between items-center lg:hidden">
        <span className="text-xl font-bold">Menú</span>
        <button onClick={toggleMenu} className="text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-2 px-4 rounded transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
