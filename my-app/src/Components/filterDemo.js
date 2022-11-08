import React, { useState } from "react";
import "../Styles/ProjectList.css";
import "../Styles/demo.css";

function FilterDemo() {
  const [count, setCount] = useState(0);
  const [dropdown, setDropdown] = useState("0");
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("1");

  const showMenu = () => {
    setShow(!show);
  };

  const dropdownSet = (e) => {
    if (e.target.id === dropdown) {
      setDropdown("0");
    } else {
      setDropdown(e.target.id);
    }
  };

  const markActive = (e) => {
    setActive(e.target.id);
  };

  const toggleActive = (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      setCount(count - 1);
    } else {
      e.currentTarget.classList.add("active");
      setCount(count + 1);
    }
  };

  const clearAll = (e) => {
    const filterBtn = document.querySelectorAll(".active-filter");
    filterBtn.forEach((btns) => {
      btns.classList.remove("active");
    });
    setCount(0);
  };

  const done = () => {
    setShow(false);
  };
  return (
    <div className="container-fluid filter-container">
      <div id="navbarSupportedContent">
        <div className="me-auto mb-2 mb-lg-0 w-100 justify-content-end">
          <div className="nav-item m-2">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle rounded-pill"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-item col m-2">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle rounded-pill"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
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
                Projects
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
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

              <div className={`dropdown-menu-custom  ${show ? "" : "hide"}`}>
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
                            active === "2" ? "active" : ""
                          }`}
                          id={"2"}
                          onClick={markActive}
                        >
                          Segment
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
                      <div className="button my-2">
                        <button
                          type="button"
                          className={`btn btn-secondary rounded-pill ${
                            active === "4" ? "active" : ""
                          }`}
                          id={"4"}
                          onClick={markActive}
                        >
                          Nearby
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
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Apartment
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Row House / Villa
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Independent Floor
                          </button>
                        </div>
                      </div>
                      <div
                        className={`list list-2 row ${
                          active === "2" ? "" : "hide"
                        }`}
                      >
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Affordable
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Mid
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Luxary
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
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Badminton Court
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Banquet Hall
                          </button>
                        </div>
                        <div className="button my-2 col-6">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            CCTV
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Children Play Area
                          </button>
                        </div>
                      </div>
                      <div
                        className={`list list-4 row ${
                          active === "4" ? "" : "hide"
                        }`}
                      >
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            School
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Hospital
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Badmiton Court
                          </button>
                        </div>
                        <div className="button my-2 col">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-pill active-filter"
                            onClick={toggleActive}
                          >
                            Badmiton Court
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
            <button type="button" className="btn btn-secondary rounded-pill">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDemo;
