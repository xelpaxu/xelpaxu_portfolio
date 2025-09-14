import { useState } from "react";
import { Search } from "lucide-react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiMarkdown } from "react-icons/si";

export default function TopBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Files with icons
  const files = [
    { name: "home.jsx", icon: <FaReact size={16} className="text-[#4ec9b0]" /> },
    { name: "about.html", icon: <FaHtml5 size={16} className="text-[#e37933]" /> },
    { name: "contact.css", icon: <FaCss3 size={16} className="text-[#0db9d7]" /> },
    { name: "projects.js", icon: <SiJavascript size={16} className="text-[#dcdcaa]" /> },
    { name: "github.md", icon: <SiMarkdown size={16} className="text-[#519aba]" /> },
  ];

  const filtered = files.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full h-10 bg-[#1e2528] text-[#cccccc] flex items-center justify-between px-4 text-sm font-medium relative border-b border-gray-900">
      {/* Left side: Logo + Menu */}
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <a href="#">
            <img
              src="src/assets/profile.webp"
              alt="my profile"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-0 text-sm text-white">
          {[
            "File",
            "Edit",
            "Selection",
            "View",
            "Go",
            "Run",
            "Terminal",
            "Help",
          ].map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:bg-gray-700 px-3 py-1 rounded transition"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* Center: Search / Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[600px]">
        <div className="relative">
          {/* Idle state */}
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-md text-gray-400 text-xs border border-gray-400 border-opacity-20 shadow-sm cursor-pointer justify-center"
            >
              <Search size={14} />
              <span className="text-xs text-gray-300">xelpaxu.portfolio</span>
            </div>
          )}

          {/* Active search */}
          {isOpen && (
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-md text-gray-400 text-xs border border-gray-400 border-opacity-20 shadow-sm">
              <Search size={14} />
              <input
                type="text"
                autoFocus
                placeholder="Search files..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => {
                  setTimeout(() => {
                    setIsOpen(false);
                    setQuery("");
                  }, 200);
                }}
                className="bg-transparent outline-none text-gray-200 flex-1"
              />
            </div>
          )}

          {/* Dropdown results */}
          {isOpen && query && (
            <ul className="absolute top-9 left-0 w-full bg-[#1e1e1e] border border-gray-700 rounded-md shadow-lg text-sm text-gray-200 max-h-60 overflow-y-auto z-50">
              {filtered.length > 0 ? (
                filtered.map((file) => (
                  <li
                    key={file.name}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-[#25282e] cursor-pointer"
                    onMouseDown={() => {
                      console.log("Open file:", file.name);
                      setIsOpen(false);
                      setQuery("");
                    }}
                  >
                    {file.icon} {file.name}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No files found</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
