import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaBrain, FaDocker, FaCloud, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiPython, SiJavascript, SiTailwindcss, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-5xl mb-4 text-white drop-shadow-lg" />, 
      skills: ["React", "Tailwind", "Framer Motion", "CSS"],
      gradient: "from-[#00c6ff] to-[#0072ff]", // Cyan to Blue
      shadow: "shadow-blue-500/50"
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-5xl mb-4 text-white drop-shadow-lg" />, 
      skills: ["Node.js", "Express", "REST APIs"],
      gradient: "from-[#11998e] to-[#38ef7d]", // Dark Green to Light Green
      shadow: "shadow-green-500/50"
    },
    {
      title: "Cloud Computing",
      icon: <FaAws className="text-5xl mb-4 text-white drop-shadow-lg" />, 
      skills: ["EC2", "S3", "IAM", "RDS"],
      gradient: "from-[#bc4e9c] to-[#f80759]", // Purple to Pink/Red
      // Adjusted based on screenshot which is very purple/violet
      customGradient: "bg-gradient-to-b from-purple-500 to-fuchsia-600",
      shadow: "shadow-purple-500/50"
    },
    {
      title: "Languages",
      icon: <FaJava className="text-5xl mb-4 text-white drop-shadow-lg" />, 
      skills: ["Java", "Python", "JavaScript"],
      gradient: "from-[#ff416c] to-[#ff4b2b]", // Red to Orange
      customGradient: "bg-gradient-to-b from-red-500 to-pink-600",
      shadow: "shadow-red-500/50"
    },
    {
      title: "DevOpps",
      icon: <FaDocker className="text-5xl mb-4 text-white drop-shadow-lg" />, 
      skills: ["Docker", "Jenkins", "Kubernates", "GitHub"],
      gradient: "from-[#00c6ff] to-[#0072ff]", // Cyan to Blue
      shadow: "shadow-blue-500/50"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#100520] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-cyan-400">Technical</span> Expertise
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`
                ${category.customGradient ? category.customGradient : `bg-gradient-to-b ${category.gradient}`}
                rounded-2xl p-8 text-center text-white 
                transform transition duration-300 hover:scale-105 hover:shadow-2xl ${category.shadow}
                flex flex-col items-center justify-center min-h-[320px]
              `}
            >
              {/* Icon */}
              <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 tracking-wide">{category.title}</h3>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-100 font-medium text-lg bg-black/10 px-4 py-1 rounded-full w-full">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;