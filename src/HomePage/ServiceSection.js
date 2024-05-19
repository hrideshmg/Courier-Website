import React from "react";
import Icon from "./Images/iCON-2.svg";

const ServicesSection = () => {
  return (
    <section className="py-7" id="services" style={{ backgroundColor: "#1B262C" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 text-center mb-3">
            <h2 style={{ color: "white" }}>SERVICES</h2>
            <p style={{ color: "white", fontSize: "1.5rem" }}>Our services for you</p>
          </div>
        </div>
        <div className="row h-100 justify-content-center">
          <ServiceCard
            imgSrc={Icon}
            title="Business Services"
            description="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."
            listItems={["Corporate goods", "Shipment", "Accessories"]}
          />
          <ServiceCard
            imgSrc={Icon}
            title="Business Services"
            description="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."
            listItems={["Corporate goods", "Shipment", "Accessories"]}
          />
          <ServiceCard
            imgSrc={Icon}
            title="Business Services"
            description="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."
            listItems={["Corporate goods", "Shipment", "Accessories"]}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ imgSrc, title, description, listItems }) => {
  return (
    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
      <div className="card h-100 px-lg-5 card-span" style={{ backgroundColor: "#3282B8" }}>
        <div className="card-body d-flex flex-column justify-content-around">
          <div className="text-center pt-5">
            <img className="img-fluid" src={imgSrc} alt="Service Icon" />
            <h5 className="my-4" style={{ color: "white" }}>
              {title}
            </h5>
          </div>
          <p style={{ color: "white", fontSize: "1.2rem" }}>{description}</p>
          <ul className="list" style={{ fontSize: "1.3rem", color: "white" }}>
            {listItems.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="me-2">
                  <i className="fas fa-circle text-primary" style={{ fontSize: ".5rem" }}></i>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="text-center my-5">
            <div className="d-grid">
              <a
                href="/about"
                className="btn btn-outline-danger"
                type="submit"
                style={{ backgroundColor: "#1B262C", borderColor: "#1B262C", color: "white" }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
