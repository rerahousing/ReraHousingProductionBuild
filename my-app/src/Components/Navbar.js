import React, { useState, useEffect } from "react";
import logo from "../Resources/companylogo-foundermeet.png";
import "../Styles/Navbar.css";

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
            <img src={logo} alt="No Image" />
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
                <a className="nav-link" href="/projects">
                  RERA Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/image">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <form className="d-flex search-button" role="search">
              <a
                className="btn btn-outline-success"
                type="submit"
                href="/dashboard"
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
