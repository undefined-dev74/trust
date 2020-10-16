import React from "react";

export default function Footer() {
  const icons = ["twitter", "facebook", "instagram"];

  const links = ["home", "about us", "services", "career", "contact us"];
  const services = [
    "Web Design",
    "web development",
    "Business Strategy",
    "Data Analytics",
    "App development",
  ];
  /**
   * ! Unused data will use it later
   * ? Looking for solution
   const details = [
    {
      id: 1,
      data: [
        " 59, kesariya paras 2, Bhilwara (Rajasthan)",
        "+91-9636001161",
        "support@trsut.com",
      ],
      icons: ["map-marker-alt", "phone-alt", "envelope"],
    },
  ];
   */

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
                  {icons.map((icon) => {
                    return (
                      <a
                        key={icons.indexOf(icon)}
                        href="./"
                        className="footer__social-icon-a"
                      >
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="footer__widget mb-4 ml-md-4">
              <h2 className="footer__heading-2">Links</h2>
              <ul className="list-unstyled ">
                {links.map((link) => {
                  return (
                    <li
                      key={links.indexOf(link)}
                      className="mb-4 d-flex flex-row"
                    >
                      <a href="./">
                        <i className="fas fa-arrow-right mr-2"></i>
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="footer__widget mb-4 ml-md-4">
              <h2 className="footer__heading-2">Services</h2>
              <ul className="list-unstyled">
                {services.map((service) => {
                  return (
                    <li key={services.indexOf(service)} className="mb-4">
                      <a href="./">
                        <i className="fas fa-arrow-right mr-2"></i>
                        {service}
                      </a>
                    </li>
                  );
                })}
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
                    <a href="./">
                      <i className="icon  fas fa-phone-alt"></i>
                      <span className="text">+91-9636001161</span>
                    </a>
                  </li>
                  <li>
                    <a href="./">
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
              <a className="footer-brand ml-1" href="./" target="blank">
                #Trust
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
