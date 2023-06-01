import React from "react";

const Services = () => {
  return (
    <section className="section">
      <header>
        <h3 class="subtitle is-3 has-text-centered">OUR SERVICES</h3>
      </header>
      <div class="columns is-variable is-1-mobile is-3-desktop is-3-widescreen is-2-fullhd">
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
      </div>
      <div class="container">
        <div class="notification is-primary">
          <div className="column is-half">
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
