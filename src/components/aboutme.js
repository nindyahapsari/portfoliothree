import React from "react";
import "./aboutme.css";
import aboutmeMobile from "../images/aboutme-mobile.JPG";

function aboutme() {
  return (
    <div className="container-fluid aboutme-container">
      <div className="row mt-5 justify-content-center">
        <div className="col-lg-4">
          <img className="img-fluid" src={aboutmeMobile} />
        </div>
        <div className="mt-5 col-lg-6">
          <div>
            <p className="text-dark">
              {" "}
              I’m Nindya (neen-dee-yeaa). Sometimes people call me “nin” :D I’m
              a Frontend developer living in Cologne, Germany and currently
              working in UXTAG studio.
            </p>
          </div>
          <div>
            <p className="text-dark">
              coming from technical background, i quickly jump into web
              development with the ambition to create a functional and reliable
              web experience. By being involve in different projects I’m
              mastering my skills in various digital creation ranging from
              digital media to web development. I’m a curious and passionate
              person that are always up for a new challenges and learning new
              things
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutme;
