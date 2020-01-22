import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
