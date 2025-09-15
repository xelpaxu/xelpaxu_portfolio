import { useEffect, useRef, useState } from "react";  // ⬅️ added useEffect + useRef
import { Search } from "lucide-react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiMarkdown } from "react-icons/si";

export default function TopBar({ setSearchOpen, setTerminalOpen, terminalOpen, setActiveFile }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showTerminalDropdown, setShowTerminalDropdown] = useState(false);

  const dropdownRef = useRef(null); // ⬅️ for outside click detection

  // Close Terminal dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTerminalDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Files with icons
  const files = [
    { name: "home.jsx", icon: <FaReact size={16} className="text-[#4ec9b0]" /> },
    { name: "projects.html", icon: <FaHtml5 size={16} className="text-[#e37933]" /> },
    { name: "contact.css", icon: <FaCss3 size={16} className="text-[#0db9d7]" /> },
    { name: "skills.js", icon: <SiJavascript size={16} className="text-[#dcdcaa]" /> },
    { name: "github.md", icon: <SiMarkdown size={16} className="text-[#519aba]" /> },
  ];

  const filtered = files.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle file selection from search
  const handleFileSelect = (fileName) => {
    setActiveFile(fileName);
    setIsOpen(false);
    setQuery("");
  };

  // Handle terminal actions
  const handleNewTerminal = () => {
    setTerminalOpen(true);
    setShowTerminalDropdown(false); // 🔥 close the toggle immediately
  };

  const handleCloseTerminal = () => {
    setTerminalOpen(false);
    setShowTerminalDropdown(false); // 🔥 close the toggle immediately
  };

  // Handle search state
  const handleSearchFocus = () => {
    setIsOpen(true);
    setSearchOpen(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
      setQuery("");
      setSearchOpen(false);
    }, 200);
  };

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
        <nav className="flex items-center gap-0 text-sm text-white relative">
          {["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"].map((item) => (
            <span
              key={item}
              className="cursor-pointer px-3 py-1 rounded transition relative 
                         hover:text-white hover:shadow-[0_0_6px_#3b82f6]" // ⬅️ blue glow effect
              onClick={item === "Terminal" ? () => setShowTerminalDropdown((v) => !v) : undefined}
            >
              {item}
              {/* Dropdown for Terminal */}
              {item === "Terminal" && showTerminalDropdown && (
                <div
                  ref={dropdownRef} // ⬅️ apply ref
                  className="absolute left-0 top-full mt-1 bg-[#23272e] border border-gray-700 rounded shadow-lg z-50 min-w-[140px]"
                >
                  {!terminalOpen && (
                    <div
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                      onClick={handleNewTerminal}
                    >
                      New Terminal
                    </div>
                  )}
                  {terminalOpen && (
                    <div
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                      onClick={handleCloseTerminal}
                    >
                      Close Terminal
                    </div>
                  )}
                </div>
              )}
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
              onClick={handleSearchFocus}
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
                onBlur={handleSearchBlur}
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
                    onMouseDown={() => handleFileSelect(file.name)}
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
