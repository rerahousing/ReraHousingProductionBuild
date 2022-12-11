import React, { useState } from "react";
import "../Styles/Project.css";
import bed from "../Resources/bed.svg";
import fire from "../Resources/fire.svg";
import logo from "../Resources/ex-logo.svg";
import seal from "../Resources/seal.png";
import "../Styles/Card_6.css";

function Card6(props) {
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
  } = props.data;

  const { image } = props;

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
    <>
      <div
        className={`property-card-basic card col-5 rounded-0 ${
          props.view === "Grid" ? "hide" : ""
        }`}
      >
        {hot_deal ? (
          <span className="badge rounded-pill">
            {" "}
            <img src={fire} alt="" style={{ width: "20%" }} /> Hot Deals
          </span>
        ) : (
          ""
        )}
        <span class="badge rounded-pill Featured">
          <i class="fi fi-rs-eye"></i> {changeFormatPrice(views)}
        </span>

        <span className="dev-logo rounded-circle">
          <img
            src={`https://rera-housing-production-build-2ybt.vercel.app${developer_logo}`}
            alt=""
            style={{ width: "100%" }}
          />
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

        <img
          src={`https://rera-housing-production-build-2ybt.vercel.app${props.image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="seal rounded-circle">
            <img src={seal} alt="" />
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
              src={bed}
              alt=""
              style={{ width: "22px" }}
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
              className="btn btn-primary rounded-circle"
              target="_blank"
              href={`/rera-approved-projects-villa-duplex-flats/${_id}`}
            >
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card6;
