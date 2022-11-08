import React from "react";
import SimilarProperties from "./SimilarProperties";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import image1 from "../Resources/home1.webp";
import image2 from "../Resources/home2.jpg";
import image3 from "../Resources/home3.webp";
import "../Styles/ProductPage.css";
import PropertyContext from "../Context/Property/PropertyContext";
import OwlCarousel from "react-owl-carousel";
import FloorPlanBox from "./FloorPlanBox";
import seal from "../Resources/seal.png";
import { Link } from "react-scroll";
import { Box, Tab, Tabs, Typography } from "@mui/material";
function ProductPage() {
  const context = useContext(PropertyContext);
  const { specProp, getSpecificProperty } = context;
  const { pricingmin } = specProp;
  const params = useParams();
  useEffect(() => {
    getSpecificProperty(params.id);
  }, []);

  const [drop, setDrop] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState("1");
  const [value, setValue] = useState(0);

  const resp = {
    320: {
      items: 2,
    },
    425: {
      items: 2,
    },
    700: {
      items: 3,
    },
    750: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  };
  const handleClick = (e) => {
    setActive(e.target.id);
  };
  const toggleDrop = (e) => {
    setDrop(e.target.id);
  };
  // console.log(specProp.website_property);
  const removeDrop = () => {
    setDrop("");
  };

  return (
    <div className="product-page">
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              width="1400"
              height="418"
              src={image1}
              className="bg-img"
              alt="..."
            />
            <img
              width="1400"
              height="418"
              src={image1}
              className="bg-blur d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              width="1400"
              height="418"
              src={image2}
              className="bg-img"
              alt="..."
            />
            <img
              width="1400"
              height="418"
              src={image2}
              className="bg-blur d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              width="1400"
              height="418"
              src={image3}
              className="bg-img"
              alt="..."
            />
            <img
              width="1400"
              height="418"
              src={image3}
              className="bg-blur d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="jumpbar_wrap">
        <div className="container">
          <ul className="jumpmenu">
            <li>
              <Link
                activeClass="active-custom"
                to="details"
                spy={true}
                smooth={true}
                offset={-40}
              >
                <a
                  href=""
                  className={`${active === "1" ? "active" : ""}`}
                  id="1"
                  onClick={handleClick}
                >
                  Property Details
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active-custom"
                to="floor_plan"
                spy={true}
                smooth={true}
                offset={-130}
              >
                <a
                  href=""
                  className={`${active === "2" ? "active" : ""}`}
                  id="2"
                  onClick={handleClick}
                >
                  Floor Plan
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active-custom"
                to="amenites"
                spy={true}
                smooth={true}
                offset={-180}
              >
                <a
                  href=""
                  className={`${active === "3" ? "active" : ""}`}
                  id="3"
                  onClick={handleClick}
                >
                  Amenities
                </a>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active-custom"
                to="disclamer"
                spy={true}
                smooth={true}
                offset={-40}
              >
                <a
                  href=""
                  className={`${active === "4" ? "active" : ""}`}
                  id="4"
                  onClick={handleClick}
                >
                  Disclamer
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="projectdetails">
          <div className="section" id="details">
            <div className="pro_details">
              <span className="rera_no">
                RERA Certificate No. <label>{specProp.rera_no}</label>
              </span>
              <h4 className="project_name">{specProp.title}</h4>
              <img src={seal} alt="" className="seal-img" />
              <p className="devoloper">{specProp.developer}</p>
              <p className="location">
                <i class="bi bi-geo-alt"></i> {specProp.location}
                <div className="pro_text"></div>
              </p>
              <div className="pricing">
                <h5>Pricing</h5>
              </div>
              <div className="rupee">
                <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                {specProp.pricingmin} - {specProp.pricing_max}
              </div>

              <a
                class="callback-btn"
                href={`${specProp.website_property}`}
                role="button"
              >
                <i class="bi bi-link-45deg"></i> Project Website{" "}
                <i class="bi bi-arrow-right"></i>
              </a>

              <div className="emi list_row">
                <a href="" className="emi_estimation">
                  Calculate estimated EMI
                </a>
              </div>
              <h5>Other Details</h5>
              <div className="other_details">
                <div className="det_col">
                  <span>Possesion in</span>
                  <label>{specProp.possession}</label>
                </div>
                <div className="det_col">
                  <span>Configuration (BUA)</span>
                  <label>{specProp.configuration}</label>
                </div>
                <div className="det_col">
                  <span>Carpet Area</span>
                  <label>{specProp.carpet_area}</label>
                </div>
                <div className="det_col">
                  <span>Towers</span>
                  <label>{specProp.tower}</label>
                </div>
                <div className="det_col">
                  <span>Floors</span>
                  <label>{specProp.floor}</label>
                </div>
                <div className="det_col">
                  <span>Apartments per Floor</span>
                  <label>{specProp.apartment_per_floor}</label>
                </div>
              </div>
              <h5>Why You should buy this property</h5>
              <ul className="list">
                {specProp.why?.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="section" id="floor_plan">
            <div className="detail_row">
              <div className="p_heading">
                <div className="h_text">Floor Plan</div>
              </div>
              <div className="detail_data">
                <div className="tab_wrap left_tab">
                  <ul className="nav nav-tabs">
                    <Tabs
                      classes={{
                        root: "tabs",
                        indicator: "indicator",
                      }}
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <Tab
                        label="All"
                        value={0}
                        classes={{ root: "tab_link" }}
                        onFocus={(event) => {
                          setActiveTab(0);
                        }}
                      />
                      {specProp.bhk?.map((e) => {
                        return (
                          <Tab
                            classes={{ root: "tab_link" }}
                            label={`${e} BHK`}
                            onFocus={(event) => {
                              setActiveTab(e);
                            }}
                          />
                        );
                      })}
                    </Tabs>
                  </ul>{" "}
                  <div className="tab_content">
                    <Box sx={{ padding: 2 }}>
                      <div className="tab-pane">
                        <OwlCarousel
                          className="owl-theme"
                          loop={false}
                          responsive={resp}
                          margin={30}
                          dots={true}
                          nav
                        >
                          {specProp.bhk_no
                            ?.filter(
                              (item) =>
                                item.bhk === activeTab || activeTab === 0
                            )
                            .map((item) => {
                              return <FloorPlanBox price={item.Price} />;
                            })}
                        </OwlCarousel>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="amenites">
            <div className="detail_row aminites">
              <div className="p_heading">
                <div className="h_text">Amenites</div>
              </div>
              <div className="detail_data amenities_box">
                <div className="row row-cols-3">
                  {specProp.amenites?.map((e) => {
                    return (
                      <div className="col">
                        <span className="a_name">
                          {" "}
                          <span className="bullet_point">&bull;</span> {e}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="detail_row">
              <div className="p_heading">
                <div className="h_text">Similar Properties</div>
              </div>
              <div className="detail_data property-display ">
                <SimilarProperties
                  state={specProp.state}
                  data={specProp}
                  id={specProp._id}
                />
              </div>
            </div>
          </div>

          <div className="contact_form" id="contact_form">
            <h5>Contact Now</h5>
            <div className="form-group">
              <label className="lable">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label className="lable">Mobile No.</label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                className="form-control"
                placeholder="Mobile No"
              />
            </div>
            <div className="form-group">
              <label className="lable">Email ID</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email ID"
              />
            </div>
            <div className="form-group">
              <label className="lable">Project Name</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter Project Name"
              />
            </div>
            <div className="form-group ">
              <label className="lable">Select Project City</label>
              <div className="drop">
                <input
                  type="text"
                  name=""
                  id="city"
                  placeholder="City Name"
                  onFocus={toggleDrop}
                  onBlur={removeDrop}
                />
                <div className={`drop_box ${drop == "city" ? "" : "hide"}`}>
                  <ul className="all-list">
                    <li>Greater Noida</li>
                    <li>Gurugram</li>
                    <li>Deharadun</li>
                    <li>Noida</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form-group ">
              <label className="lable">Select Project State</label>
              <div className="drop">
                <input
                  type="text"
                  name=""
                  id="state"
                  placeholder="City Name"
                  onFocus={toggleDrop}
                  onBlur={removeDrop}
                />
                <div className={`drop_box ${drop == "state" ? "" : "hide"}`}>
                  <ul className="all-list">
                    <li>Greater Noida</li>
                    <li>Gurugram</li>
                    <li>Deharadun</li>
                    <li>Noida</li>
                  </ul>
                </div>
              </div>
              <div className="form-group">
                <label className="lable">Budget</label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  className="form-control"
                  placeholder="in Lakhs (INR)"
                />
              </div>
              <div className="form-group">
                <label className="lable">Remarks</label>
                <textarea
                  className="form-control Remarks"
                  placeholder="Remarks"
                  name="remark"
                  id="remark"
                  maxchar="250"
                  rows="1"
                ></textarea>
              </div>
              <div className="form-group btns">
                <button type="button" className="btn btn-primary rounded-pill">
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="section disclaimer">
          <div className="container">
            <p>
              <strong>Disclaimer</strong> <br />
              SBICAP Securities Limited through its division SBI Realty
              solutions deals in Pre Launch, Under construction, Ready
              Possession. SBICAP Securities Limited through its division SBI
              Realty solutions provides a unified platform for exchange of
              information & facts for buyers, builders & sellers. SBICAP
              Securities Limited through its division SBI Realty solutions is
              merely an intermediary for exchange of information to facilitate
              the transactions between Builder, Developers / Seller and Customer
              / Buyer and is not and cannot be a party to or control in any
              manner any transactions/disputes between the Seller and the Buyer.
              Projects featured on www.sbirealty.in are SBI approved projects
              only. SBICAP Securities Limited through its division SBI Realty
              solutions shall neither be responsible nor liable to mediate or
              resolve any disputes or disagreements arising between the Buyer &
              Seller and both Seller and Buyer shall settle all such disputes
              without involving SBICAP Securities Limited through its division
              SBI Realty solutions in any manner whatsoever. The Website
              provides in depth analysis of the Property Market with more than
              2400 Under Construction Projects developed, which are currently
              under development by more than 800 Developers. The website
              features latest prices, digital pictures of projects in various
              construction stages. The focus of the website is on Home Buyers
              looking to buy or upgrade to a New Home or Invest in under
              construction project or pre-launches by reputed builders.
            </p>
          </div>
        </div>
      </div>

      <section className="section-11">
        <h4 className="text-center title">Are you an Agent?</h4>
        <p className="description text-center">
          Learn how you can leverage our platform &amp; products with your{" "}
          <Link
            activeClass="active-custom"
            to="details"
            spy={true}
            smooth={true}
            offset={-40}
          >
            <span className="link">clients</span>{" "}
          </Link>
        </p>
      </section>
    </div>
  );
}

export default ProductPage;
