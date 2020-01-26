import React from "react";
import "./projects.css";

function projectlist({ type, project, link, client }) {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="typeD-container col-lg-3 col-md-3 mt-5">
          <p className="text-center">{type}</p>
        </div>
        <div className="projectD-container col-lg-5 col-md-5 mt-5">
          <p>{project}</p>
          <a href={link}>Link</a>
        </div>
        <div className="clientD-container col-lg-4 col-md-4 mt-5">
          <p>{client}</p>
        </div>
      </div>
    </div>
  );
}

export default projectlist;
