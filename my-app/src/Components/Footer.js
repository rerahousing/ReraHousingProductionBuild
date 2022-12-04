import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="contain">
        <div className="row">
          <div className="col">
            <h1>For Buyers</h1>
            <ul>
              <li>Find RERA House on Sale</li>
              <li>Buyer Resource Center</li>
              <li>Home Loan Calculator</li>
              <li>Blogs for Buyers</li>
            </ul>
          </div>
          <div className="col">
            <h1>For Builders</h1>
            <ul>
              <li>RERA Project Listing</li>
              <li>Builder Resource Center</li>
              <li>Sell out your project fast</li>
              <li>Partnership Sign Up</li>
            </ul>
          </div>
          <div className="col">
            <h1>For Realtors</h1>
            <ul>
              <li>Service Provider Directory</li>
              <li>Service Provider Sign Up</li>
              <li>RERA Agents Directory </li>
              <li>RERA Agents Signup</li>
            </ul>
          </div>
          <div className="col">
            <h1>company</h1>
            <ul>
              <li>About RERA Housing</li>
              <li>Contact Us</li>
              <li>RERA Estate Investor</li>
              <li>Press Kit</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col social">
            <div className="clearfix d-flex">
              <p style={{ marginRight: "117px" }}>@ 2023 RERAhousing.in</p>
              <p style={{ marginRight: "168px" }}>Terms of Services</p>
              <p>Privacy Policy</p>
            </div>
            <ul>
              <li>
                <i class="bi bi-twitter"></i>
              </li>
              <li>
                <i class="bi bi-facebook"></i>
              </li>
              <li>
                <i class="bi bi-instagram"></i>
              </li>
              <li>
                <i class="bi bi-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
