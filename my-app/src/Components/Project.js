import React, { useState, useEffect, useContext } from "react";
import Card6 from "./Card6.js";
import sortImage from "../Resources/sort.png";
import Card6Grid from "./Card6Grid.js";
import LoadingComponent from "./LoadingComponent";
import PropertyContext from "../Context/Property/PropertyContext.js";
import "../Styles/Project.css";

function Project(props) {
  const context = useContext(PropertyContext);
  const { property, getProperty } = context;
  const [loading, setLoading] = useState();
  let amenities = JSON.parse(sessionStorage.getItem("amenities"));
  let subType = JSON.parse(sessionStorage.getItem("sub-type"));
  const { filter, keyword } = props;
  useEffect(() => {
    setLoading(true);
    getProperty();
    amenities = JSON.parse(sessionStorage.getItem("amenities"));
    setLoading(false);
  }, []);
  const [view, setView] = useState("List");

  const [sort, setSort] = useState("Relevence");

  const changeView = () => {
    if (view === "List" && window.innerWidth >= 768) {
      setView("Grid");
    } else {
      setView("List");
    }
  };
  const page = (
    <div className="map_projectlist">
      <div className="container my-3 property-display">
        <div className="header d-inline-block">
          <h2>
            Property:{" "}
            {
              property
                ?.filter((item) =>
                  filter.price !== 0
                    ? item.pricing_max <= filter.price ||
                      item.pricingmin <= filter.price
                    : item.pricing_max !== ""
                )
                .filter((item) =>
                  filter.bhk != 0
                    ? item.bhk.includes(Number(filter.bhk))
                    : filter.bhk !== ""
                )
                .filter((item) =>
                  filter.project_status !== "Not Specified"
                    ? item.project_status === filter.project_status
                    : filter.project_status !== "xyz"
                )
                .filter((item) =>
                  keyword !== "All"
                    ? item.title.toLowerCase().includes(keyword.toLowerCase())
                    : filter.keyword !== "xyz"
                )
                .filter((item) =>
                  amenities !== null
                    ? amenities?.every((val) => item.amenites.includes(val))
                    : true
                )
                .filter((item) =>
                  subType !== null || ""
                    ? subType?.every((val) => item.property_type.includes(val))
                    : true
                ).length
            }
          </h2>

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
            {property
              ?.filter((item) =>
                filter.price !== 0
                  ? item.pricing_max <= filter.price ||
                    item.pricingmin <= filter.price
                  : item.pricing_max !== ""
              )
              .filter((item) =>
                filter.bhk != 0
                  ? item.bhk.includes(Number(filter.bhk))
                  : filter.bhk !== ""
              )
              .filter((item) =>
                filter.project_status !== "Not Specified"
                  ? item.project_status === filter.project_status
                  : filter.project_status !== "xyz"
              )
              .filter((item) =>
                keyword !== "All"
                  ? item.title.toLowerCase().includes(keyword.toLowerCase())
                  : filter.keyword !== "xyz"
              )
              .filter((item) =>
                amenities !== null || ""
                  ? amenities?.every((val) => item.amenites.includes(val))
                  : true
              )
              .filter((item) =>
                subType !== null || ""
                  ? subType?.every((val) => item.property_type.includes(val))
                  : true
              )
              .map((item, index) => {
                const imageCard = item.imgCollection;
                if (view === "List") {
                  return (
                    <Card6 data={item} image={imageCard[0]} index={index} />
                  );
                } else if (view === "Grid") {
                  return (
                    <Card6Grid
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
  return loading ? <LoadingComponent /> : page;
}

export default Project;
