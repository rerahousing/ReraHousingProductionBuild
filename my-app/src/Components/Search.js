import React, { useState } from "react";
import "../Styles/Search.css";

function Search() {
  return (
    <>
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
          className="btn btn-primary btn-custom mx-md-3"
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
