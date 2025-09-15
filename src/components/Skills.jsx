import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaJava, 
  FaPython, 
  FaFigma
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiTailwindcss, 
  SiMariadb, 
  SiFlutter 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; 
import { VscTools } from "react-icons/vsc"; // generic placeholder

export default function Skills() {
  // Top row skills (with per-skill glow color)
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

  // Bottom row skills (with per-skill glow color)
  const skillsRow2 = [
    { name: "React JS", icon: <FaReact size={40} className="text-cyan-400" />, glow: "rgba(34,211,238,0.32)" },
    { name: "MariaDB", icon: <SiMariadb size={40} className="text-sky-500" />, glow: "rgba(56,189,248,0.28)" },
    { name: "Flet", icon: <VscTools size={40} className="text-green-500" />, glow: "rgba(34,197,94,0.30)" }, // placeholder
    { name: "PySide6", icon: <VscTools size={40} className="text-teal-400" />, glow: "rgba(20,184,166,0.30)" }, // placeholder
    { name: "Flutter", icon: <SiFlutter size={40} className="text-blue-400" />, glow: "rgba(96,165,250,0.32)" },
    { name: "React Native", icon: <TbBrandReactNative size={40} className="text-cyan-500" />, glow: "rgba(34,211,238,0.32)" },
    { name: "Figma", icon: <FaFigma size={40} className="text-pink-500" />, glow: "rgba(236,72,153,0.30)" },
  ];

  return (
    <div className="skills-container relative w-full flex justify-center items-center py-20">
      {/* Section */}
        <section
        className="relative text-white py-20 px-8 rounded-2xl max-w-7xl w-full"
        >
        <div className="absolute inset-0 rounded-2xl border border-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.25)] pointer-events-none" />
        
        {/* Section content */}
        <div className="relative z-10">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">What I do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Here are the technologies and tools I use in development.
            </p>
            </div>
        </div>

        {/* Left Vertical Label */}
        <div className="absolute left-6 top-1/2 -rotate-90 text-yellow-400 font-semibold tracking-wide pointer-events-none">
          Skills
        </div>

        {/* Row 1 - marquee */}
        <div className="skill-row">
          <div className="flex gap-8 items-center animate-marquee">
            {[...skillsRow1, ...skillsRow1].map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-[#111418] rounded-lg flex flex-col items-center justify-center p-7 min-w-[160px] min-h-[120px]"
                style={{ ['--glow']: skill.glow }}
              >
                {skill.icon}
                <p className="mt-3 text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - marquee reverse */}
        <div className="skill-row mt-0">
          <div className="flex gap-8 items-center animate-marquee-reverse">
            {[...skillsRow2, ...skillsRow2].map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-[#111418] rounded-lg flex flex-col items-center justify-center p-7 min-w-[160px] min-h-[120px]"
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
        /* marquee */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 18s linear infinite;
        }

        /* allow glow to overflow vertically and provide breathing room */
        .skill-row {
          position: relative;
          overflow-x: hidden;
          overflow-y: visible;
          padding-top: 24px;
          padding-bottom: 24px;
        }

        /* card base + hover uses CSS variable --glow */
        .skill-card {
          transition: transform .24s ease, filter .24s ease;
          will-change: transform, filter;
          /* ensure the filter drawing doesn't get clipped by own element’s overflow */
          /* (parent rows already allow visible overflow) */
        }
        .skill-card:hover {
            transform: translateY(-6px) scale(1.02);
            filter: drop-shadow(0 4px 14px var(--glow));
        }

        /* small accessibility/touch fallback: remove hover transform on touch devices */
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
