import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Home />
      <Staff />
      <Contact />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
