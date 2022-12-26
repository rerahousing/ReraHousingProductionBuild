import React, { useState, useEffect, useContext } from "react";
import Card6 from "./Card6.js";
import Card6Grid from "./Card6Grid.js";
import LoadingComponent from "./LoadingComponent";
import Pagination from "./Pagination.js";
import PropertyContext from "../Context/Property/PropertyContext.js";
import "../Styles/Project.css";

function Project(props) {
  const context = useContext(PropertyContext);
  const { property, getProperty, loadProperty } = context;
  const [loading, setLoading] = useState();
  const pages = 1;
  const perPage = 1;
  let amenities = JSON.parse(sessionStorage.getItem("amenities"));
  let subType = JSON.parse(sessionStorage.getItem("sub-type"));
  const { filter, keyword } = props;
  useEffect(() => {
    getProperty(pages, perPage);
    amenities = JSON.parse(sessionStorage.getItem("amenities"));
  }, []);

  const [view, setView] = useState("List");

  const filterProperty = property
    ?.filter((item) =>
      filter.price !== 0
        ? item.pricing_max <= filter.price || item.pricingmin <= filter.price
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
    )
    .filter((item) =>
      filter.project_state !== "Select State"
        ? item.state === filter.project_state
        : true
    )
    .filter((item) =>
      filter.project_city !== "Select City"
        ? item.city === filter.project_city
        : true
    ).length;
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
          <h2>Property: {filterProperty}</h2>

          <div className="more-filter d-inline-block">
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
                amenities !== null
                  ? amenities?.every((val) => item.amenites.includes(val))
                  : true
              )
              .filter((item) =>
                subType !== null || ""
                  ? subType?.every((val) => item.property_type.includes(val))
                  : true
              )
              .filter((item) =>
                filter.project_state !== "Select State"
                  ? item.state === filter.project_state
                  : true
              )
              .filter((item) =>
                filter.project_city !== "Select City"
                  ? item.city === filter.project_city
                  : true
              )
              .map((item, index) => {
                const imageCard = item.imgCollection;
                if (view === "List") {
                  return (
                    <Card6 data={item} image={imageCard[0]} index={index} />
                  );
                }
                if (view === "Grid") {
                  return (
                    <>
                      <Card6Grid
                        data={item}
                        image={imageCard[0]}
                        index={index}
                      />
                    </>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Pagination pages={pages} />
      <div className="bottom-banner">
        <h1>
          Design <span>For</span> Life
        </h1>
        <p>~by RERAHousing.in</p>
      </div>
    </div>
  );
  return loadProperty ? <LoadingComponent /> : page;
}

export default Project;
