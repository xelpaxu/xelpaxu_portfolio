import React from "react";
import TopBar from "../src/TopBar";
import SideBar from "../src/SideBar";
import MainContent from "../src/MainContent";

export default function Home() {
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
      <TopBar />
      <div style={{display: "flex", flex: 1, minHeight: 0}}>
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}
