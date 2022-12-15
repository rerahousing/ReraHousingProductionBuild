import React, { useState, useEffect } from "react";
import Project from "./Project";
import "../Styles/ProjectList.css";
import { Helmet } from "react-helmet";
import data from "./Data";

function ProjectList() {
  const [arr, setArr] = useState([] || "");
  let counter1 = 0;
  let counter2 = 0;
  const [arr2, setArr2] = useState([] || "");
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("All");
  const [input, setInput] = useState({
    bhk: 0,
    project_status: "Not Specified",
    search_keyword: "All",
    amenities: [],
    sub_type: [],
    project_city: "Select City",
    project_state: "Select State",
  });
  const [formatPrice, setFormatPrice] = useState("0");
  const [filter, setFilter] = useState({
    price: 0,
    bhk: 0,
    project_status: "Not Specified",
    search_keyword: "All",
    amenities: [],
    sub_type: [],
    project_city: "Select City",
    project_state: "Select State",
  });
  const changeFilter = (e) => {
    sessionStorage.setItem("price", Number(e.target.value * 100000));
    changeFormatPrice(e.target.value * 100000);
  };
  const changeFilterInput = (e) => {
    sessionStorage.setItem(e.target.name, e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const setFilterActive = (arr) => {
    const box = document.querySelectorAll(".amenities");
    box.forEach((item) => {
      if (arr?.includes(item.value)) {
        item.classList.add("active");
      }
    });
  };
  const [effect, setEffect] = useState(0);
  useEffect(() => {
    const price = sessionStorage.getItem("price");
    const bhk = sessionStorage.getItem("bhk");
    const project_status = sessionStorage.getItem("project_status");
    const range = document.getElementById("budget");
    const project_state = sessionStorage.getItem("project_state");
    const project_city = sessionStorage.getItem("project_city");
    setSelectedState(project_state);
    setSelectedCity(project_city);
    const selectBox = document.getElementById("stateSelect");
    selectBox.value = project_state || "Select State";
    const arr = JSON.parse(sessionStorage.getItem("amenities"));
    const arr2 = JSON.parse(sessionStorage.getItem("sub-type"));
    setFilterActive(arr);
    setArr(arr);
    setCount((arr?.length || 0) + (arr2?.length || 0));
    toggleActiveOnLoad(arr, arr2);
    range.value = price;
    changeFormatPrice(price);
    let data = document.getElementById("input_bhk");
    data.value = bhk ? bhk : 0;
    data = document.getElementById("input_project_status");
    data.value = project_status ? project_status : "Not Specified";
    setFilter({
      price: price ? Number(price) : 0,
      bhk: bhk ? bhk : 0,
      project_status: project_status ? project_status : "Not Specified",
      project_state: project_state ? project_state : "Select State",
      project_city: project_city ? project_city : "Select City",
    });
    setInput({
      ...input,
      project_city: project_city,
      project_state: project_state,
    });
  }, [effect]);

  const toggleActiveOnLoad = (arr, arr2) => {
    const box = document.querySelectorAll(".amenities");
    const box2 = document.querySelectorAll(".sub-type");
    box2.forEach((item) => {
      if (arr2?.includes(item.value)) {
        item.classList.add("active");
      }
    });
    box.forEach((item) => {
      if (arr?.includes(item.value)) {
        item.classList.add("active");
      }
    });
  };

  const changeFormatPrice = (price) => {
    let min = Math.abs(price);
    let data2 = 0;
    if (min > 999 && min <= 99999) {
      data2 = min / 1000.0;
      data2 = data2.toString() + " K";
    } else if (min > 99999 && min <= 9999999) {
      data2 = min / 100000.0;
      data2 = data2.toString() + " Lacs";
    } else if (min > 9999999) {
      data2 = min / 10000000.0;
      data2 = data2.toString() + " Cr";
    }
    setFormatPrice(data2);
  };

  const [show, setShow] = useState(false);
  const [active, setActive] = useState("1");

  const showMenu = () => {
    setShow(!show);
  };

  const markActive = (e) => {
    setActive(e.target.id);
  };

  const removeAmenities = (e) => {
    const filterAmenity = [...arr];
    const data = filterAmenity.filter((item) => item !== e.target.value);
    setArr(data);
  };

  const removeSubType = (e) => {
    const filterSubType = [...arr2];
    const data = filterSubType.filter((item) => item != e.target.value);
    setArr2(data);
  };
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const availableCity = data.state.find((s) => s.name === selectedState);

  const toggleActive = (e) => {
    if (e.target.name !== "sub-type") {
      if (e.currentTarget.classList.contains("active")) {
        removeAmenities(e);
        e.currentTarget.classList.remove("active");
      } else {
        const data = arr === null ? [] : [...arr];
        data.push(e.target.value);
        setArr(data);
        e.currentTarget.classList.add("active");
        counter1 = data.length;
      }
    }
    if (e.target.name === "sub-type") {
      if (e.currentTarget.classList.contains("active")) {
        removeSubType(e);
        e.currentTarget.classList.remove("active");
      } else {
        const data = arr2 === null ? [] : [...arr2];
        data.push(e.target.value);
        setArr2(data);
        e.currentTarget.classList.add("active");
        counter2 = data.length;
      }
    }
  };

  const clearAll = (e) => {
    const filterBtn = document.querySelectorAll(".active-filter");
    filterBtn.forEach((btns) => {
      btns.classList.remove("active");
    });

    setFilter({ ...filter, amenities: "" });
    setFilter({ ...filter, "sub-type": "" });
    setArr("");
    setArr2("");
    setCount(0);
  };

  const done = () => {
    const data = arr === null ? [] : [...arr];
    const data2 = arr2 === null ? [] : [...arr2];
    sessionStorage.setItem("amenities", JSON.stringify(data));
    sessionStorage.setItem("sub-type", JSON.stringify(data2));
    setFilter({ ...filter, amenities: data, "sub-type": data2 });
    setShow(false);
    setCount(arr.length + arr2.length);
  };

  const handleClick = (e) => {
    let priceSt = sessionStorage.getItem("price");
    let bhkSt = sessionStorage.getItem("bhk");
    let project_status = sessionStorage.getItem("project_status");
    let search_keyword = sessionStorage.getItem("search_keyword");
    let project_city = sessionStorage.getItem("project_city");
    let project_state = sessionStorage.getItem("project_state");
    setFilter({
      price: priceSt ? Number(priceSt) : 0,
      bhk: bhkSt ? bhkSt : 0,
      project_status: project_status ? project_status : "Not Specified",
      search_keyword: search_keyword ? search_keyword : "All",
      project_city: project_city ? project_city : "Select City",
      project_state: project_state ? project_state : "Select State",
    });
  };
  return (
    <>
      <Helmet>
        <title>List of all RERA Approved Housing Projects in India</title>
        <meta
          property="og:description"
          content="List of all 1bhk, 2bhk, 3bhk, 4bhk flats, villas and duplex for sale and all are RERA approved"
        />
        <meta
          property="og:keywords"
          content="RERA, projects, 1bhk, 2bhk, 3bhk, 4bhk, flats duplex, villa"
        />
      </Helmet>
      <nav className="navbar navbar-expand-lg bg-transparent project-list">
        <form className="d-flex input-row align-items-center" role="search">
          <div className="dropdown-group">
            <div className="dropdown">
              <select
                className="form-select"
                aria-label="Default select example"
                name="project_state"
                id="stateSelect"
                style={{ border: "none" }}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setInput({
                    ...input,
                    project_city: "Select City",
                    project_state: e.target.value,
                  });
                  setSelectedCity("Select City");
                  sessionStorage.setItem("project_state", e.target.value);
                  sessionStorage.setItem("project_city", "Select City");
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
            <div className="dropdown">
              <select
                className="form-select"
                aria-label="Default select example"
                name="project_city"
                id="citySelect"
                value={selectedCity}
                style={{ border: "none" }}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  changeFilterInput(e);
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
          </div>
          <input
            className="form-control input-search"
            type="search"
            name="search_keyword"
            placeholder="Search"
            aria-label="Search"
            onChange={changeFilterInput}
          />
          <div className="search-button">
            <button
              className="btn btn-outline-success btn-search rounded-circle"
              type="button"
              onClick={() => {
                setFilter({
                  ...filter,
                  project_city: input.project_city,
                  project_state: input.project_state,
                });
                setKeyword(input.search_keyword);
              }}
            >
              <i className="bi bi-search"></i>{" "}
              <span className="search-text" style={{ display: "none" }}>
                Search
              </span>
            </button>
          </div>
        </form>
        <div className="container-fluid filter-container">
          <div id="navbarSupportedContent2">
            <div className="me-auto mb-2 mb-lg-0 w-100 justify-content-end d-flex filter-options">
              <div className="nav-item m-2">
                <div className="dropdown">
                  <select
                    className="form-select"
                    name="project_status"
                    onChange={changeFilterInput}
                    id="input_project_status"
                    aria-label="Default select example"
                  >
                    <option value={"Not Specified"}>Project</option>
                    <option value={"Under Construction"}>
                      Under Construction
                    </option>
                    <option value="Ready to Move">Ready to Move</option>
                  </select>
                </div>
              </div>
              <div className="nav-item col m-2">
                <div className="dropdown">
                  <select
                    className="form-select"
                    name="bhk"
                    id="input_bhk"
                    onChange={changeFilterInput}
                    aria-label="Default select example"
                  >
                    <option value={0}>BHK</option>
                    <option value={1}>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
              </div>
              <div className="nav-item dropdown m-2">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle rounded-pill"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Budget
                  </a>

                  <ul className="dropdown-menu range">
                    <p>{formatPrice}</p>
                    <input
                      name="price"
                      type="range"
                      className="form-range"
                      min="0"
                      step="2"
                      max="1000"
                      id="budget"
                      onChange={changeFilter}
                    ></input>
                  </ul>
                </div>
              </div>
              <div className="nav-item dropdown m-2 dropdown-custom">
                <div className="dropdown-custom">
                  <a
                    className="btn btn-secondary dropdown-toggle rounded-pill"
                    role="button"
                    onClick={showMenu}
                    style={{ margin: "0", marginRight: "15px" }}
                  >
                    More Filters{" "}
                    <span className="badge text-bg-primary">{count}</span>
                  </a>

                  <div
                    className={`dropdown-menu-custom  ${show ? "" : "hide"}`}
                  >
                    <div className="filter d-flex flex-row">
                      <div className="pro-filter d-flex flex-col">
                        <div className="left-list w-100 p-2">
                          <div className="button">
                            <button
                              type="button"
                              className={`btn btn-secondary rounded-pill ${
                                active === "1" ? "active" : ""
                              }`}
                              id={"1"}
                              onClick={markActive}
                            >
                              Sub Type
                              <i
                                className="bi bi-arrow-right text-right"
                                style={{ display: "none" }}
                              ></i>
                            </button>
                          </div>
                          <div className="button my-2">
                            <button
                              type="button"
                              className={`btn btn-secondary rounded-pill ${
                                active === "3" ? "active" : ""
                              }`}
                              id={"3"}
                              onClick={markActive}
                            >
                              Amenities
                              <i
                                className="bi bi-arrow-right text-right"
                                style={{ display: "none" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div className="right-list w-100 p-2">
                          <div
                            className={`list list-1 row ${
                              active === "1" ? "" : "hide"
                            }`}
                          >
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter sub-type"
                                onClick={toggleActive}
                                value="Apartment"
                                name="sub-type"
                              >
                                Apartment
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter sub-type"
                                onClick={toggleActive}
                                value="Row House / Villa"
                                name="sub-type"
                              >
                                Row House / Villa
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter sub-type"
                                onClick={toggleActive}
                                value="Independent Floor"
                                name="sub-type"
                              >
                                Independent Floor
                              </button>
                            </div>
                          </div>

                          <div
                            className={`list list-3 row ${
                              active === "3" ? "" : "hide"
                            }`}
                          >
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Hospital"
                              >
                                Hospital
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Park"
                              >
                                Park
                              </button>
                            </div>
                            <div className="button my-2 col-6">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="School"
                              >
                                School
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Club House"
                              >
                                Club House
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Play Area"
                              >
                                Play Area
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Collage"
                              >
                                Collage
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Metro Station"
                              >
                                Metro Station
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Police Station"
                              >
                                Police Station
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Mall"
                              >
                                Mall
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Shopping Mall"
                              >
                                Shopping Mall
                              </button>
                            </div>
                            <div className="button my-2 col">
                              <button
                                type="button"
                                className="btn btn-secondary rounded-pill active-filter amenities"
                                onClick={toggleActive}
                                value="Cinema Hall"
                              >
                                Cinema Hall
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-group d-flex justify-content-end">
                        <div className="submit-btn">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill"
                            style={{ width: "auto" }}
                            onClick={done}
                          >
                            Done
                          </button>
                        </div>
                        <div className="clear-btn">
                          <button
                            type="button"
                            className="btn btn-secondary bg-grey rounded-pill"
                            onClick={clearAll}
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item filter-submit m-2">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                  onClick={handleClick}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Project filter={filter} keyword={keyword} />
    </>
  );
}

export default ProjectList;
