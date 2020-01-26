import React from "react";
import "./projects.css";
import Projectlist from "./projectlist";

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

          <Projectlist
            type="Website"
            project="Uxtag 2nd version of website. created with JS, HTML, SCSS, Jquery"
            link="https:www.uxtag.de"
            client="Uxtag studio"
          />

          <Projectlist
            type="Website"
            project="2st version of my personal website, created with React, css, Three Js, WebGL"
            link="https://github.com/nindyahapsari/personal_web"
            client="Side Project"
          />

          <Projectlist
            type="Website"
            project="1st version of my personal website, created with React, Scss"
            link="https://github.com/nindyahapsari/personal_web"
            client="Side Project"
          />
          <Projectlist
            type="Wordpress Custom Theme"
            project="Wordpress custom theme build using html, css and php"
            link="https://github.com/nindyahapsari/vet-clinic"
            client="Side Project"
          />
          <Projectlist
            type="Website"
            project="Website that build with React JS and styled using css"
            link="https://github.com/nindyahapsari/Resort"
            client="Side Project"
          />
          <Projectlist
            type="Android app"
            project="Android App that can detect plants. This app intergrated with tensorflow"
            link="https://github.com/nindyahapsari/plants-id"
            client="Side Project"
          />
          <Projectlist
            type="Android app"
            project="Easy to use light weight android app. This app is intergrated with SQLite and Weather API"
            link="https://github.com/nindyahapsari/WeatherApp_Sunshine"
            client="Side Project"
          />
        </div>
      </div>
    </div>
  );
}

export default projects;
