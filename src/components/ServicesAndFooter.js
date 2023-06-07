import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
const Services = () => {
  return (
    <section className="section container is-fluid">
      <header>
        <h3 class="subtitle is-3 has-text-centered servicesColor">
          OUR SERVICES
        </h3>
      </header>
      <div class="columns is-variable is-1-mobile is-3-desktop is-3-widescreen is-2-fullhd columnsMargin">
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src={require("../images/personalised_strategies.png")}
            />
          </figure>
          <p className="servicesTXT">Personalized Strategies</p>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src={require("../images/investment_consultation.png")}
            />
          </figure>
          <p className="servicesTXT">Investment Consultation</p>
        </div>
        <div class="column container is-fluid">
          <figure class="image is-128x128">
            <img class="is-rounded" src={require("../images/workshops.png")} />
          </figure>
          <p className="servicesTXT">Workshops</p>
        </div>
      </div>
      <footer className="footer has-background-grey-light">
        <div className="column is-half">
          <strong>
            GET IN TOUCH
            <a href="mailto:kxf221@bham.ac.uk">
              <AiOutlineMail size="1.2em"></AiOutlineMail>
            </a>
          </strong>
          <p>
            Receive our leaflet with full decription and cost of our sevices
          </p>
        </div>
        <div className="column is-half">
          <strong>FOLLOW US</strong>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <a href="https://www.facebook.com/unibirmingham/?locale=en_GB">
                  <SiFacebook size="2rem"></SiFacebook>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="https://www.instagram.com/unibirmingham/?hl=en">
                  <GrInstagram size="2rem"></GrInstagram>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="https://twitter.com/unibirmingham?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <BsTwitter size="2rem"></BsTwitter>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default Services;
