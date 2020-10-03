import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "./Home";


export default function Home() {
  return (
    <section className="header__container">
      <div className=" blue-purple-gradient">
        <Jumbotron fluid>
          <Container>
            <div className="header__slider animate__animated animate__pulse">
              <h1 className="header__slider-h1">TRUST</h1>
              <h3 className="header__slider-h3">Ready to showcase your app</h3>
              <p className="header__slider-p">
                Trust is a global software development company helping companies
                achieve their goals with world-class, industry-specific software
                solutions.
              </p>
              <a href="./" className="slide-button slide-button-active">
                Download
              </a>
              <a href="./" className="slide-button">
                Learn More
              </a>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </section>
  );
}
