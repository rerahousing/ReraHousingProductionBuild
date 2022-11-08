import React from "react";
import "../Styles/Card_2.css";

function Card_2(props) {
  return (
    <>
      <div className="col-12 col-xxl-4 col-lg-6">
        <article
          className="card w-100 d-flex flex-column justify-content-between"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div className="card_info rounded-bottom">
            <h3 className="card-title">{props.city}</h3>
          </div>
          <div className="button">
            <button type="button" className="btn btn-light">
              Search {props.category}
            </button>
          </div>
        </article>
      </div>
    </>
  );
}

export default Card_2;
