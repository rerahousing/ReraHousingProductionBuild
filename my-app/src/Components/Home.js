import React, { useState } from "react";
import Search from "./Search";
import Card_1 from "./Card1";
import Card_2 from "./Card2";
import Card_3 from "./Card3";
import bannerImage from "../Resources/rera-approved-housing-projects-header.jpg";
import Card_5 from "./Card5";
import dehradun from "../Resources/dehradun.webp";
import gurugram from "../Resources/gurugram.jpg";
import noida from "../Resources/greaternoida.webp";
import Testimnial from "./Testimonial";
import Partnership from "./Partnership";
import "../Styles/Partnership.css";
import image3 from "../Resources/no-money-icon.svg";
import image4 from "../Resources/readyToMove.svg";
import image5 from "../Resources/house.svg";
import image7 from "../Resources/icon (2).svg";
import image25 from "../Resources/rera-blog-image-1.png";
import image26 from "../Resources/rera-blog-image-2.png";
import image27 from "../Resources/rera-blog-image-3.png";
import { Helmet } from "react-helmet";

import "../Styles/Home.css";

function Home() {
  const [color, setColor] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Find RERA Approved Housing Projects in India</title>
        <meta
          property="og:description"
          content="Find the best affordable Villas, Duplex, and Flats for sale in India and all are RERA approved"
        />
        <meta
          property="og:keywords"
          content="RERA, projects, agents, flats, duplex, villa, interior designer, property lawyer"
        />
        <meta property="og:image" content={bannerImage} />
        <meta
          name="description"
          content="Find the best affordable Villas, Duplex, and Flats for sale in India and all are RERA approved"
        />
        <meta
          name="keywords"
          content="RERA, projects, agents, flats, duplex, villa, interior designer, property lawyer"
        />
      </Helmet>
      <section className="d-flex">
        <div className="container banner">
          <div className="content">
            <h1 className="heading">
              Find RERA Approved <br />
              Housing Projects in India
            </h1>
            <p className="body">
              For best affordable Villas, Duplex, and Flats
            </p>
            <div className="search my-5">
              <Search />
            </div>
          </div>
        </div>
      </section>

      <section className="section-12">
        <div className="text-center my-5">
          <h2 className="title">
            What <span className="highlight">RERA</span>Housing.in do ?
          </h2>
        </div>
        <section className="section-6 services2">
          <div className="container-fluid container ">
            <div className="row align-items-center gy-5 gx-6">
              <div className="col-lg-4 col-md-6">
                <Card_3
                  text={"RERA Projects"}
                  des={
                    "Search RERA approved projects of villas, duplex, and flats of 1bhk, 2bhk, 3bhk and more."
                  }
                  setColor={setColor}
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <Card_3
                  text={"Home Inspection"}
                  des={
                    "A home inspection examination by experienced civil engineers of the condition and safety of a property."
                  }
                  setColor={setColor}
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <Card_3
                  text={"Property Law Consultant"}
                  des={
                    "Find property lawyer nearby your location or online around India. And avoid legal issues in long term."
                  }
                  setColor={setColor}
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <Card_3
                  text={"Rera Agents"}
                  des={
                    "Find RERA approved agents nearby your location or online around India. And get everything smoothly."
                  }
                  setColor={setColor}
                />
              </div>
              <div className="col-lg-4 col-md-6 ">
                <Card_3
                  text={"Interior Decorator"}
                  des={
                    "Hire Interior designer & decorator nearby your location or online around whole India easily."
                  }
                  setColor={setColor}
                />
              </div>
              <div className="col-lg-4 col-md-6 ">
                <Card_3
                  text={"Transpiracy"}
                  des={
                    "We Know to be for bringing complete transpiracy during the whole complete process."
                  }
                  setColor={setColor}
                />
              </div>
            </div>
          </div>
        </section>
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

      <section className="section-5">
        <div className="text-container d-flex justify-content-center align-items-center">
          <h2 className="text-center my-5 title">
            Find <span className="highlight mx-3">RERA </span> Approved Projects
          </h2>
          <div className="view-button">
            <button className="btn btn-primary">
              <a
                href="/rera-approved-projects-villa-duplex-flats"
                style={{ textDecoration: "none", color: "white" }}
              >
                View All
              </a>{" "}
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="card_group">
            <div className="row g-5 w-100 m-0">
              <Card_2
                image={dehradun}
                category={"Projects"}
                city={"Dehradun"}
                state={"Uttrakhand"}
              />
              <Card_2
                image={gurugram}
                category={"Projects"}
                city={"Gurugram"}
                state={"Haryana"}
              />
              <Card_2
                image={noida}
                category={"Projects"}
                city={"Noida"}
                state={"Uttar Pradesh"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="text my-5">
          <h2 className="title">
            Work with<span className="highlight mx-2">RERA</span>Housing
          </h2>
        </div>
        <div className="body container d-flex justify-content-center">
          <div className="row w-100 gx-5">
            <div className="col">
              <Card_1
                head={"RERA builder"}
                body={
                  "Are you a builder with RERA approved projects with proper documentation and to ready to momve. Let's build RERA Housing together."
                }
              />
            </div>
            <div className="col">
              <Card_1
                head={"RERA Agents"}
                body={
                  "Are you a RERA approved Agent with proper past record or fresher and want to grow your carrier in real estate. Let's build RERA Housing together."
                }
              />
            </div>
            <div className="col">
              <Card_1
                image={image7}
                head={"Service Provider"}
                body={
                  "Are you a Real estate Service provider with proper past experience or portfolio. Let's build RERA Housing together. Click Here"
                }
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
              <Card_5
                image={image25}
                date="06 Dec, 2022"
                likes="10K"
                title="Buying a RERA Registered Property? Here are 9 things you should know"
                link="https://blog.rerahousing.in/2022/12/why-rera-act-is-so-important.html"
              />
            </div>
            <div className="col-sm-4 col-12 my-2">
              <Card_5
                image={image26}
                date="05 Dec, 2022"
                likes="10K"
                title="50+ Points for House Evaluation by Yourself"
                link="https://blog.rerahousing.in/2022/12/50-points-for-house-evaluation-by.html"
              />
            </div>
            <div className="col-sm-4 col-12 my-2">
              <Card_5
                image={image27}
                date="05 Dec, 2022"
                likes="10K"
                title="Check these 10 documents, to avoid legal disputes!"
                link="https://blog.rerahousing.in/2022/12/dont-invest-in-property-before-checking.html"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-11">
        <h4 className="text-center title">
          Are you looking to do partnership with us?
        </h4>
        <p className="description text-center">
          Learn how you can leverage our platform &amp; products with your{" "}
          <a href="/servicesignup" className="link">
            clients
          </a>{" "}
        </p>
      </section>

      <section className="section-10 text-center">
        <div className="wrapper">
          <h4 className="title">
            List of all RERA Approved Housing Projects in India
          </h4>
          <p className="description">
            Best affordable Villas, Duplex and Flats
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
