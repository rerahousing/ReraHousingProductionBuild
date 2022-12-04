import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "react-lazy-load-image-component/src/effects/blur.css";

function FloorPlan_Wrapper(props) {
  const { image, parsedBhkNo } = props;
  const resp = {
    320: {
      items: 2,
    },
    425: {
      items: 2,
    },
    700: {
      items: 3,
    },
    750: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  };

  return (
    <div>
      <div className="tab_content">
        <Box sx={{ padding: 2 }}>
          <div className="tab-pane">
            <OwlCarousel
              className="owl-theme"
              loop={false}
              responsive={resp}
              margin={30}
              dots={true}
              nav
            >
              {parsedBhkNo?.map((item, index) => {
                const imageData = image || [];
                return (
                  <div className="item" key={index}>
                    <div className="floorPlan_box">
                      <img
                        loading="lazy"
                        src={`http://localhost:3000${imageData[index]}`}
                        alt="Floor plan"
                      />

                      <div className="floor_bottom row">
                        <div className="col">
                          <span>Area: </span>
                          <label>{item.Area}</label>
                        </div>
                        <div className="col">
                          <span>BHK: </span>
                          <label>{item.bhk}</label>
                        </div>
                        <div className="col">
                          <span>Price: </span>
                          <label>{item.Price}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default FloorPlan_Wrapper;
