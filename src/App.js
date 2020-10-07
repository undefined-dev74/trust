import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Staff from "./components/Staff";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      {/* <Home /> */}
      <Staff />
    </div>
  );
}

export default App;
