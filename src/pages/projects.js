import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/projects";
import Particles from "react-particles-js";

const canvas = {
  position: "fixed",
  zIndex: "-10 ",
  left: "0",
  top: "0",
  width: "100%",
  height: "100vh"
};

function projects() {
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
      <Projects />
    </div>
  );
}

export default projects;
