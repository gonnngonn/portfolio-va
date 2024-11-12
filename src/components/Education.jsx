import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Programming Degree",
      institution:
        "Universidad Tecnologica Nacional - Facultad Regional Tucumán",
      period: "2022 - 2024",
      description: "Graduated",
    },
    {
      degree: "English Teacher",
      institution: "Instituto Cultural Argentino de Lenguas Vivas - Anglo",
      period: "2021 - 2023",
      description: "Not Completed",
    },
    {
      degree: "High School",
      institution: "Instituto General San Martin F49",
      period: "2015 - 2020",
      description: "Graduated",
    },
  ];

  return (
    <section id="estudios" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <GraduationCap className="text-blue-600" size={40} />
          EDUCATION
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-600">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                {edu.institution}
              </h4>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">
                    Logros destacados:
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
