import {
  VscFiles,
  VscGithubAlt,
  VscExtensions,
  VscCode,
  VscMail,
  VscSettingsGear,
} from "react-icons/vsc";

export default function MainSideBar({ activeFile, setActiveFile }) {
  return (
    <div className="w-20 h-full bg-[#25292f] text-gray-400 flex flex-col items-center py-4 border-r border-gray-800 relative">
      {/* Top section */}
      <div className="flex flex-col gap-8 flex-1 w-full items-center">
        {/* Files */}
        <button
          onClick={() => setActiveFile("home.jsx")}
          className={`relative flex items-center justify-center w-full ${
            activeFile === "home.jsx" ? "text-white" : "hover:text-white"
          }`}
        >
          {activeFile === "home.jsx" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-[#4ec9b0] rounded-r" style={{zIndex:1}}></span>
          )}
          <VscFiles size={30} />
        </button>

        {/* GitHub */}
        <button
          onClick={() => setActiveFile("github.md")}
          className={`relative flex items-center justify-center w-full ${
            activeFile === "github.md" ? "text-white" : "hover:text-white"
          }`}
        >
          {activeFile === "github.md" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-[#4ec9b0] rounded-r" style={{zIndex:1}}></span>
          )}
          <VscGithubAlt size={30} />
        </button>

        {/* Code */}
        <button
          onClick={() => setActiveFile("skills.js")}
          className={`relative flex items-center justify-center w-full ${
            activeFile === "skills.js" ? "text-white" : "hover:text-white"
          }`}
        >
          {activeFile === "skills.js" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-[#4ec9b0] rounded-r" style={{zIndex:1}}></span>
          )}
          <VscCode size={30} />
        </button>

        {/* Extensions */}
        <button
          onClick={() => setActiveFile("projects.html")}
          className={`relative flex items-center justify-center w-full ${
            activeFile === "projects.html" ? "text-white" : "hover:text-white"
          }`}
        >
          {activeFile === "projects.html" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-[#4ec9b0] rounded-r" style={{zIndex:1}}></span>
          )}
          <VscExtensions size={30} />
        </button>

        {/* Mail */}
        <button
          onClick={() => setActiveFile("contact.css")}
          className={`relative flex items-center justify-center w-full ${
            activeFile === "contact.css" ? "text-white" : "hover:text-white"
          }`}
        >
          {activeFile === "contact.css" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-[#4ec9b0] rounded-r" style={{zIndex:1}}></span>
          )}
          <VscMail size={30} />
        </button>
      </div>

      {/* Bottom: Settings */}
      <div className="mb-4 w-full flex items-center justify-center">
        <button className="hover:text-white">
          <VscSettingsGear size={30} />
        </button>
      </div>
    </div>
  );
}
