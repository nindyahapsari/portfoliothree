import React, { useState, useRef } from "react";
import "./navbar.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function NewNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="name">
          <Link className="link-name" to="/">
            Nindya Hapsari
          </Link>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={!open ? "nav-links" : "nav-links open"}>
          <li>
            <Link className="link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <a>Github</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NewNavbar;
