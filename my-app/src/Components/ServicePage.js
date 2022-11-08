import React, { useState } from "react";
import "../Styles/ServicePage.css";
import Services from "./Services";

function ServicePage() {
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);
  const [active, setActive] = useState("1");

  const showMenu = () => {
    setShow(!show);
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
    <>
      <nav className="navbar navbar-expand-lg bg-transparent project-list">
        <div className="container-fluid filter-container">
          <div id="navbarSupportedContent2">
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
                    Select State
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
                    Select City
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
                    Services
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        RERA Agents
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Architects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Interior Designer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Vastu Consultant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property Lawyer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Builder
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
                    Availability
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Online
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Offline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Online/Offline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav-item filter-submit m-2">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Services />
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
