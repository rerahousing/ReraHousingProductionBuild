import React from "react";
import image from "../Resources/blog-1.jpg";
import bed from "../Resources/bed.svg";
import seal from "../Resources/seal.png";

function Card6Grid(props) {
  return (
    <div
      className={`property-card-basic grid-card ${
        props.view === "Grid" ? "" : "hide"
      }`}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <span className="seal rounded-circle">
          <img src={seal} alt="" style={{ width: "100%" }} />
        </span>
        <span className="rera-no">
          RERA Certificate No. <label>{props.rera_no}</label>
        </span>
        <h4 className="property-name">{props.title}</h4>
        <p className="developer">{props.dev}</p>
        <p className="location">
          <i className="bi bi-geo-alt mr-3"></i>
          {props.location}
        </p>
        <p className="bhk">
          {" "}
          <img
            src={bed}
            alt=""
            style={{ width: "27px", display: "inline-block" }}
            className="mr-3"
          />{" "}
          {props.bhk}
        </p>
        <div className="price-bottom">
          <span className="price">Rs. 39.6 Lacs - 71.5 Lacs</span>
          <button type="button" class="btn btn-custom">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card6Grid;
