import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMarkdown } from "react-icons/si";
import { VscClose } from "react-icons/vsc";

export default function TopBarNavigator({ activeFile, setActiveFile }) {
  const tabs = [
    { name: "home.jsx", icon: <FaReact size={14} className="text-[#4ec9b0]" /> },
    { name: "about.html", icon: <FaHtml5 size={14} className="text-[#e37933]" /> },
    { name: "contact.css", icon: <FaCss3Alt size={14} className="text-[#0db9d7]" /> },
    { name: "projects.js", icon: <SiJavascript size={14} className="text-[#dcdcaa]" /> },
    { name: "github.md", icon: <SiMarkdown size={14} className="text-[#519aba]" /> },
  ];

  return (
    <div className="w-full h-8 bg-[#1e2528] border-b border-[#3c3c3c] flex items-center text-sm">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => setActiveFile(tab.name)}
          className={`group flex items-center gap-2 px-4 h-full border-r border-[#3c3c3c] cursor-pointer relative ${
            activeFile === tab.name
              ? "text-white bg-[#1e2528]"
              : "text-[#cccccc] hover:bg-[#2a2d2e]"
          }`}
        >
          {/* Active top line */}
          {activeFile === tab.name && (
            <span className="absolute top-0 left-0 w-full h-[2px] bg-[#4ec9b0]"></span>
          )}

          {tab.icon}
          {tab.name}

          {/* Close button */}
          <div className="ml-2 w-4 h-4 flex items-center justify-center">
            <VscClose
              size={14}
              className="opacity-0 group-hover:opacity-100 text-[#858585] hover:text-white hover:bg-[#3c3c3c] rounded-sm cursor-pointer transition-opacity"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
