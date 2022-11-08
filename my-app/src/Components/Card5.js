import React from "react";
import "../Styles/Card_5.css";

function Card_5(props) {
  return (
    <div className="card-custom">
      <div className="card_image">
        <img src={props.image} alt="No Piture" />
      </div>
      <div className="card_body p-3">
        <div className="text">December 8, 2022</div>
        <h3 className="card-title">Heading for the blog</h3>
        <div className="info">
          <p>
            <i className="bi bi-person-circle"></i> admin / {"  "}
            <i className="bi bi-chat-left-dots"></i> 0 commints
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card_5;
