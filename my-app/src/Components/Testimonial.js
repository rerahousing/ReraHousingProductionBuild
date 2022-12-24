import React from "react";
import test1 from "../Resources/Testimonial-1.jpg";
import test2 from "../Resources/Testimonial-2.jpg";
import test3 from "../Resources/Testimonial-3.jpg";
import test4 from "../Resources/Testimonial-4.jpg";
import "../Styles/Testimonial.css";
import Card4 from "./Card4";

function Testimnial() {
  return (
    <div className="container">
      <p className="text-center section-lable">OUR TESTIMONIALS</p>
      <h2 className="text-center title">
        Customer Feedback Regarding RERA Housing
      </h2>
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
                  <Card4
                    image={test1}
                    name={"Rajesh Kumar"}
                    work={"Engineer"}
                    feedback={
                      " It has a lot of properties in it and I was able to choose from a wide range of properties. The website is easy to use and the price is very competitive."
                    }
                  />
                  <Card4
                    image={test2}
                    name={"Savita Sharma"}
                    work={"Bank Manager"}
                    feedback={
                      "ReraHousing impressed me on multiple levels. Thank you for making it painless, pleasant and most of all hassle free! I'd be lost without ReraHousing"
                    }
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <Card4
                    image={test3}
                    name={"Rohit Bansal"}
                    work={"Bussinessman"}
                    feedback={
                      "I am so happy I found Rera Housing. It's the best property site with tons of houses in my budget and has a great interface. "
                    }
                  />
                  <Card4
                    image={test4}
                    name={"Rajkumar Verma"}
                    work={"Consultant"}
                    feedback={
                      "I was looking for a new property and was attracted by Rera Housing's beautiful site. I've tried other sites too but found their layouts to be too busy and confusing."
                    }
                  />
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
