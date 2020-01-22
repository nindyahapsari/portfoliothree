import React from "react";
import "./skills.css";

function skills() {
  return (
    <div className="container-fluid">
      <div>
        <div className="mx-5">
          <div className="stacks-container mt-5">
            <h2 className="font-weight-bold mx-5 text-left">
              My Tools and Stacks
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="first-skills col-lg-3 mt-5">
            <p>React JS</p>
            <p>Redux</p>
            <p>Anime JS</p>
            <p>SCSS/SASS</p>
            <p>JQuery</p>
            <p>Bootstrap</p>
            <p>Three JS</p>
            <p>GSAP</p>
          </div>
          <div className="second-skills col-lg-3 mt-5">
            <p>Wordpress</p>
            <p>GULP</p>
            <p>GIT</p>
            <p>AdobeXD</p>
            <p>Sketch</p>
            <p>Zeplin</p>
            <p>inVision</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
