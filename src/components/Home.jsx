import React from "react";
import "./Home";

export default function Home() {
  return (
    <section className="header__container ">
      <div className="jumbotron blue-purple-gradient">
        
          <div className="header__slider animate__animated animate__pulse">
            <span className='subheading mb-2'>Welcome to the Trust</span>
            <h1 className="header__slider-h1">TRUST</h1>
            <h3 className="header__slider-h3">Your Trusted technology partner</h3>
            <p className="header__slider-p text-truncate text-wrap">
              Trust is a global software development company helping companies
              
              achieve their goals with world-class, industry-specific software
              solutions.
            </p>
            <a href="./" className="slide-button slide-button-active">
              Learn More
            </a>
            {/* <a href="./" className="slide-button">
              Learn More
            </a> */}
          </div>
         =
      </div>
    </section>
  );
}
