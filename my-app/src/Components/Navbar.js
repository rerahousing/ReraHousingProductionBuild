import React, { useState, useEffect } from "react";
import logo from "../Resources/rera-approved-housing-projects-logo.png";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          scroll ? "scrolled" : "bg-transparent"
        }`}
      >
        <div className="container-fluid p-0">
          <a className="navbar-brand d-flex justify-content-start" href="#">
            <img
              className="header image"
              src={logo}
              alt="Find RERA Approved Housing Projects in India for best affordable Villas, Duplex, and Flats"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/rera-approved-projects-villa-duplex-flats"
                >
                  RERA Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/real-estate-service-providers">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://blog.rerahousing.in">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active-custom"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-40}
                >
                  <a className="nav-link" href="https://blog.rerahousing.in">
                    More
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex search-button" role="search">
              <a
                className="btn btn-outline-success"
                type="submit"
                href="/login"
              >
                Search Property
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
