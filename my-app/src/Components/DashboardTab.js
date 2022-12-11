import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import DashboardServices from "./DashboardServices";
import DashboardContact from "./DashboardContact";
import DashboardAdmin from "./DashboardAdmin";
import { useNavigate } from "react-router-dom";

function DashboardTab() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    const data = localStorage.getItem("activeTab");

    setActiveTab(data);
  }, []);
  const [active, setActiveTab] = useState(0);
  const setActive = (e) => {
    localStorage.setItem("activeTab", e.target.id);
  };
  return (
    <div className="container my-5">
      <div className="tabs-container d-flex">
        <ul className="nav nav-tabs w-100" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                active === "projects-tab" ? "active" : ""
              }`}
              id="projects-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              onClick={(e) => {
                setActive(e);
              }}
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Projects
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${active === "service-tab" ? "active" : ""}`}
              id="service-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              onClick={(e) => {
                setActive(e);
              }}
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Services
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${active === "contact-tab" ? "active" : ""}`}
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              onClick={(e) => {
                setActive(e);
              }}
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Contact Form
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${active === "admins-tab" ? "active" : ""}`}
              id="admins-tab"
              data-bs-toggle="tab"
              data-bs-target="#admins-tab-pane"
              type="button"
              role="tab"
              onClick={(e) => {
                setActive(e);
              }}
              aria-controls="admins-tab-pane"
              aria-selected="false"
            >
              Admins
            </button>
          </li>
        </ul>
        <div className="button-box d-flex w-100 justify-content-end">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            active === "projects-tab" ? "show active" : ""
          } my-5`}
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <Dashboard />
        </div>
        <div
          className={`tab-pane fade ${
            active === "service-tab" ? "show active" : ""
          } my-5`}
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <DashboardServices />
        </div>
        <div
          className={`tab-pane fade ${
            active === "contact-tab" ? "show active" : ""
          } my-5`}
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <DashboardContact />
        </div>
        <div
          className={`tab-pane fade ${
            active === "admins-tab" ? "show active" : ""
          } my-5`}
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <DashboardAdmin />
        </div>
      </div>
    </div>
  );
}

export default DashboardTab;
