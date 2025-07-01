import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce",
      description:
        "Functional website for buying and selling soccer jerseys. It has a Login, Register and a CRUD.",
      image: "/images/proyecto1.jpg", // Asegúrate de tener las imágenes en tu carpeta public
      github: "https://github.com/gonnngonn/tienda-camisetas",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "JSON",
        "Cloudinary",
        "Mercado Pago API",
      ],
    },
    {
      title: "Hogar Para Todos",
      description:
        "Collaborative project to help shelters with the adoption of animals in San Miguel de Tucumán. It has a CRUD, Contact, and a Transit Home section",
      image: "/images/proyecto2.jpg",
      demo: "https://adopcionresponsable.smt.gob.ar",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Toastify",
        "Cloudinary",
        "MySQL",
      ],
    },
    {
      title: "Amanecer Software",
      description:
        "Freelance job developing softwares, aplications, web sites, etc.",
      image: "/images/proyecto3.jpg",
      demo: "https://amanecersoftware.com",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
    },
  ];

  return (
    <section id="proyectos" className="section-container bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Code className="text-blue-600" size={40} />
          PROYECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() =>
                window.open(project.demo || project.github, "_blank")
              }
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Indicador visual de que es clickeable */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que se active el click de la card
                      window.open(project.github, "_blank");
                    }}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </button>
                  {project.demo && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que se active el click de la card
                        window.open(project.demo, "_blank");
                      }}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Link</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
