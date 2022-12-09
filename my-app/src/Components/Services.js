import React, { useEffect, useContext } from "react";
import Card7 from "./Card7";
import "../Styles/Card7.css";
import { Helmet } from "react-helmet";
import PropertyContext from "../Context/Property/PropertyContext";
import { useState } from "react";
import LoadingComponent from "./LoadingComponent";

function Services(props) {
  const context = useContext(PropertyContext);
  const { getService, services, load } = context;
  const { filter } = props;

  useEffect(() => {
    getService();
  }, []);

  const page = (
    <>
      <Helmet>
        <title>Find the real estate service providers near you</title>
        <meta
          name="description"
          content="Connnect with RERA agents, interior designers, decorator, vastu consultant, and others"
        />
        <meta
          name="keywords"
          content="RERA, agents, interior, designer, decorator, consultant, architect, near, property, lawyer"
        />
      </Helmet>

      <div className="services container my-3">
        <div className="row">
          {services
            ?.filter((item) =>
              filter.availability !== "All"
                ? item.availability === filter.availability
                : filter.availability !== ""
            )
            .filter((item) =>
              filter.services !== "All"
                ? item.services.includes(filter.services)
                : filter.services !== ""
            )
            .filter((item) =>
              filter.state !== "Select State"
                ? item.loc_state === filter.state ||
                  item.availability === "Online"
                : true
            )
            .filter((item) =>
              filter.city !== "Select City"
                ? item.loc_city === filter.city ||
                  item.availability === "Online"
                : true
            )
            .map((item) => {
              return <Card7 data={item} />;
            })}
        </div>
      </div>
    </>
  );

  return load ? <LoadingComponent /> : page;
}

export default Services;
