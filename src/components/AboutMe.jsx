// src/components/AboutMe.jsx
import React from "react";
import { Download } from "lucide-react";
import { User } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <User className="text-blue-600" size={40} />
          ABOUT ME
        </h2>
        <p className="text-lg mb-8">
          Detail-oriented programmer offering excellent analytical skills and
          the important ability to function well both independently and in
          fast-paced team environments. Focused on creating clear, robust codes
          with exceptional security.
        </p>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="/cv/CV-profesionalN.pdf"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            CV en Español
          </a>
          <a
            target="_blank"
            href="/cv/CV-professionalNI2.pdf"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download size={20} />
            CV in English
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
