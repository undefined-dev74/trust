import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      {/* <Home /> */}
      {/* <Staff /> */}
      {/* <Contact /> */}
      <Projects />
    </div>
  );
}

export default App;
