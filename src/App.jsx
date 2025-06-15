import React from "react";
import Sidebar from "./layout/Sidebar/Sidebar";
import "./index.css"
import MainContent from "./layout/MainContent/MainContent";

const App = () => {
  return (
    <main>
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default App;
