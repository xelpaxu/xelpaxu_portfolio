import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const projects = [
    {
      id: 1,
      title: "CICTZONE",
      year: "2nd Year | Intro to AI",
      description:
        "a 2d pixel shooting game using pygame | 2nd Year Final Output - Intro to AI\nCSP | Adversarial Search | DFS",
      image: "/cictzone_game.png",
      techStack: [
        { name: "Python", color: "text-yellow-400 border-yellow-400 shadow-yellow-400/60" },
        { name: "Pygame", color: "text-green-400 border-green-400 shadow-green-400/60" },
        { name: "AI", color: "text-pink-400 border-pink-400 shadow-pink-400/60" },
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      repo: "https://github.com/xelpaxu/CICTZONE",
    },
    {
      id: 2,
      title: "PETMEDIX",
      year: "2nd Year | OOP",
      description:
        "PetMedix is a simple clinic management system built with Python, PySide6 for UI, and MariaDB for database handling.",
      image: "/petmedix_landing.png",
      techStack: [
        { name: "Python", color: "text-yellow-400 border-yellow-400 shadow-yellow-400/60" },
        { name: "PySide6", color: "text-green-400 border-green-400 shadow-green-400/60" },
        { name: "MariaDB", color: "text-blue-400 border-blue-400 shadow-blue-400/60" },
      ],
      video: "https://www.youtube.com/embed/ysz5S6PUM-U",
      repo: "https://github.com/xelpaxu/PETMEDIX",
    },
    {
      id: 3,
      title: "BIGBREW POS",
      year: "3rd Year | AppDev",
      description:
        "A POS system built with Python, Flet for cross-platform UI, and MariaDB/XAMPP for database management.",
      image: "/bigbrew_pos.png",
      techStack: [
        { name: "Python", color: "text-yellow-400 border-yellow-400 shadow-yellow-400/60" },
        { name: "Flet", color: "text-teal-400 border-teal-400 shadow-teal-400/60" },
        { name: "MariaDB", color: "text-blue-400 border-blue-400 shadow-blue-400/60" },
        { name: "XAMPP", color: "text-orange-400 border-orange-400 shadow-orange-400/60" },
      ],
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
      repo: "https://github.com/xelpaxu/BIGBREW-POS",
    },
    {
      id: 4,
      title: "YUHUM",
      year: "3rd Year | Web Systems",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
      image: "/yuhum_landing.png",
      techStack: [
        { name: "WordPress", color: "text-blue-400 border-blue-400 shadow-blue-400/60" },
        { name: "HTML5", color: "text-orange-400 border-orange-400 shadow-orange-400/60" },
        { name: "CSS3", color: "text-sky-400 border-sky-400 shadow-sky-400/60" },
        { name: "WooCommerce", color: "text-purple-400 border-purple-400 shadow-purple-400/60" },
      ],
      preview: "/YUHUM/index.html",   // ✅ Local HTML preview inside /public
      repo: "https://github.com/xelpaxu/YUHUM",
    },
    {
      id: 5,
      title: "SYMPTROXI",
      year: "3rd Year | Web Systems",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
      image: "/yuhum_landing.png",
      techStack: [
        { name: "WordPress", color: "text-blue-400 border-blue-400 shadow-blue-400/60" },
        { name: "HTML5", color: "text-orange-400 border-orange-400 shadow-orange-400/60" },
        { name: "CSS3", color: "text-sky-400 border-sky-400 shadow-sky-400/60" },
        { name: "WooCommerce", color: "text-purple-400 border-purple-400 shadow-purple-400/60" },
      ],
      preview: "/YUHUM/index.html",   // ✅ Local HTML preview inside /public
      repo: "https://github.com/xelpaxu/YUHUM",
    },
    {
      id: 6,
      title: "FINMAN-age",
      year: "3rd Year | Web Systems",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
      image: "/yuhum_landing.png",
      techStack: [
        { name: "WordPress", color: "text-blue-400 border-blue-400 shadow-blue-400/60" },
        { name: "HTML5", color: "text-orange-400 border-orange-400 shadow-orange-400/60" },
        { name: "CSS3", color: "text-sky-400 border-sky-400 shadow-sky-400/60" },
        { name: "WooCommerce", color: "text-purple-400 border-purple-400 shadow-purple-400/60" },
      ],
      preview: "/YUHUM/index.html",   // ✅ Local HTML preview inside /public
      repo: "https://github.com/xelpaxu/YUHUM",
    }
  ];

  return (
    <section className="bg-[#1e2528] min-h-screen px-4 py-16">
      <div className="max-w-7xl mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_12px_#38bdf8]">
            Our Work
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Projects I made together with the projects that I have contributed
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative">
                <div className="bg-slate-700 h-48 flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_#3b82f6]">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-xs rounded-md border border-current ${tech.color}
                        font-medium transition duration-300 hover:shadow-[0_0_8px] hover:shadow-current`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                  >
                    <span>Open Repo</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setPreviewUrl(project.preview || project.video);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <span>Live preview</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-xl w-full h-full max-w-7xl max-h-[90vh] overflow-hidden shadow-lg flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold">Project Demo</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1">
              {previewUrl.includes("youtube.com") ? (
                <iframe
                  src={previewUrl}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <iframe
                  src={previewUrl}
                  title="Website Preview"
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
