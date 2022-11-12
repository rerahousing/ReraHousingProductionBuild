import React from "react";
import test from "../Resources/profile.svg";
import "../Styles/Card_4.css";
import quote from "../Resources/quote.svg";

function Card4() {
  return (
    <div className="col-md-6">
      <img src={quote} alt="" className="quote" />
      <div className="card rounded-0">
        <div className="card-body">
          <p className="card-text" style={{ color: "white" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="profile d-flex align-items-center">
          <img style={{width: "17%"}} src={test} className="card-img-top rounded-circle" alt="..." />
          <div className="profile-text">
            <p className="profile-name">Lorem ipsum dolor sit amet.</p>
            <p className="profile-designation">Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
