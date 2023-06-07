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
      {/* <div className="block has-text-centered">
        I NEED <strong>HELP!</strong>
      </div>
      <div className="block has-text-centered">
        I'TS TIME TO BECOME AN <strong>ADULT!</strong>
      </div> */}
      <div className="aboutSection ">
        <h2 className="tittle is-2">About</h2>
        <p>
          No matter how old are you or how much many you have, if you dont know
          how to manage it, you wont have it for long...
        </p>
        <p>
          It's time to take <strong>responsability</strong> for your{" "}
          <strong>finances</strong>, being prepared is better than being caught
          off guard.
        </p>
        <p>We are here to help you understand where your many is going! </p>
      </div>
      <div className="container">
        <div className="tile is-ancestor mb-3">
          <div className="container">
            <figure className="image">
              <img
                className="imgFight"
                src={require("../images/_VS_(1).png")}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// div className="tile is-parent is-8">
//             {/* <article className="tile is-child box"> */}
//             {/* //<div className="content"> */}
//             <figure className="image">
//               <img src={require("../images/brain.png")} alt="" />
//             </figure>
//             {/* //</div> */}
//             {/* </article> */}
//           </div>
