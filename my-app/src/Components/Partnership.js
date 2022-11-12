import React from "react";

import property1 from "../Resources/onebkc.jpg";
import property2 from "../Resources/tatahousing.png";
import property3 from "../Resources/sheth.png";
import property4 from "../Resources/goodrej.png";
import property5 from "../Resources/l&t.png";

function Partnership() {
  return (
    <div className="container text-center">
      <h2 className="title">Partnership with</h2>
      <p className="card-title">
        We have done partnership with some biggest clients
      </p>
      <div className="row align-items-center">
        <div className="col col-sm-2">
          <img src={property1} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm">
          <img src={property2} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm">
          <img src={property3} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm">
          <img src={property4} className="w-100 partnership_image" alt="" />
        </div>
        <div className="col-4 col-sm">
          <img src={property5} className="w-100 partnership_image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
