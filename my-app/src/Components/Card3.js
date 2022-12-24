import React from "react";
import "../Styles/Card_3.css";

function Card_3(props) {
  const changeStyle = () => {
    props.setColor(true);
  };

  const changeStyleBack = () => {
    props.setColor(false);
  };

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px" }}
      id="card"
      onMouseEnter={changeStyle}
      onMouseLeave={changeStyleBack}
    >
      <div className="row g-0 align-items-center">
        <div className="col">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.text}</h5>

            <p className="card-text">{props.des}</p>
            <a href={props.link} className="link">
              Learn more <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_3;
