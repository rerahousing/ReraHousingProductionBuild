import React, { useState } from "react";
import "../Styles/Search.css";

function Search() {
  const [buy, setBuy] = useState(true);
  const [consultant, setConsultant] = useState(false);

  const toggleActive = () => {
    setBuy(!buy);
    setConsultant(!consultant);
  };
  return (
    <>
      <div className="tabs d-flex">
        <button
          type="button"
          className={`btn btn-primary rounded-0 ${buy == true ? "Active" : ""}`}
          onClick={toggleActive}
        >
          Buy
        </button>
        <button
          type="button"
          className={`btn btn-primary rounded-0 ${
            consultant == true ? "Active" : ""
          }`}
          onClick={toggleActive}
        >
          Consultants
        </button>
      </div>
      <div className="box">
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
      </div>
    </>
  );
}

export default Search;
