import TopBar from "./components/TopBar.jsx";
import MainSideBar from "./components/MainSideBar.jsx";
import ExplorerSideBar from "./components/ExplorerSideBar.jsx";
import TopBarNavigator from "./components/TopBarNavigator.jsx";
import { useState } from "react";

function App() {
  const [activeFile, setActiveFile] = useState("home.tsx")

  return (
    <div className="h-screen flex flex-col bg-[#25282e]">
      {/* Topbar */}
      <TopBar />
      <div className="flex flex-1">
        <MainSideBar activeFile={activeFile} setActiveFile={setActiveFile}/>

        {/* Explorer Panel */}
        <ExplorerSideBar activeFile={activeFile} setActiveFile={setActiveFile}/>


        <div className="flex flex-col flex-1 bg-[#1e2528]">
          {/* Explorer Panel */}
          <TopBarNavigator />
        </div>
      </div>
    </div>
  );
}

export default App;
