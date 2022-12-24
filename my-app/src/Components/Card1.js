import React from "react";
import "../Styles/Card_1.css";

function Card_1(props) {
  return (
    <div className="card card-1">
      <div className="card-body ">
        <h5 className="card-title text-center">{props.head}</h5>
        <p className="card-text">{props.body}</p>
        <a href={props.link} className="link">
          Learn more <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Card_1;
