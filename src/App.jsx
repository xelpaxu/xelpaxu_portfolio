import TopBar from "./components/TopBar.jsx";
import MainSideBar from "./components/MainSideBar.jsx";
import ExplorerSideBar from "./components/ExplorerSideBar.jsx";
import TopBarNavigator from "./components/TopBarNavigator.jsx";
import { useState } from "react";

function App() {
  const [activeFile, setActiveFile] = useState("home.jsx");
  const [searchOpen, setSearchOpen] = useState(false);

  // Simple content mapping for demonstration
  const fileContents = {
    "home.jsx": <div className="p-8 text-white">Home.jsx content</div>,
    "projects.html": <div className="p-8 text-white">Projects.html content</div>,
    "contact.css": <div className="p-8 text-white">Contact.css content</div>,
    "skills.js": <div className="p-8 text-white">Skills.js content</div>,
    "github.md": <div className="p-8 text-white">Github.md content</div>,
  };

  return (
    <div className="h-screen flex flex-col bg-[#25282e]">
      {/* Topbar */}
      <TopBar setSearchOpen={setSearchOpen} />
      <div className="flex flex-1">
        <MainSideBar activeFile={activeFile} setActiveFile={setActiveFile}/>
        {/* Explorer Panel */}
        <ExplorerSideBar activeFile={activeFile} setActiveFile={setActiveFile}/>
        <div className="flex flex-col flex-1 bg-[#1e2528]">
          {/* TopBarNavigator with navigation */}
          <div className={searchOpen ? "pointer-events-none" : ""}>
            <TopBarNavigator activeFile={activeFile} setActiveFile={setActiveFile} />
          </div>
          {/* Main editor area */}
          <div className="flex-1 overflow-auto">
            {fileContents[activeFile] || <div className="p-8 text-white">File not found</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
