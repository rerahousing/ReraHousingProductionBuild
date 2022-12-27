import React from "react";
import "../Styles/SimilarProperties.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card6 from "./Card6";
import { useEffect } from "react";
import { useState, useContext } from "react";
import PropertyContext from "../Context/Property/PropertyContext";

function SimilarProperties(props) {
  const context = useContext(PropertyContext);
  const { allProperties, getAllProperties } = context;

  useEffect(() => {
    getAllProperties();
  }, []);

  const [res, setRes] = useState({
    769: { items: 1 },
  });
  return (
    <div className="similar_property">
      <OwlCarousel
        className="owl-theme"
        loop={false}
        item={2}
        margin={10}
        dots={true}
        autoWidth={true}
        nav
      >
        {allProperties
          ?.filter(
            (item) => item.state === props.data.state && props.id !== item._id
          )
          .map((e, index) => {
            return <Card6 data={e} key={index} />;
          })}
      </OwlCarousel>
    </div>
  );
}

export default SimilarProperties;
