import React from "react";
import Navbar from "../components/navbar";
import Aboutmecomponent from "../components/aboutme";
import Skills from "../components/skills";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function aboutmepage() {
  return (
    <div>
      <Navbar />
      <Aboutmecomponent />
      <Skills />
    </div>
  );
}

export default aboutmepage;
