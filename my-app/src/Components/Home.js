import React, { useState } from "react";
import Search from "./Search";
import Card_1 from "./Card1";
import Card_2 from "./Card2";
import Card_3 from "./Card3";
import Card_5 from "./Card5";
import dehradun from "../Resources/dehradun.webp";
import gurugram from "../Resources/gurugram.jpg";
import noida from "../Resources/greaternoida.webp";
import Testimnial from "./Testimonial";
import Partnership from "./Partnership";
import "../Styles/Partnership.css";
import image2 from "../Resources/LessMoney.svg";
import image3 from "../Resources/no-money-icon.svg";
import image4 from "../Resources/readyToMove.svg";
import image5 from "../Resources/house.svg";
import image6 from "../Resources/icon (1).svg";
import image7 from "../Resources/icon (2).svg";
import image8 from "../Resources/icon (3).svg";
import image9 from "../Resources/project.jpg";
import image20 from "../Resources/finance.svg";
import image21 from "../Resources/homeInspection.svg";
import image22 from "../Resources/verifiedConsultant.svg";
import image23 from "../Resources/transparentProcess.svg";
import image24 from "../Resources/interior.svg";
import image25 from "../Resources/blog-1.jpg";
import image26 from "../Resources/blog-2.jpg";
import ourService from "../Resources/our-service.svg";

import "../Styles/Home.css";

