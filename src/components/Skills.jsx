import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaPython, FaFigma 
} from "react-icons/fa";
import { 
  SiCplusplus, SiTailwindcss, SiMariadb, SiFlutter 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; 
import { VscTools } from "react-icons/vsc"; // placeholder

export default function Skills() {
  const skillsRow1 = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" />, glow: "rgba(249,115,22,0.36)" },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" />, glow: "rgba(59,130,246,0.30)" },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" />, glow: "rgba(250,204,21,0.36)" },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" />, glow: "rgba(239,68,68,0.30)" },
    { name: "Python", icon: <FaPython size={40} className="text-blue-400" />, glow: "rgba(56,189,248,0.30)" },
    { name: "C++", icon: <SiCplusplus size={40} className="text-indigo-500" />, glow: "rgba(99,102,241,0.30)" },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-400" />, glow: "rgba(6,182,212,0.30)" },
    { name: "PHP", icon: <FaPhp size={40} className="text-indigo-300" />, glow: "rgba(139,92,246,0.30)" },
  ];

  const skillsRow2 = [
    { name: "React JS", icon: <FaReact size={40} className="text-cyan-400" />, glow: "rgba(34,211,238,0.32)" },
    { name: "MariaDB", icon: <SiMariadb size={40} className="text-sky-500" />, glow: "rgba(56,189,248,0.28)" },
    { name: "Flet", icon: <VscTools size={40} className="text-green-500" />, glow: "rgba(34,197,94,0.30)" },
    { name: "PySide6", icon: <VscTools size={40} className="text-teal-400" />, glow: "rgba(20,184,166,0.30)" },
    { name: "Flutter", icon: <SiFlutter size={40} className="text-blue-400" />, glow: "rgba(96,165,250,0.32)" },
    { name: "React Native", icon: <TbBrandReactNative size={40} className="text-cyan-500" />, glow: "rgba(34,211,238,0.32)" },
    { name: "Figma", icon: <FaFigma size={40} className="text-pink-500" />, glow: "rgba(236,72,153,0.30)" },
  ];

  return (
    <div className="relative w-full flex justify-center items-center py-20 bg-[#1e2528">
      <section className="relative text-white py-1 px-8 max-w-7xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
            <h2
            className="text-4xl md:text-6xl font-extrabold mb-6
                      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]
                      tracking-wide
                      transition-all duration-700
                      hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.8)]"
          >
            SKILLSET AND INTERESTS
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I use in development.
          </p>
        </div>

          {/* Row 1 - marquee */}
          <div className="skill-row">
            <div className="marquee-track animate-marquee">
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <div
                  key={index}
                  className="skill-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-7 min-w-[160px] min-h-[120px]"
                  style={{ ['--glow']: skill.glow }}
                >
                  {skill.icon}
                  <p className="mt-3 text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - marquee reverse */}
          <div className="skill-row mt-6">
            <div className="marquee-track animate-marquee-reverse">
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <div
                  key={index}
                  className="skill-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-7 min-w-[160px] min-h-[120px]"
                  style={{ ['--glow']: skill.glow }}
                >
                  {skill.icon}
                  <p className="mt-3 text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Animations & helper CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .skill-row {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
        }

        /* fade masks on each row */
        .skill-row::before,
        .skill-row::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px; /* width of fading zone */
          height: 100%;
          z-index: 15;
          pointer-events: none;
        }

        .skill-row::before {
          left: 0;
          background: linear-gradient(to right, rgba(30,37,40,1), rgba(30,37,40,0));
        }

        .skill-row::after {
          right: 0;
          background: linear-gradient(to left, rgba(30,37,40,1), rgba(30,37,40,0));
        }
        .marquee-track {
          display: flex;
          width: 200%; /* Important: ensures seamless loop */
          gap: 2rem;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        .skill-card {
          transition: transform .35s ease, filter .35s ease;
          will-change: transform, filter;
        }
        .skill-card:hover {
          transform: translateY(-8px) scale(1.08) rotate(-1.5deg);
          filter: drop-shadow(0 0 22px var(--glow)) drop-shadow(0 0 35px var(--glow));
        }
        @media (hover: none) {
          .skill-card:hover {
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </div>
  );
}
