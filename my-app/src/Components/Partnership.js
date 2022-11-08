import React from "react";

import property1 from "../Resources/property (1).png";
import property2 from "../Resources/property (2).png";
import property3 from "../Resources/property (3).png";
import property4 from "../Resources/property (4).png";
import property5 from "../Resources/property (5).png";
import property6 from "../Resources/property (6).png";

function Partnership() {
  return (
    <div className="container text-center">
      <h2 className="title">Partnership with</h2>
      <p className="card-title">
        We have done partnership with some biggest clients
      </p>
      <div className="row align-items-center">
        <div className="col-4 col-sm-2">
          <img src={property1} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm-2">
          <img src={property2} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm-2">
          <img src={property3} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm-2">
          <img src={property4} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm-2">
          <img src={property5} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm-2">
          <img src={property6} className="w-100 partnership_image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
