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
        <h3 className="card-title">
          Heading for <br /> the blog
        </h3>
        <div className="info">
          <p>
            <i class="bi bi-hand-thumbs-up"></i>
            {"  "}100 Likes {"  "}
          </p>
        </div>
        <a href="" className="link">
          Read <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Card_5;
