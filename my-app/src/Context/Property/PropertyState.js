import React from "react";
import { useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from "axios";

const PropertyState = (props) => {
  const host = "http://localhost:7000";
  const [property, setProperty] = useState([]);
  const [bhkNo, setBhkNo] = useState();
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

  const addProperty = async (formData, bhk_no) => {
    const url = `${host}/api/properties/addproperty`;

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
    const newProperty = property.filter((prop) => {
      return prop._id !== id;
    });
    setProperty(newProperty);
  };

  // Get specific property
  const getSpecificProperty = async (id) => {
    const response = await fetch(`${host}/api/properties/getproperty/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    const bhk_no_data = [];
    json.bhk_no.forEach((item) => {
      bhk_no_data.push(JSON.parse(item));
    });

    setBhkNo(bhk_no_data);
    setSpecProp(json);
  };

  const editProp = (id, formData) => {
    const url = `${host}/api/properties/updateproperty/${id}`;

    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data.property);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const patchProp = (id, formData) => {
    const url = `${host}/api/properties/patchproperty/${id}`;
    axios
      .patch(url, formData)
      .then((result) => {
        console.log(result.data.property);
      })
      .catch((err) => {
        console.log(err);
      });
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
        patchProp,
        bhkNo,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
