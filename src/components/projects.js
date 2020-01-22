import React from "react";
import "./projects.css";
import Projctlist from "./projectlist";

function projects() {
  return (
    <div className="container-fluid">
      <div>
        <div className="title-container row mx-5 ">
          <div className="project-container  col-lg-4">
            <h2 className="title font-weight-bold mx-5 text-left">Projects</h2>
          </div>
          <div className="subtitle-container col-lg-6 col-md-6">
            <h2 className="sub-title font-weight-bold mx-5 text-left">
              Coding and development projects I've done
            </h2>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="container mt-5">
          <div className="smTitle-container row justify-content-center mx-5">
            <div className="col-lg-3 col-md-3">
              <p className="text-center">Type</p>
            </div>
            <div className="col-lg-5 col-md-5">
              <p className="text-center">Project</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <p className="text-center">Client</p>
            </div>
          </div>
          <Projctlist
            type="Android app"
            project="This is android project"
            client="Side project"
          />
          <Projctlist
            type="Website"
            project="This is Website project"
            client="IBM"
          />
          <Projctlist
            type="Web app"
            project="This is another modern webapp project"
            client="Bayer"
          />
        </div>
      </div>
    </div>
  );
}

export default projects;
