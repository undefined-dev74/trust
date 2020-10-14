import React from "react";

const services = () => {
  const contents = [
    {
      id: 1,
      heading: "Web Apps",
      subHeading: `'From a simple web app to a complex application that integrates
                with a variety enterprise ERP services or 3rd party cloud
                service we have got you covered.'`,
      icon: "desktop",
    },
    {
      id: 2,
      heading: "App Development",
      subHeading: `Create an impactful mobile app that fits your brand and industry
                within a shorter time frame - whether you want iOS, Android or a
                hybrid mobile application.`,
      icon: "drafting-compass",
    },
    {
      id: 3,
      heading: "Game Development",
      subHeading: ` Create an impactful Game that fits your brand and industry
                within a shorter time frame - whether you want iOS, Android or a
                hybrid mobile games.`,
      icon: "gamepad",
    },
    {
      id: 4,
      heading: "E-commerce Platform",
      subHeading: `  Business intelligence, maintenance & support, system integration
                and documentation - we have a full range of services to make
                your e-commerce business a true success..`,
      icon: "opencart",
    },
  ];

  return (
    <section className="container services">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 staff__heading-section  text-center ">
          <span className="staff__subheading">Services</span>
          <h2 className="mb-3 staff__heading">our services</h2>
          <p className="mt-0 mb-5">
            Combining in-depth industry knowledge and technological expertise,
            our team provides world-class IT services and solutions for
            companies of any size, from all across the globe.
          </p>
        </div>
      </div>
      <div className="row d-flex mt-5 mb-5 services-content">
        {contents.map(({ id, heading, subHeading, icon }) => {
          return (
            <div key={id} className="col-lg-3 col-md-6 col-12 d-flex">
              <div className="shadow__box ">
                <div className="shadow__box-icon">
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h4 className="shadow__box-heading">{heading}</h4>
                <p className="shadow__box-subheading">{subHeading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default services;
