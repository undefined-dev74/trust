import React from "react";

export default function Footer() {
  return (
    <div className="footer footer-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="footer__widget mb-4">
              <h2 className="footer__heading-2">About #Trust</h2>
              <p className="footer__p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="footer__social list-unstyled float-md-left mt-4">
                <li className="footer__social-icon">
                  <a href="./" className="footer__social-icon-a">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="footer__social-icon-a">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="" className="footer__social-icon-a">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="footer__widget mb-4 ml-md-4">
              <h2 className="footer__heading-2">Links</h2>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Career
                  </a>
                </li>
                <li className="mb-2">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="footer__widget mb-4 ml-md-4">
              <h2 className="footer__heading-2">Services</h2>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Web Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Web Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Business Strategy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    Data Analytics
                  </a>
                </li>
                <li className="mb-2">
                  <a href="">
                    <i className="fas fa-arrow-right mr-2"></i>
                    App Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="footer__widget mb-4 ml-md-4">
              <h2 className="footer__heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <i className="icon  fas fa-map-marker-alt"></i>
                    <span className="text ml-3">
                      59, kesariya paras 2, Bhilwara (Rajasthan)
                    </span>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon  fas fa-phone-alt"></i>
                      <span className="text">+91-9636001161</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon  fas fa-envelope"></i>
                      <span className="text">support@trust.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center copyright">
            <p>
              Copyright &#169;
              <script
                type="text/javascript"
                async
                src="https://www.google-analytics.com/analytics.js   "
              ></script>
              <script>document.write(new Date().getFullYear());</script>
              2020 All rights reserved | This is made with
              <i
                className="footer-icon mx-1 fas fa-heart color-danger"
                aria-hidden="true"
              ></i>
              by
              <a className="footer-brand ml-1" href="#" target="blank">
                #Trust
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
