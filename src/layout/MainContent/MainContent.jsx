import React from "react";
import "../../index.css";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Experience from "../../pages/Experience/Experience";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Navbar from "../../components/Navbar/Navbar";

const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default MainContent;
