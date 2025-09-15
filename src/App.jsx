import TopBar from "./components/TopBar.jsx";
import MainSideBar from "./components/MainSideBar.jsx";
import ExplorerSideBar from "./components/ExplorerSideBar.jsx";
import TopBarNavigator from "./components/TopBarNavigator.jsx";
import Terminal from "./components/Terminal.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { useState } from "react";

function App() {
  const [activeFile, setActiveFile] = useState("home.jsx");
  const [searchOpen, setSearchOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Simple content mapping for demonstration
  const fileContents = {
    "home.jsx": <Home />,
    "projects.html": <Projects />,
    "contact.css": <Contact />,
    "skills.js": <Skills />,
    "github.md": <div className="p-8 text-white">Github.md content</div>,
  };

  return (
    <div className="h-screen flex flex-col bg-[#25282e] overflow-hidden">
      {/* Topbar - Pass terminal functions */}
      <TopBar 
        setSearchOpen={setSearchOpen} 
        setTerminalOpen={setTerminalOpen}
        terminalOpen={terminalOpen}
        setActiveFile={setActiveFile}  // Add this line
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Main sidebar */}
        <MainSideBar activeFile={activeFile} setActiveFile={setActiveFile} />

        {/* Explorer sidebar */}
        <ExplorerSideBar activeFile={activeFile} setActiveFile={setActiveFile} />

        {/* Main content area */}
        <div className="flex flex-col flex-1 bg-[#1e2528] overflow-hidden">
          {/* TopBarNavigator with navigation */}
          <div className={searchOpen ? "pointer-events-none" : ""}>
            <TopBarNavigator
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          </div>

          {/* Main editor area (only scrollable section) */}
          <div className={`flex-1 overflow-y-auto ${terminalOpen ? 'pb-[300px]' : ''}`}>
            {fileContents[activeFile] || (
              <div className="p-8 text-white">File not found</div>
            )}
          </div>
        </div>
      </div>

      {/* Terminal Component */}
      <Terminal 
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        setActiveFile={setActiveFile}
      />
    </div>
  );
}

export default App;