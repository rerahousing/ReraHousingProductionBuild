import React from "react";
import "../Styles/Card_1.css";

function Card_1(props) {
  return (
    <div className="card card-1">
      <div className="card-image my-4 text-center">
        <img src={props.image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body ">
        <h5 className="card-title text-center">{props.head}</h5>
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  );
}

export default Card_1;
