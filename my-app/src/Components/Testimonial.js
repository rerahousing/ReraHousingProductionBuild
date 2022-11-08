import React from "react";

import "../Styles/Testimonial.css";
import Card4 from "./Card4";

function Testimnial() {
  return (
    <div className="container">
      <p className="text-center section-lable">OUR TESTIMONIALS</p>
      <h2 className="text-center title">What our Customers Have to Say.</h2>
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <Card4 />
                  <Card4 />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <Card4 />
                  <Card4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimnial;
