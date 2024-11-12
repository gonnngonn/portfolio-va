// src/components/Experience.jsx
import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Intern",
      company:
        "CENTRO INTEGRAL ANIMAL MUNICIPAL - MUNICIPALITY OF SAN MIGUEL DE TUCUMÁN",
      period: "February 2024 - September 2024",
      description: "Database management",
    },
    {
      title: "English Tutor",
      period: "2023 - 2024",
      description: "For kids and teens",
    },
  ];

  return (
    <section id="experiencia" className="section-container bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-blue-600" size={40} />
          EXPERIENCE
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
