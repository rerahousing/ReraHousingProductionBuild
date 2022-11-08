import React from "react";
import { useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from "axios";

const PropertyState = (props) => {
  const host = "http://localhost:7000";
  const [property, setProperty] = useState([]);
  const [specProp, setSpecProp] = useState([]);

  const getProperty = async () => {
    // TODO: API call\
    const response = await fetch(`${host}/api/properties/getproperties`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setProperty(json);
  };

  // Add a property
  // const addProperty = async (
  //   rera_no,
  //   title,
  //   developer,
  //   city,
  //   state,
  //   bhk,
  //   bhk_no,
  //   pricingmin,
  //   pricing_max,
  //   website_property,
  //   possession,
  //   configuration,
  //   carpet_area,
  //   tower,
  //   floor,
  //   apartment_per_floor,
  //   why,
  //   other_fet,
  //   amenites,
  //   img
  // ) => {
  //   // TODO: API call
  //   const formData = new FormData();
  //   formData.append("imgCollection[]", img);
  //   const response = await fetch(`${host}/api/properties/addproperty`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       rera_no,
  //       title,
  //       developer,
  //       city,
  //       state,
  //       bhk,
  //       bhk_no,
  //       pricingmin,
  //       pricing_max,
  //       website_property,
  //       possession,
  //       configuration,
  //       carpet_area,
  //       tower,
  //       floor,
  //       apartment_per_floor,
  //       why,
  //       other_fet,
  //       amenites,
  //     }),
  //   });
  //   const newProperty = {
  //     rera_no,
  //     title,
  //     developer,
  //     city,
  //     state,
  //     bhk,
  //     bhk_no,
  //     pricingmin,
  //     pricing_max,
  //     website_property,
  //     possession,
  //     configuration,
  //     carpet_area,
  //     tower,
  //     floor,
  //     apartment_per_floor,
  //     why,
  //     other_fet,
  //     amenites,
  //   };
  //   setProperty(property.concat(newProperty));
  // };
  const addProperty = async (formData, bhk_no) => {
    const url = `${host}/api/properties/addproperty`;
    console.log("formData");

    axios
      .post(url, formData)
      .then((result) => {
        setProperty(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete Property
  const deleteProperty = async (id) => {
    // TODO: API call
    const response = await fetch(
      `${host}/api/properties/deleteproperty/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = response.json();
    console.log(json);

    const newProperty = property.filter((prop) => {
      return prop._id !== id;
    });
    setProperty(newProperty);
  };

  // Get specific property
  const getSpecificProperty = async (id) => {
    console.log("Hello");
    const response = await fetch(`${host}/api/properties/getproperty/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setSpecProp(json);
  };

  // Edit the property
  const editProp = async (
    id,
    title,
    developer,
    rera_no,
    city,
    state,
    bhk,
    bhk_no,
    pricingmin,
    pricing_max,
    website_property,
    possession,
    configuration,
    carpet_area,
    tower,
    floor,
    apartment_per_floor,
    why,
    other_fet,
    amenites
  ) => {
    // TODO: API

    const response = await fetch(
      `${host}/api/properties/updateproperty/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          rera_no,
          title,
          developer,
          city,
          state,
          bhk,
          bhk_no,
          pricingmin,
          pricing_max,
          website_property,
          possession,
          configuration,
          carpet_area,
          tower,
          floor,
          apartment_per_floor,
          why,
          other_fet,
          amenites,
        }),
      }
    );
    const json = response.json();
    // logic to edit in client
    for (let index = 0; index < property.length; index++) {
      const element = property[index];
      if (element._id === id) {
        element.title = title;
        element.developer = developer;
        element.city = city;
        element.state = state;
        element.bhk = bhk;
        element.pricingmin = pricingmin;
        element.pricing_max = pricing_max;
        element.website_property = website_property;
        element.possession = possession;
        element.configuration = configuration;
        element.carpet_area = carpet_area;
        element.tower = tower;
        element.floor = floor;
        element.apartment_per_floor = apartment_per_floor;
        element.why = why;
        element.other_fet = other_fet;
        element.amenites = amenites;
      }
    }
  };
  return (
    <PropertyContext.Provider
      value={{
        property,
        specProp,
        getProperty,
        addProperty,
        deleteProperty,
        getSpecificProperty,
        editProp,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
