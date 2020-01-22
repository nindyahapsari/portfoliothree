import React from "react";
import "./aboutme.css";
import aboutmeMobile from "../images/aboutme-mobile.JPG";

function aboutme() {
  return (
    <div className="container-fluid aboutme-container">
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-lg-4">
          <img className="img-fluid" src={aboutmeMobile} />
        </div>
        <div className="mt-5 col-lg-6">
          <div>
            <p className=" first-text">
              {" "}
              I’m{" "}
              <span>
                <b>Nindya</b>
              </span>{" "}
              (neen-dee-yeaa). Sometimes people call me “nin” :D I’m a{" "}
              <b>Frontend developer</b> living in <b>Cologne, Germany</b> and
              currently working in <b>UXTAG studio.</b>
            </p>
          </div>
          <div>
            <p className="second-text">
              coming from technical background, i quickly jump into{" "}
              <b>web development</b> with the ambition to create a functional
              and reliable web experience. By being involve in different
              projects I’m mastering my skills in various digital creation
              ranging from digital media to web development. I’m a{" "}
              <b>curious</b> and <b>passionate person</b> that are always up for
              a <b>new challenges</b> and <b>learning new things</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutme;
