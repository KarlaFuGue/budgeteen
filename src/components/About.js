import React from "react";

const About = () => {
  return (
    <div className="container" id="about">
      <h2 className="title is-2 mt-4 has-text-centered has-background-danger">
        About
      </h2>
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
      <div className="block has-text-black has-text-centered mb-5 has-background-white">
        We all get to a point in our lives where we need to take{" "}
        <strong>responsability</strong> for our <strong>finances</strong>.
        <div className="block has-text-black has-background-white">
          We can't help but become adults, and there is no guide to learning.
          But, being prepared is better than being caught off guard.
        </div>
        <strong>WE ARE HERE TO HELP</strong>.
        <div className="block has-text-black mt-1 has-text-centered has-background-white">
          <strong>TAKE THE FIRST STEP!</strong> How?...
        </div>
      </div>
      <div className="container">
        <div className="tile is-ancestor mb-3">
          <div className="tile is-parent is-8">
            {/* <article className="tile is-child box"> */}
            {/* //<div className="content"> */}
            <figure className="image">
              <img src={require("../images/image1.png")} alt="" />
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
