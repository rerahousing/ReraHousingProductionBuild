import React, { useState, useEffect } from "react";
import "../Styles/ServicePage.css";
import Services from "./Services";
import data from "./Data";

function ServicePage() {
  const [filter, setFilter] = useState({});
  const [effect, setEffect] = useState(0);
  useEffect(() => {
    const availability = sessionStorage.getItem("availability");
    const services = sessionStorage.getItem("services");
    const state = sessionStorage.getItem("state");
    const city = sessionStorage.getItem("city");
    setFilter({
      availability: availability ? availability : "All",
      services: services ? services : "All",
      state: state ? state : "Select State",
      city: city ? city : "Select City",
    });
    selectBox();
  }, [effect]);
  const selectBox = () => {
    const state = sessionStorage.getItem("state");
    const city = sessionStorage.getItem("city");
    const stateSelectBox = document.getElementById("stateSelect");
    stateSelectBox.value = state ? state : "Select State";
    setSelectedState(state);
    setSelectedCity(city);
  };
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const availableCity = data.state.find((s) => s.name === selectedState);
  const [input, setInput] = useState({
    availability: "All",
    services: "All",
    state: "Select State",
    city: "Select City",
  });

  const setFilterOpt = (e) => {
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
            <div className="me-auto mb-2 mb-lg-0 w-100 row-cols-12">
              <div className="nav-item col m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="state"
                  id="stateSelect"
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setInput({
                      ...input,
                      city: "Select City",
                      state: e.target.value,
                    });

                    setSelectedCity("Select City");
                  }}
                  defaultValue="All"
                >
                  <option selected value="Select State">
                    Select State
                  </option>
                  {data.state.map((item, index) => {
                    return (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="nav-item col m-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="city"
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setFilterOpt(e);
                  }}
                >
                  <option selected value="Select City">
                    Select City
                  </option>
                  {availableCity?.city.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="nav-item col dropdown m-2">
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

              <div className="nav-item col dropdown m-2">
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

              <div className="nav-item col filter-submit m-2">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                  onClick={() => {
                    sessionStorage.setItem("state", input.state);
                    sessionStorage.setItem("city", input.city);
                    sessionStorage.setItem("availability", input.availability);
                    sessionStorage.setItem("services", input.services);
                    setFilter({ ...input });
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
