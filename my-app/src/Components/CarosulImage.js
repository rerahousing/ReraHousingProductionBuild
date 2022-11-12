import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarosulImage(props) {
  const { image } = props;
  console.log(image);
  return (
    <>
      <Carousel style={{ position: "relative" }} fade={true}>
        {image?.map((item) => {
          return (
            <Carousel.Item interval={2500}>
              <div className="image">
                <img
                  width="1400"
                  height="418"
                  src={`http://localhost:3000${item}`}
                  className="bg-img"
                  alt="..."
                />
                <img
                  width="1400"
                  height="418"
                  src={`http://localhost:3000${item}`}
                  className="bg-blur d-block w-100"
                  alt="..."
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarosulImage;
