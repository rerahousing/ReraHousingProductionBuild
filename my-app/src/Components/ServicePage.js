import React, { useState, useEffect } from "react";
import "../Styles/ServicePage.css";
import Services from "./Services";

function ServicePage() {
  const [filter, setFilter] = useState({
    availability: "All",
    services: "All",
  });
  
  const [effect, setEffect] = useState(0);
  useEffect(() => {
    const availability = sessionStorage.getItem("availability");
    const services = sessionStorage.getItem("services");
    setFilter({
      availability: availability ? availability : "All",
      services: services ? services : "All",
    });
  }, [effect]);

  const [input, setInput] = useState({
    availability: "All",
    services: "All",
  });

  const setFilterOpt = (e) => {
    sessionStorage.setItem(e.target.name, e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="bottom-banner">
        <h1>
          Design <span>For</span> Life
        </h1>
        <p>~by RERAHousing.in</p>
      </div>
      <nav className="navbar navbar-expand-lg bg-transparent project-list">
        <div className="container-fluid filter-container">
          <div id="navbarSupportedContent2">
            <div className="me-auto mb-2 mb-lg-0 w-100 justify-content-end d-flex">
              <div className="nav-item col m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="nav-item col m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="nav-item dropdown m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="availability"
                  onChange={setFilterOpt}
                >
                  <option selected value="All">
                    Availability
                  </option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Online/Offline">Online/Offline</option>
                </select>
              </div>

              <div className="nav-item dropdown m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="services"
                  onChange={setFilterOpt}
                >
                  <option selected value="All">
                    Services
                  </option>
                  <option value="RERA Agent">RERA Agent</option>
                  <option value="Vastu Consultant">Vastu Consultant</option>
                  <option value="Architects">Architects</option>
                  <option
                    value="Property Lawyer
"
                  >
                    Property Lawyer
                  </option>
                  <option
                    value="Interior Designer
"
                  >
                    Interior Designer
                  </option>
                  <option value="Builder">Builder</option>
                </select>
              </div>

              <div className="nav-item filter-submit m-2">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                  onClick={() => {
                    setFilter(input);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Services filter={filter} />
      <div className="bottom-banner">
        <h1>
          Design <span>For</span> Life
        </h1>
        <p>~by RERAHousing.in</p>
      </div>
    </>
  );
}

export default ServicePage;
