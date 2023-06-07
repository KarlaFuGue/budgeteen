import React from "react";

const Services = () => {
  return (
    <section className="section">
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
            <p className="servicesTXT">Personalized Strategies</p>
          </figure>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src={require("../images/investment_consultation.png")}
            />
            <p className="servicesTXT">Investment Consultation</p>
          </figure>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img class="is-rounded" src={require("../images/workshops.png")} />
            <p className="servicesTXT">Workshops</p>
          </figure>
        </div>
      </div>
      <div class="container">
        <div class="notification is-primary columnServices colFlex">
          <div className="column is-half ">
            <strong>GET IN TOUCH</strong>
            <p>
              Receive our leaflet with full decription and cost of our sevices
            </p>
          </div>
          <div className="column is-half">
            <strong>FOLLOW US</strong>
            <p>ICON ICON ICON</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
