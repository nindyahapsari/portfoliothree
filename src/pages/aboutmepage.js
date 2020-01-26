import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Aboutmecomponent from "../components/aboutme";
import Skills from "../components/skills";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Particles from "react-particles-js";

const canvas = {
  position: "fixed",
  zIndex: "-10 ",
  left: "0",
  top: "0",
  width: "100%",
  height: "100vh"
};

function Aboutmepage() {
  return (
    <div>
      <Particles
        style={canvas}
        params={{
          particles: {
            number: {
              value: 100
            },
            size: {
              value: 2
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <Navbar />
      <Aboutmecomponent />
      <Skills />
    </div>
  );
}

export default Aboutmepage;
