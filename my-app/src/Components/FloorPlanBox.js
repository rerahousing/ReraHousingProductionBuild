import React from "react";
import imageItem from "../Resources/floorplan.png";

function FloorPlanBox(props) {
  return (
    <div>
      <div className="item">
        <div className="floorPlan_box">
          <a href="#" target={"blank"}>
            <img src={imageItem} alt="Floor plan" />
          </a>
          <div className="floor_bottom row">
            <div className="col">
              <span>Area: </span>
              <label>365</label>
            </div>
            <div className="col">
              <span>Price: </span>
              <label>{props.price}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlanBox;
