import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5 pb-3">
        <div className="col-md-6 staff__heading-section  text-center ">
          <span className="staff__subheading">Contact Us</span>
          <h2 className="mb-3 staff__heading">we're here</h2>
          <p className="mt-0 mb-2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div className="row d-flex contact__section mb-5">
        <div className="col-md-6 col-lg-3 d-flex">
          <div className="align-self-stretch box p-4  text-center">
            <div className="contact__section-icon d-flex align-items-center justify-content-center">
              <span className="icon-map-sign">
                <i className="fas fa-map-signs"></i>
              </span>
            </div>
            <h3 className="mb-5">Address</h3>
            <p >198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex">
          <div className="align-self-stretch box p-4  text-center">
            <div className="contact__section-icon d-flex align-items-center justify-content-center">
              <span className="icon-map-sign">
                <i className="fas fa-phone"></i>
              </span>
            </div>
            <h3 className="mb-5">contact</h3>
            <p >+91 123456789</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex">
          <div className="align-self-stretch box p-4  text-center">
            <div className="contact__section-icon d-flex align-items-center justify-content-center">
              <span className="icon-map-sign">
                <i className="far fa-paper-plane"></i>
              </span>
            </div>
            <h3 className="mb-5">email address</h3>
            <p >support@trustcare.com</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex">
          <div className="align-self-stretch box p-4  text-center">
            <div className="contact__section-icon d-flex align-items-center justify-content-center">
              <span className="icon-map-sign">
                <i className="fas fa-globe-asia"></i>
              </span>
            </div>
            <h3 className="mb-5">website</h3>
            <p >trust@career.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