function Home() {
  const [color, setColor] = useState(false);

  return (
    <div>
      <section className="d-flex">
        <div className="container banner">
          <div className="content">
            <h1 className="heading">Find the Perfect place</h1>
            <p className="body">
              A good Real Estate Agent does not disapper once the closing Papers
              are Signed
            </p>
            <div className="search my-5">
              <Search />
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="text my-5">
          <h2 className="title">
            Why <span className="highlight">RERA</span>Housing.in ?
          </h2>
        </div>
        <div className="body container d-flex justify-content-center">
          <div className="row w-100 gx-5">
            <div className="col ">
              <Card_1
                image={image2}
                head={"Bottom Rate Guarantee"}
                body={
                  "Rock Bottom Prices are Guaranteed in return otherwise, you get double the discount from us."
                }
              />
            </div>
            <div className="col">
              <Card_1
                image={image3}
                head={"No Brokerage Policy"}
                body={
                  "Unlike other real estate platforms or agents, we don't charge a single penny from our customers."
                }
              />
            </div>
            <div className="col">
              <Card_1
                image={image4}
                head={"Ready to move property"}
                body={
                  "Only RERA approved with OC (Occupancy Certified) or ready-to-move properties. No more late possession."
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 d-flex">
        <div className="image">
          <img src={image5} alt="" className="w-100" />
        </div>
        <div className="content">
          <div className="text p-4 d-flex flex-column my-5  justify-content-between">
            <h2 className="heading">Pro's &amp; Con's</h2>
            <p className="body">
              Unlike other Real Estate portals &amp; brokerage companies, We
              don't do typical sales where we push clients for one particular
              project, instead we give them unbiased views of every project
              along with the pros &amp; cons &amp; then let the client decide
              what he/she needs.
            </p>
            <div className="figures d-flex my-5 justify-content-between">
              <div className="fig d-flex flex-column justify-content-center">
                <div className="head">75 +</div>
                <div className="body">RERA Projects</div>
              </div>
              <div className="fig d-flex flex-column justify-content-center">
                <div className="head">300 +</div>
                <div className="body">Visits</div>
              </div>
              <div className="fig d-flex flex-column justify-content-center">
                <div className="head">210 +</div>
                <div className="body">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="text my-5">
          <h2 className="title">
            <span className="highlight">Extra</span> Benefits
          </h2>
        </div>
        <div className="body container d-flex justify-content-center">
          <div className="row w-100 gx-5">
            <div className="col">
              <Card_1
                image={image6}
                head={"Group Offers"}
                body={
                  "Our mission is to promote the concept of group buying which helps both the buyer and the seller"
                }
              />
            </div>
            <div className="col">
              <Card_1
                image={image8}
                head={"Free Online Presentation"}
                body={
                  "Complete Project analysis with overview, location, amenities, plans, pros & cons, builder profile etc.."
                }
              />
            </div>
            <div className="col">
              <Card_1
                image={image7}
                head={"Virtual 360 Tour"}
                body={
                  "Experience the 3D Tour & feel the view, facing, & amenities of the projects by sitting in your home."
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-5">
        <div className="text-container d-flex justify-content-center align-items-center">
          <h2 className="text-center my-5 title">
            <span className="highlight">RERA</span> Projects
          </h2>
          <div className="view-button">
            <button className="btn btn-primary">
              <p>View All</p> <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card_group">
            <div className="row g-5 w-100 m-0">
              <Card_2
                image={dehradun}
                category={"Projects"}
                city={"Dehradun, Uttrakhand"}
              />
              <Card_2
                image={gurugram}
                category={"Projects"}
                city={"Gurugram, Haryana"}
              />
              <Card_2 image={noida} category={"Projects"} city={"Noida, UP"} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="text-container d-flex justify-content-center align-items-center">
          <h2 className="text-center my-5 title">
            <span className="highlight">RERA</span> Consultants
          </h2>
          <div className="view-button">
            <button className="btn btn-primary">
              <p>View All</p> <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card_group ">
            <div className="row g-5 w-100 m-0">
              <Card_2 image={dehradun} category={"Consultants"} />
              <Card_2 image={gurugram} category={"Consultants"} />
              <Card_2 image={noida} category={"Consultants"} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-6 services2">
        <div className="container-fluid container ">
          <div className="row align-items-center gy-5 gx-6">
            {/* <div className="col-lg-4 col-md-6 our-services-card">
              <div className="head ">
                <h2 className="title" style={{ marginBottom: "0" }}>
                  {" "}
                  <span className="highlight">Our</span> Services
                </h2>
              </div>
              <div className="body">
                <p className="text">
                  Now, everything you need to successfully buy your home is on
                  one platform.
                </p>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 our-services-card">
              <div className="row g-0 align-items-center">
                <div className="col-md-4 p-4">
                  <img
                    src={ourService}
                    className="img-fluid rounded-start card_image p-md-0"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <span className="highlight">Our</span> Services
                    </h5>

                    <p className="text">
                      Now, everything you need to successfully buy your home is
                      on one platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card_3
                image={image20}
                text={"Finance"}
                des={"Finace your Property"}
                setColor={setColor}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card_3
                image={image21}
                text={"Home Inspection"}
                des={"Inspect you home to get best price"}
                setColor={setColor}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card_3
                image={image22}
                text={"Vrified Consultants"}
                des={"Consultant with Civil Engineering Degree"}
                setColor={setColor}
              />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card_3
                image={image23}
                text={"Transparent Process"}
                des={"Our Process is Fully Transparent"}
                setColor={setColor}
              />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <Card_3
                image={image24}
                text={"Interior"}
                des={"Detailed Analysis of Interior"}
                setColor={setColor}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-9 my-5 py-5">
        <Testimnial />
      </section>

      <section className="section-7 my-5">
        <Partnership />
      </section>

      <section className="section-8">
        <div className="head">
          <p className="text-center section-lable" style={{ color: "white" }}>
            Our blog post
          </p>
          <h2 className="text-center title" style={{ color: "white" }}>
            Blogs &amp; Articles
          </h2>
        </div>
        <div className="container blog">
          <div className="row">
            <div className="col-sm-4 col-12 my-2">
              <Card_5 image={image25} />
            </div>
            <div className="col-sm-4 col-12 my-2">
              <Card_5 image={image26} />
            </div>
            <div className="col-sm-4 col-12 my-2">
              <Card_5 image={image26} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-11">
        <h4 className="text-center title">Are you an Agent?</h4>
        <p className="description text-center">
          Learn how you can leverage our platform &amp; products with your{" "}
          <span className="link">clients</span>{" "}
        </p>
      </section>

      <section className="section-10 text-center">
        <div className="wrapper">
          <h4 className="title">Ready to get Started ?</h4>
          <p className="description">
            Search your favourite property on the go.
          </p>
          <div className="search">
            <Search />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
