import React from "react";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="container">
        <div className="tile is-ancestor mt-6 mb-6">
          <div className="tile is-parent is-6">
            <figure className="image">
              <img src={require("../images/help_nowr.png")} alt="" />
            </figure>
          </div>
          <div className="tile is-parent">
            <figure className="image">
              <img src={require("../images/adult_time.png")} alt="" />
            </figure>
          </div>
        </div>
      </div>
      {/* <div className="block has-text-centered">
        I NEED <strong>HELP!</strong>
      </div>
      <div className="block has-text-centered">
        I'TS TIME TO BECOME AN <strong>ADULT!</strong>
      </div> */}
      <div className="aboutSection">
        <h2 className="tittle is-2 mt-4 has-text-centered has-background-danger">
          About
        </h2>
        <p>
          No matter how old are you or how much many you have, if you dont know
          how to manage it, you wont have it for long...
        </p>
        <p>
          It's time to take <strong>responsability</strong> for your{" "}
          <strong>finances</strong>, being prepared is better than being caught
          off guard.
        </p>
        <p></p>
      </div>
      <div className="container">
        <div className="tile is-ancestor mb-3">
          <div className="tile is-parent is-8">
            {/* <article className="tile is-child box"> */}
            {/* //<div className="content"> */}
            <figure className="image">
              <img src={require("../images/brain.png")} alt="" />
            </figure>
            {/* //</div> */}
            {/* </article> */}
          </div>
          <div className="tile is-parent">
            <figure className="image">
              <img src={require("../images/neeedsvswants2.png")} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
