import React from "react";
import "@fortawesome/fontawesome-free";
import "./navbar.css";

// const navbarStyle = {
//   background: "transparent",
//   position: "absolute",
//   zIndex: "1000"
// };

function Navbar() {
  return (
    <div className="" id="home-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
        <a className="navbar-brand" href="/">
          Nindya Hapsari
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#theNav"
          aria-controls="theNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row justify-content-end">
          <ul className="navbar-nav" id="theNav">
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/nindyahapsari">
                Github <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/nindya-hapsari-a5000a153/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
