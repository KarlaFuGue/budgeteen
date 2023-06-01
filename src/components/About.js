import React from "react";

const About = () => {
  return (
    <div className="container">
      <h2 className="title is-3 mt-4 has-text-centered">About</h2>
      <div className="block has-text-centered">
        I NEED <strong>HELP!</strong>
      </div>
      <div className="block has-text-centered">
        I'TS TIME TO BECOME AN <strong>ADULT!</strong>
      </div>
      <div className="block has-text-centered mb-5">
        We all get to a point in our lives where we need to take{" "}
        <strong>responsability</strong> for our <strong>finances</strong>.
        <div className="block">
          We can't help but become adults, and there is no guide to learning.
          But, being prepared is better than being caught off guard.
        </div>
        <strong>WE ARE HERE TO HELP</strong>.
        <div className="block mt-1 has-text-centered">
          <strong>TAKE THE FIRST STEP!</strong> How?...
        </div>
      </div>
      <div className="container">
        <div className="tile is-ancestor mb-3">
          <div className="tile is-parent is-8">
            <article className="tile is-child box">
              <div className="content">
                <figure className="image is-8by6">
                  <img src={require("../images/image1.png")} alt="" />
                </figure>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">NEED vs WANT</p>
              <p className="content">Get your finances in order</p>
              <p className="subtitle">Track your Expenses Here</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
