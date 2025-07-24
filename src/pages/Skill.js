import React, { useState, useEffect } from "react";

const Skill = () => {
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);

  const skills = [
    {
      section: "USING NOW:",
      items: [
        {
          name: "HTML5",
          icon: "🟧",
          color: "bg-orange-500",
          textColor: "text-white",
        },
        {
          name: "CSS3",
          icon: "🔷",
          color: "bg-blue-500",
          textColor: "text-white",
        },
        {
          name: "SASS",
          icon: "💗",
          color: "bg-pink-400",
          textColor: "text-white",
        },
        {
          name: "JAVASCRIPT",
          icon: "🟨",
          color: "bg-yellow-400",
          textColor: "text-black",
        },
        {
          name: "REACT",
          icon: "⚛️",
          color: "bg-cyan-400",
          textColor: "text-black",
        },
        {
          name: "BOOTSTRAP",
          icon: "🟣",
          color: "bg-purple-600",
          textColor: "text-white",
        },
        {
          name: "GIT",
          icon: "🔶",
          color: "bg-red-500",
          textColor: "text-white",
        },
        {
          name: "FIGMA",
          icon: "🎨",
          color: "bg-gradient-to-r from-purple-400 to-pink-400",
          textColor: "text-white",
        },
      ],
    },
    {
      section: "LEARNING:",
      items: [
        {
          name: "NODE.JS",
          icon: "🟢",
          color: "bg-green-600",
          textColor: "text-white",
        },
        {
          name: "MYSQL",
          icon: "🐬",
          color: "bg-blue-600",
          textColor: "text-white",
        },
        {
          name: "MONGODB",
          icon: "🍃",
          color: "bg-green-500",
          textColor: "text-white",
        },
        {
          name: "TYPESCRIPT",
          icon: "TS",
          color: "bg-blue-700",
          textColor: "text-white",
        },
      ],
    },
    {
      section: "OTHER SKILLS:",
      items: [
        {
          name: "ENGLISH",
          icon: "🇬🇧",
          color: "bg-red-600",
          textColor: "text-white",
          subtitle: "C2",
        },
        {
          name: "SPANISH",
          icon: "🇪🇸",
          color: "bg-yellow-500",
          textColor: "text-black",
          subtitle: "B1/B2",
        },
        {
          name: "C++",
          icon: "C++",
          color: "bg-blue-800",
          textColor: "text-white",
        },
        { name: "C", icon: "C", color: "bg-gray-700", textColor: "text-white" },
      ],
    },
  ];

  // Auto-cycle through sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-highlight skills
  useEffect(() => {
    const interval = setInterval(() => {
      const allSkills = skills.flatMap((section) => section.items);
      const randomSkill =
        allSkills[Math.floor(Math.random() * allSkills.length)];
      setHighlightedSkill(randomSkill.name);

      setTimeout(() => {
        setHighlightedSkill(null);
      }, 1500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const SkillCard = ({ skill, index, sectionIndex }) => {
    const isHighlighted = highlightedSkill === skill.name;
    const isCurrentSection = currentSection === sectionIndex;

    return (
      <div
        className={`
          relative overflow-hidden rounded-lg transition-all duration-700 ease-out transform
          ${
            isHighlighted
              ? "scale-110 shadow-2xl shadow-yellow-400/50 ring-4 ring-yellow-400 z-20"
              : isCurrentSection
              ? "scale-105 shadow-lg hover:scale-110"
              : "scale-95 opacity-70"
          }
          ${skill.color} ${skill.textColor}
          cursor-pointer group
        `}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isCurrentSection ? "slideInUp 0.6s ease-out forwards" : "",
        }}
        onMouseEnter={() => setHighlightedSkill(skill.name)}
        onMouseLeave={() => setHighlightedSkill(null)}
      >
        {/* Cinematic spotlight effect */}
        {isHighlighted && (
          <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent animate-pulse" />
        )}

        {/* Scan line effect */}
        {isHighlighted && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
        )}

        <div className="relative p-6 text-center h-32 flex flex-col justify-center items-center">
          <div className="text-2xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
            {skill.icon}
          </div>
          <div className="text-sm font-bold tracking-wider">{skill.name}</div>
          {skill.subtitle && (
            <div className="text-xs opacity-80 mt-1">{skill.subtitle}</div>
          )}
        </div>

        {/* Particle effect overlay */}
        {isHighlighted && (
          <>
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-300" />
            <div className="absolute top-1/2 left-1 w-1 h-1 bg-white rounded-full animate-ping animation-delay-600" />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 relative overflow-hidden">
      {/* Background matrix effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-green-400 animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main title with cinematic entrance */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-glow">
            SKILLS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Section indicator */}
        <div className="flex justify-center mb-8 space-x-4">
          {skills.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentSection === index
                  ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Skills sections */}
        {skills.map((section, sectionIndex) => (
          <div
            key={section.section}
            className={`mb-16 transition-all duration-1000 ${
              currentSection === sectionIndex
                ? "opacity-100 transform translate-y-0"
                : "opacity-40 transform translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-center mb-8 tracking-widest">
              <span
                className={`${
                  currentSection === sectionIndex
                    ? "text-yellow-400 animate-pulse"
                    : "text-gray-400"
                }`}
              >
                {section.section}
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {section.items.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  sectionIndex={sectionIndex}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Status indicator */}
        <div className="fixed bottom-8 right-8 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-mono">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes matrix {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(168, 85, 247, 0.8),
              0 0 40px rgba(236, 72, 153, 0.3);
          }
        }

        .animate-matrix {
          animation: matrix linear infinite;
        }

        .animate-scan {
          animation: scan 1s ease-in-out;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Skill;
