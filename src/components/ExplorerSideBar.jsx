import { VscChevronDown } from "react-icons/vsc";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiMarkdown } from "react-icons/si";

export default function ExplorerSideBar({ activeFile, setActiveFile }) {
  const files = [
    { name: "home.jsx", icon: <FaReact size={18} className="text-[#4ec9b0]" /> },
    { name: "about.html", icon: <FaHtml5 size={18} className="text-[#e37933]" /> },
    { name: "contact.css", icon: <FaCss3 size={18} className="text-[#0db9d7]" /> },
    { name: "projects.js", icon: <SiJavascript size={18} className="text-[#dcdcaa]" /> },
    { name: "github.md", icon: <SiMarkdown size={18} className="text-[#519aba]" /> },
  ];

  return (
    <div className="w-64 bg-[#1e2528] text-white border-r border-[#3c3c3c] p-2 text-sm">
      {/* Title */}
      <p className="text-sm font-semibold text-[#858585] mb-5">EXPLORER</p>

      {/* Folder */}
      <div className="flex items-center gap-1 cursor-pointer mb-2">
        <VscChevronDown size={20} className="text-[#cccccc]" />
        <span className="text-[#c5c5c5] text-sm font-semibold">PORTFOLIO</span>
      </div>

      {/* Files */}
      <ul className="ml-2 space-y-0">
        {files.map((file) => (
          <li
            key={file.name}
            onClick={() => setActiveFile(file.name)}
            className={`flex items-center gap-2 text-sm px-2 py-1 w-full rounded cursor-pointer ${
              activeFile === file.name
                ? "bg-[#25282e] text-white"
                : "text-gray-300 hover:bg-[#25282e]"
            }`}
          >
            {file.icon} {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
