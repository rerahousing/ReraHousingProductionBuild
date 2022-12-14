import React, { useState } from "react";
import bed2 from "../Resources/bed.svg";
import fire2 from "../Resources/fire.svg";
import bed from "../Resources/bed.svg";
import seal from "../Resources/seal.png";

function Card6Grid(props) {
  const [show, setShow] = useState(false);
  const {
    _id,
    rera_no,
    title,
    developer,
    city,
    state,
    bhk,
    bhk_no,
    pricingmin,
    pricing_max,
    website_property,
    possession,
    configuration,
    carpet_area,
    tower,
    floor,
    apartment_per_floor,
    why,
    other_fet,
    amenites,
    priceMaxFormated,
    priceMinFormated,
    project_status,
    views,
    hot_deal,
    developer_logo,
    imgCollection,
  } = props.data;
  const image = imgCollection[0]?.url;
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
    return data2;
  };

  const promptText = () => {
    let url = window.location.href;
    navigator.clipboard.writeText(url + `/${_id}`);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <div
      className={`property-card-basic grid-card ${
        props.view === "Grid" ? "" : "hide"
      }`}
    >
      {hot_deal ? (
        <span className="badge rounded-pill">
          {" "}
          <img src={fire2} alt="" style={{ width: "20%" }} /> Hot Deals
        </span>
      ) : (
        ""
      )}
      <span class="badge rounded-pill Featured">
        <i class="fi fi-rs-eye"></i> {changeFormatPrice(views)}
      </span>
      <span className="dev-logo rounded-circle">
        <img src={`${developer_logo.url}`} alt="" style={{ width: "100%" }} />
      </span>
      <button
        type="button"
        className="btn btn-transparent share"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
        onClick={promptText}
      >
        <i class="bi bi-share-fill"></i>
      </button>
      <div className={`${show ? "copied-prompt" : "hidden-opacity"}`}>
        Copied to clipboard !!
      </div>
      <div className="image">
        <img src={`${image ? image : ""}`} alt="" />
      </div>
      <div className="card-body">
        <span className="seal rounded-circle">
          <img src={seal} alt="" style={{ width: "100%" }} />
        </span>
        <span className="rera-no">
          RERA Certificate No. <label>{rera_no}</label>
        </span>
        <h4 className="property-name">{title}</h4>
        <p className="developer">{developer}</p>
        <p className="location">
          <i className="bi bi-geo-alt mr-3"></i>
          {state + " ," + city}
        </p>
        <p className="bhk">
          {" "}
          <img
            src={bed2}
            alt=""
            style={{ width: "27px", display: "inline-block" }}
            className="mr-3"
          />{" "}
          {bhk?.map((e, i) => {
            return (
              <span>
                {e}
                {i !== bhk.length - 1 ? ", " : " BHK"}
              </span>
            );
          })}
        </p>
        <div className="price-bottom">
          <span className="price">
            <i class="fa fa-inr" aria-hidden="true"></i>
            {priceMinFormated} - {priceMaxFormated}
          </span>
          <a
            type="button"
            class="btn btn-custom"
            target="_blank"
            href={`/${_id}`}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card6Grid;
