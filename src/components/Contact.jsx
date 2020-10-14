import React from "react";

export default function Contact() {
  const details = [
    {
      id: 1,
      heading: "Address",
      subHeading: "198 West 21th Street, Suite 721 New York NY 10016",
      icon: "map-signs",
    },
    {
      id: 2,
      heading: "Contact",
      subHeading: "+91 123456789",
      icon: "phone",
    },
    {
      id: 3,
      heading: "email Address",
      subHeading: "support@trust.com",
      icon: "paper-plane",
    },
    {
      id: 4,
      heading: "website",
      subHeading: "trust@career.com",
      icon: "globe-asia",
    },
  ];

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
        {details.map(({ id, heading, subHeading, icon }) => {
          return (
            <div key={id} className="col-md-6 col-lg-3 d-flex">
              <div className="align-self-stretch box p-4  text-center">
                <div className="contact__section-icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-sign">
                    <i className={`fas fa-${icon}`}></i>
                  </span>
                </div>
                <h3 className="mb-5">{heading}</h3>
                <p>{subHeading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
