import React, { useState } from "react";
import "../Styles/Search.css";

function Search() {
  return (
    <>
      {/* <div className="box">
        <form action="" className="d-flex">
          <div className="seclect-group d-flex">
            <select>
              <option value="">Select State</option>
              <option value="">Gujrat</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Delhi</option>
            </select>

            <select>
              <option value="">Select City</option>
              <option value="">Gujrat</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Delhi</option>
            </select>
          </div>
          <input type="submit" value="Search" />
        </form>
      </div> */}

      <div className="box">
        <a
          className="btn btn-primary btn-custom"
          href="/rera-approved-projects-villa-duplex-flats"
          role="button"
        >
          Find RERA Projects{"   "}
          <i class="bi bi-arrow-right"></i>
        </a>

        <a
          className="btn btn-primary btn-custom mx-4"
          href="/real-estate-service-providers"
          role="button"
        >
          Find Agents & Service provider{"   "}
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </>
  );
}

export default Search;
