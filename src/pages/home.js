import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Particles from "react-particles-js";

const canvas = {
  position: "fixed",
  zIndex: "999 ",
  left: "0",
  top: "0",
  width: "100%",
  height: "100vh"
};

function home() {
  return (
    <div>
      <Particles
        style={canvas}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: "right",
              speed: 0.1
            },
            size: {
              value: 2
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
      />
      <Header />
    </div>
  );
}

export default home;
