import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col} from 'react-bootstrap'
import "./App.scss";

function App() {
  return (
  <div className="container-fluid">
    {/* Navbar start */}
      <Navbar />
    {/* Navbar End   */}
    <Home />
  </div>)
}

export default App;
