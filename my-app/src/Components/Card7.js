import React from "react";
import "../Styles/Card7.css";
import profileImage from "../Resources/profile.svg";

function Card7() {
  return (
    <>
      <div className="services-card col m-4">
        <div className="card-image text-center">
          <img
            src={profileImage}
            alt=""
            className="card-image-top
          "
          />
        </div>
        <div className="card-details">
          <div className="name my-2-  text-center">Sumit Sharma</div>
          <div className="services my-3">
            <p>
              <span>Services: </span>
              Interior Designer
            </p>
            <div className="location">
              <label>Location: </label>
              <div className="loaction-details">Area, Location, Locality</div>
            </div>
            <p>
              <span>Availability: </span>
              Online / Offline
            </p>
            <p>
              <span>Connect Me: </span>
              <a href="" className="card-link">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="" className="card-link">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a href="" className="card-link">
                <i class="bi bi-instagram"></i>
              </a>
            </p>
            <p>
              <span>Website: </span>
              <a href="" className="card-link">
                <i class="bi bi-link-45deg"></i>Visit Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card7;
