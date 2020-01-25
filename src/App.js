import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home";
import Aboutmepage from "./pages/aboutmepage";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={Aboutmepage} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
