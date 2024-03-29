import React from "react";
import SimilarProperties from "./SimilarProperties";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CarosulImage from "./CarosulImage";
import "../Styles/ProductPage.css";
import PropertyContext from "../Context/Property/PropertyContext";
import LoadingComponent from "./LoadingComponent";
import seal from "../Resources/seal.png";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import { Tab, Tabs } from "@mui/material";
import FloorPlan_Wrapper from "./FloorPlan_Wrapper";
import data from "./Data";

function ProductPage() {
  const [effect, setEffect] = useState(0);
  const [showValid, setShowValid] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const context = useContext(PropertyContext);
  const { specProp, getSpecificProperty, bhkNo, addContact, loadProperty } =
    context;
  const [contactDet, setContactDet] = useState([]);

  const { image } = specProp;

  const params = useParams();
  useEffect(() => {
    getSpecificProperty(params.id);
  }, [effect]);

  const [drop, setDrop] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState("1");
  const [value, setValue] = useState(0);
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const availableCity = data.state.find((s) => s.name === selectedState);

  const checkSubmit = (e) => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      if (!form.checkValidity()) {
        setShowInvalid(true);
        e.preventDefault();
        e.stopPropagation();
      } else {
        setShowValid(true);
        addContactForm(e);
        form.reset();
      }
    });
  };

  const dateConvertion = (date) => {
    let dateInput = date || "N/A";
    let dateFormated = dateInput.substring(0, 10);
    return dateFormated;
  };

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

  const removeDrop = () => {
    setDrop("");
  };

  const inputContact = (e) => {
    setContactDet({ ...contactDet, [e.target.name]: e.target.value });
  };

  const addContactForm = () => {
    const formData = new FormData();
    formData.append("name", contactDet.name);
    formData.append("mobile", contactDet.mobile);
    formData.append("email", contactDet.email);
    formData.append("project_name", contactDet.project_name);
    formData.append("project_city", contactDet.project_city);
    formData.append("project_state", contactDet.project_state);
    formData.append("budget", contactDet.budget);
    formData.append("remarks", contactDet.remarks);
    addContact(formData);
  };

  const page = (
    <>
      <Helmet>
        <title>{`Property_${specProp.title}`}</title>
        <meta
          property="og:description"
          content="List of all 1bhk, 2bhk, 3bhk, 4bhk flats, villas and duplex for sale and all are RERA approved"
        />
        <meta
          property="og:keywords"
          content="RERA, projects, 1bhk, 2bhk, 3bhk, 4bhk, flats duplex, villa"
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <div className="product-page">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <CarosulImage image={specProp.imgCollection} />

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
                  <i class="bi bi-geo-alt"></i>{" "}
                  <div className="pro_text">
                    {specProp.state + " ," + specProp.city}
                  </div>
                </p>
                <div className="pricing">
                  <h5>Pricing</h5>
                </div>
                <div className="rupee">
                  <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                  {specProp.priceMinFormated} - {specProp.priceMaxFormated}
                </div>

                <a
                  class="callback-btn"
                  href={`${specProp.website_property}`}
                  role="button"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i> Project Website{" "}
                  <i class="bi bi-arrow-right"></i>
                </a>

                <div className="emi list_row">
                  <a
                    href="https://www.paisabazaar.com/home-loan-emi-calculator/"
                    target="_blank"
                    className="emi_estimation"
                  >
                    Calculate estimated EMI
                  </a>
                </div>
                <h5>Other Details</h5>
                <div className="other_details">
                  <div className="det_col">
                    <span>Possesion in</span>
                    <label>{dateConvertion(specProp.possession)}</label>
                  </div>
                  <div className="det_col">
                    <span>Configuration</span>
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
                <h5>Other Features</h5>
                <ul className="list">
                  {specProp.other_fet?.map((e) => {
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
                      </Tabs>
                    </ul>{" "}
                    <FloorPlan_Wrapper parsedBhkNo={bhkNo} data={specProp} />
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
                    {specProp.amenites?.map((e, index) => {
                      return (
                        <div className="col-6 col-sm-3" key={index}>
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
              {showValid && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ Color: "green" }}
                  ></i>

                  <div style={{ display: "inline" }}>
                    Form Submitted Successfully!
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => {
                      setShowValid(false);
                    }}
                  ></button>
                </div>
              )}
              {showInvalid && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <i
                    className="bi bi-exclamation-triangle-fill me-2"
                    style={{ Color: "red" }}
                  ></i>

                  <div style={{ display: "inline" }}>
                    Please Enter your Name, Email, Mobile & Project Name to get
                    Callback from Us!
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => {
                      setShowInvalid(false);
                    }}
                  ></button>
                </div>
              )}
              <form id="contact-form" className="needs-validation">
                <div className="form-group">
                  <label className="lable">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Full Name"
                    onChange={inputContact}
                    required
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
                    onChange={inputContact}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="lable">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={inputContact}
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="lable">Project Name</label>
                  <input
                    type="text"
                    name="project_name"
                    id="text"
                    className="form-control"
                    placeholder="Enter Project Name"
                    onChange={inputContact}
                    required
                  />
                </div>
                <div className="form-group ">
                  <label className="lable">Select Project City</label>

                  <select
                    className="form-select drop-product"
                    aria-label="Default select example"
                    name="project_city"
                    value={selectedCity}
                    onChange={(e) => {
                      inputContact(e);
                      setSelectedCity(e.target.value);
                    }}
                  >
                    <option>City Name</option>
                    {availableCity?.city.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>

                <div className="form-group ">
                  <label className="lable">Select Project State</label>

                  <select
                    className="form-select drop-product"
                    aria-label="Default select example"
                    placeholder="State Name"
                    name="project_state"
                    required
                    onChange={(e) => {
                      inputContact(e);
                      setSelectedState(e.target.value);
                      setSelectedCity("City Name");
                    }}
                  >
                    <option selected>State Name</option>
                    {data.state.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                    <div className="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </select>

                  <div className="form-group">
                    <label className="lable">Budget</label>
                    <input
                      type="text"
                      name="budget"
                      id="budget"
                      className="form-control"
                      placeholder="in Lakhs (INR)"
                      onChange={inputContact}
                    />
                  </div>
                  <div className="form-group">
                    <label className="lable">Remarks</label>
                    <textarea
                      className="form-control Remarks"
                      placeholder="Remarks"
                      name="remarks"
                      id="remark"
                      maxchar="250"
                      rows="1"
                      onChange={inputContact}
                    ></textarea>
                  </div>
                  <div className="form-group btns">
                    <input
                      type="submit"
                      className="btn btn-primary rounded-pill"
                      value="Request Callback"
                      onClick={(e) => {
                        e.preventDefault();
                        checkSubmit(e);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="section disclaimer">
            <div className="container">
              <p>
                <strong>Disclaimer</strong> <br />
                RERAhousing.in deals in Pre Launch, Under construction, Ready
                Possession. RERAhousing.in provides a unified platform for
                exchange of information & facts for buyers, builders & sellers.
                RERAhousing.in is merely an intermediary for exchange of
                information to facilitate the transactions between Builder,
                Developers / Seller and Customer / Buyer and is not and cannot
                be a party to or control in any manner any transactions/disputes
                between the Seller and the Buyer. Projects featured on
                www.rerahousing.in are RERA approved projects only.
                RERAhousing.in shall neither be responsible nor liable to
                mediate or resolve any disputes or disagreements arising between
                the Buyer & Seller and both Seller and Buyer shall settle all
                such disputes without involving rerahousing.in in any manner
                whatsoever. The Website provides in depth analysis of the
                Property Market with more than 2400 Under Construction Projects
                developed, which are currently under development by more than
                800 Developers. The website features latest prices, digital
                pictures of projects in various construction stages. The focus
                of the website is on Home Buyers looking to buy or upgrade to a
                New Home or Invest in under construction project or pre-launches
                by reputed builders.
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
    </>
  );

  return <>{loadProperty ? <LoadingComponent /> : page}</>;
}

export default ProductPage;
