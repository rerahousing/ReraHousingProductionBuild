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
              <li>
                <a target="_blank" href="">
                  Find RERA House on Sale
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Buyer Resource Center
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Home Loan Calculator
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Blogs for Buyers
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>For Builders</h1>
            <ul>
              <li>
                <a target="_blank" href="">
                  RERA Project Listing
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Builder Resource Center
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  {" "}
                  Sell out your project fast
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="/partnershipsignup">
                  Partnership Sign Up
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>For Realtors</h1>
            <ul>
              <li>
                <a target="_blank" href="">
                  Service Provider Directory
                </a>
              </li>
              <li>
                <a target="_blank" href="/servicesignup">
                  Service Provider Sign Up
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  RERA Agents Directory{" "}
                </a>
              </li>
              <li>
                <a target="_blank" href="/servicesignup">
                  RERA Agents Signup
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>company</h1>
            <ul>
              <li>
                <a target="_blank" href="">
                  About RERA Housing
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  RERA Estate Investor
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col social">
            <div className="clearfix d-flex">
              <a
                target="_blank"
                style={{ marginRight: "117px", textDecoration: "none" }}
              >
                @ 2023 RERAhousing.in
              </a>
              <a
                target="_blank"
                href="/termsandconditions"
                style={{
                  marginRight: "168px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Terms and Conditions
              </a>
              <a
                target="_blank"
                href="/privacypolicy"
                style={{ textDecoration: "none", color: "black" }}
              >
                Privacy Policy
              </a>
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
