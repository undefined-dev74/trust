import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <section className="container">
        <div className="row justify-content-center mt-5 mb-5 pb-3">
          <div className="col-md-6 staff__heading-section  text-center ">
            <span className="staff__subheading">Services</span>
            <h2 className="mb-3 staff__heading">our services</h2>
            <p className="mt-0 mb-2">
              Quality service. Customer-specific technologies. Comprehensive
              expertise.
            </p>
            <h4 className='mt-4'>
              Combining in-depth industry knowledge and technological expertise,
              our team provides world-class IT services and solutions for
              companies of any size, from all across the globe.
            </h4>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-12 testimonial">
            <div className="col-md-3 d-flex">
              <div className="testimonial-entry justify-content-end">
             
              </div>
            </div>
            <div className="col-md-3 d-flex"></div>
            <div className="col-md-3 d-flex"></div>
            <div className="col-md-3 d-flex"></div>
          </div>
        </div>
      </section>
    );
  }
}
