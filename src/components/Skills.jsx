import React from "react";
import { Cpu, Code2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "C#", "C++", "Python"],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "RESTful APIs",
        "MySQL Server",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "VS Code",
        "Docker",
        "Tailwind",
        "Postman",
        "Thunder Client",
        "Scrum",
        "JSON",
        "npm",
        "Webpack",
        "GitHub",
      ],
    },
  ];

  return (
    <section id="habilidades" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="text-blue-600" size={40} />
          SKILLS
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Code2 className="text-blue-500" size={24} />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 hover:shadow-md hover:border-blue-200 hover:bg-white transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="font-medium text-gray-700 text-center">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
