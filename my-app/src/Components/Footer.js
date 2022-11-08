import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contain">
        <div className="row">
          <div className="col">
            <h1>For Sellers</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>for buyers</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>for consultants</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>company</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col social">
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
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Footer;
