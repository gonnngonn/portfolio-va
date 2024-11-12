import React from "react";
import { Mail, Linkedin, Github, PhoneCall } from "lucide-react";

const Contact = () => {
  // Cambia esto con tus datos reales
  const contactInfo = {
    email: "gonzalo.gamboa233@gmail.com", // Reemplaza con tu Gmail
    linkedin: "https://www.linkedin.com/in/gonzalo-albornoz-gamboa-376b91305/", // Reemplaza con tu perfil de LinkedIn
    github: "https://github.com/gonnngonn", // Reemplaza con tu perfil de GitHub
  };

  return (
    <section id="contacto" className="section-container bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <PhoneCall className="text-blue-400" size={40} />
          CONTACT
        </h2>

        <div className="grid gap-6">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="p-3 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="p-3 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-300">Professional Profile</p>
            </div>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="p-3 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors">
              <Github size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">GitHub</h3>
              <p className="text-gray-300">Projects and Contributions</p>
            </div>
          </a>
        </div>

        {/* Mensaje opcional al final */}
        <p className="text-center text-gray-400 mt-8">
          Don't hesitate to contact me! I am available for new opportunities and
          collaborations.
        </p>
      </div>
    </section>
  );
};

export default Contact;
