import React, { useState, useEffect, useContext } from "react";
import Card6 from "./Card6.js";
import sortImage from "../Resources/sort.png";
import Card6Grid from "./Card6Grid.js";
import PropertyContext from "../Context/Property/PropertyContext.js";
import "../Styles/Project.css";

function Project() {
  const context = useContext(PropertyContext);
  const { property, getProperty } = context;
  useEffect(() => {
    getProperty();
  }, []);

  const [view, setView] = useState("List");
  const [sort, setSort] = useState("Relevence");
  var propertyCount = 0;
  const changeView = () => {
    if (view === "List" && window.innerWidth >= 768) {
      setView("Grid");
    } else {
      setView("List");
    }
  };
  return (
    <div className="map_projectlist">
      <div className="container my-3 property-display">
        <div className="header d-inline-block">
          <h2>Property: {propertyCount}</h2>

          <div className="more-filter d-inline-block">
            <div className="sort-btn d-inline-block">
              <div className="dropdown">
                <button
                  className="btn btn-dropdown dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={sortImage} alt="" style={{ marginRight: "7px" }} />
                  Frequently Searched
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      U.P.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      M.P.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Haryana
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="view-btn d-inline-block">
              <button type="button" class="btn btn-light" onClick={changeView}>
                {`${view}`} View
              </button>
            </div>
          </div>
        </div>
        <div className="card-group-custom container my-3">
          <div className="row">
            {property.map((item) => {
              if (view === "List") {
                return <Card6 data={item} />;
              } else if (view === "Grid") {
                return (
                  <Card6Grid
                    id={item.id}
                    title={item.title}
                    dev={item.developer}
                    rera_no={item.rera_no}
                    bhk={item.bhk}
                    view={view}
                    data={item}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="bottom-banner">
        <h1>
          Design <span>For</span> Life
        </h1>
        <p>~by RERAHousing.in</p>
      </div>
    </div>
  );
}

export default Project;
