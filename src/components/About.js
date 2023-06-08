import React from "react";

const About = () => {
  return (
    <div className="container.is-max-width mgh-small" id="about">
      <section className="section is-large p-5" id="firstSection">
        <div className="tile is-ancestor mt-6 mb-6">
          <div className="tile is-parent is-half">
            <figure className="image">
              <img src={require("../images/comicimage1.png")} alt="" />
            </figure>
          </div>
          <div className="tile is-parent">
            <figure className="image">
              <img src={require("../images/comicimage2.png")} alt="" />
            </figure>
          </div>
        </div>
      </section>
      <div className="aboutSection container is-fluid">
        <h2 className="tittle is-2">About</h2>
        <p className="has-text-centered">
          No matter how old are you or how much many you have, if you dont know
          how to manage it, you wont have it for long...
        </p>
        <p className="has-text-centered">
          It's time to take <strong>responsability</strong> for your{" "}
          <strong>finances</strong>, being prepared is better than being caught
          off guard.
        </p>
        <p className="has-text-centered">
          We are here to help you understand where your money is going!{" "}
        </p>
      </div>
      <div>
        <div className="imageCenter">
          <figure class="imageVS is-450x850">
            <img src={require("../images/_VS_(1).png")} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
