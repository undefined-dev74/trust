import React from "react";

const Staff = () => {
  const users = [
    {
      id: 1,
      name: "Chirag Maliwal",
      designation: "Lead Software Dev",
      imgURL:
        "https://www.linkpicture.com/q/efc98daf-3019-435f-ab61-3ec469e3c60f.jpeg",
    },
    {
      id: 2,
      name: "Pradhumn Trivedi",
      designation: "Lead Software Dev",
      imgURL: "https://www.linkpicture.com/q/Pradyuman.jpeg",
    },
    {
      id: 3,
      name: "Vivek Sharma",
      designation: "Associate Software Dev",
      imgURL: "https://www.linkpicture.com/q/vivek71017_B9SCPCyDMFe.jpg",
    },
    {
      id: 4,
      name: "Rakhi Biswas",
      designation: "Business Development Ex",
      imgURL:
        "https://ca.slack-edge.com/T01C0GHGKEY-U01BR8AJEKX-22ae40d64ac5-512",
    },
    {
      id: 5,
      name: "Aman Jha",
      designation: "FrontEnd Web Developer",
      imgURL:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGEtO-VTT5aUw/profile-displayphoto-shrink_400_400/0?e=1607558400&v=beta&t=nQhXH9DmZBT39nKY3Vy_guB1WQdYbYi221a6puvCVVA",
    },
  ];

  const cla = ["twitter", "linkedin-in", "instagram", "facebook"];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-6 staff__heading-section  text-center ">
            <span className="staff__subheading">About Us</span>
            <h2 className="mb-3 staff__heading">meet our team</h2>
            <p className="mt-0 mb-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row container ml-2 px-4">
          {users.map(({ id, imgURL, name, designation }) => {
            return (
              <React.Fragment key={id}>
                <div className="col-md-6 col-lg">
                  <div className="staff__profile">
                    <div className="img-wrap d-flex align-items-stretch">
                      <img
                        className="img align-self-stretch"
                        src={imgURL}
                        alt="Staff-img"
                      />
                    </div>
                  </div>
                  <div className="text d-flex align-items-center justify-content-center pt-3 text-center">
                    <div>
                      <h3 className="mb-3 staff__text">{name}</h3>
                      <span className="position staff__text-subheading mb-4">
                        {designation}
                      </span>
                      <div className="faded staff__social">
                        <ul className="ftco-social text center mb-2">
                          {cla.map((cl) => {
                            return (
                              <li key={cla.indexOf(cl)}>
                                <a href="/">
                                  <span className="icon">
                                    <i className={`fab fa-${cl}`}></i>
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Staff;
