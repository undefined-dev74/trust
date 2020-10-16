import React from "react";
import { Slide, Fade, Zoom } from "react-reveal";

export default function Technologies() {
  const icons = ["python", "node-js", "bootstrap", "react", "angular"];
  const icons1 = ["figma", "sketch", "html5", "css3", "js-square"];
  return (
    <section className="technologies__banner pt-5 pt-md-0 pb-5 mb-5">
      <div className="container">
        <div className="row justify-content-center mb-4 pb-5">
          <div className="col-md-6 staff__heading-section  text-center ">
            <span className="staff__subheading">expertise</span>
            <h2 className="mb-3 staff__heading">Our expertise</h2>
            <p className="mt-0 mb-2">
              Trust team has highly experienced professionals with advanced
              technical skills.
            </p>
          </div>
        </div>
        <div className="row align-items-center pt-md-5 d-flex ">
          {icons.map((icon) => {
            return (
              <Slide down>
                <div
                  key={icons.indexOf(icon)}
                  className="col text-center mt-5 mt-md-0 "
                >
                  <Fade left>
                    <div className="technologies__banner-icon">
                      <Zoom down>
                        <i className={`icon fab fa-${icon}`}></i>
                      </Zoom>
                    </div>
                  </Fade>
                </div>
              </Slide>
            );
          })}
        </div>
        <div className="row align-items-center pt-md-5 d-flex ">
          {icons1.map((icon1) => {
            return (
              <Slide up>
                {" "}
                <div
                  key={icons1.indexOf(icon1)}
                  className="col text-center mt-5 mt-md-0 "
                >
                  <Fade right>
                    <div className="technologies__banner-icon">
                      <Zoom top>
                        <i className={`icon fab fa-${icon1}`}></i>
                      </Zoom>
                    </div>
                  </Fade>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </section>
  );
}
