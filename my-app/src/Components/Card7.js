import React from "react";
import "../Styles/Card7.css";
import profileImage from "../Resources/profile.svg";

function Card7(props) {
  const {
    name,
    services,
    loc_area,
    loc_state,
    loc_city,
    availability,
    facebook_link,
    whatsapp_link,
    instagram_link,
    website_link,
    profile_pic,
  } = props.data;

  return (
    <>
      <div className="services-card col-custom m-4">
        <div className="card-image text-center">
          <img
            src={`${profile_pic.url}`}
            alt=""
            className="card-image-top
          "
          />
        </div>
        <div className="card-details">
          <div className="name my-2  text-center">{name}</div>
          <div className="services my-3">
            <p>
              <span>Services: </span>
              <div className="service_list">
                {services?.map((item) => {
                  return (
                    <>
                      {item},{"  "}
                    </>
                  );
                })}
              </div>
            </p>
            <div className="location">
              <label>Location: </label>
              <div className="location-details">
                {loc_area},
                <br /> {loc_state},
                <br /> {loc_city}
              </div>
            </div>
            <p>
              <span>Availability: </span>
              {availability}
            </p>
            <p>
              <span>Connect Me: </span>
              <a
                href={`${facebook_link ? facebook_link : "#"}`}
                className="card-link"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href={`${whatsapp_link ? whatsapp_link : "#"} `}
                className="card-link"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
              <a
                href={`${instagram_link ? instagram_link : "#"} `}
                className="card-link"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </p>
            <p>
              <span>Website: </span>
              <a
                href={`${website_link ? website_link : "#"} `}
                className="card-link"
              >
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
