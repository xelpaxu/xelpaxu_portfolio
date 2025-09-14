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
    <div className="w-20 h-full bg-[#25292f] text-gray-400 flex flex-col items-center py-4 border-r border-gray-800">
      {/* Top section */}
      <div className="flex flex-col gap-8 flex-1">
        {/* Files */}
        <button
          onClick={() => setActiveFile("home.jsx")}
          className={`relative flex items-center justify-center ${
            activeFile === "home.jsx" ? "text-white" : "hover:text-white"
          }`}
        >
          {/* Left active line */}
          {activeFile === "home.jsx" && (
            <span className="absolute left-0 h-10 w-1 bg-[#4ec9b0] rounded-r"></span>
          )}
          <VscFiles size={30} />
        </button>

        {/* GitHub */}
        <button className="hover:text-white">
          <VscGithubAlt size={30} />
        </button>

        {/* Code */}
        <button className="hover:text-white">
          <VscCode size={30} />
        </button>

        {/* Extensions */}
        <button className="hover:text-white">
          <VscExtensions size={30} />
        </button>

        {/* Mail */}
        <button className="hover:text-white">
          <VscMail size={30} />
        </button>
      </div>

      {/* Bottom: Settings */}
      <div className="mb-4">
        <button className="hover:text-white">
          <VscSettingsGear size={30} />
        </button>
      </div>
    </div>
  );
}
