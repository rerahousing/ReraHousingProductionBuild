import React from "react";
import "../Styles/Card_4.css";
import quote from "../Resources/quote.svg";

function Card4(props) {
  return (
    <div className="col-md-6">
      <img src={quote} alt="" className="quote" />
      <div className="card rounded-0">
        <div className="card-body">
          <p className="card-text" style={{ color: "white" }}>
            {props.feedback}
          </p>
        </div>
        <div className="profile d-flex align-items-center">
          <img
            style={{ width: "17%" }}
            src={props.image}
            className="card-img-top rounded-circle"
            alt="..."
          />
          <div className="profile-text">
            <p className="profile-name">{props.name}</p>
            <p className="profile-designation">{props.work}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
