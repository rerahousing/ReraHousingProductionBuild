import React from "react";
import { useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from "axios";

const PropertyState = (props) => {
  const host = "https://www.rerahousing.in";
  const [load, setLoad] = useState(false);
  const [allProperties, setAllProperties] = useState();
  const [loadProperty, setLoadProperty] = useState(false);
  const [count, setCount] = useState(1);
  // States for Property Section
  const [property, setProperty] = useState([]);
  const [bhkNo, setBhkNo] = useState();
  const [specProp, setSpecProp] = useState([]);
  //  ---------------------------End--------------------------------

  // States for Service Section
  const [services, setServices] = useState([]);
  //  ---------------------------End--------------------------------

  // States for Contact Section
  const [contact, setContact] = useState([]);
  //  ---------------------------End--------------------------------

  // Get Property -- Property Section
  const getProperty = async () => {
    console.log(url);
    let url1 = "https://rerahousing.in/api/properties/getproperties";
    const response = await fetch(url1, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const json = await response.json();
    setProperty(json.property);
    setCount(json.count);
  };

  // Get All Properties -- Dashboard Section
  const getAllProperties = async () => {
    let url = `${host}/api/properties/getallproperties`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setAllProperties(json);
  };

  const addProperty = async (formData) => {
    const url = `${host}/api/properties/addproperty`;
    setLoadProperty(true);
    if (formData) {
      axios
        .post(url, formData)
        .then((result) => {
          setProperty(result.data);
          setLoadProperty(false);
          window.location.reload();
          alert("Uploaded Successfully");
        })
        .catch((error) => {
          console.log(error);
          setLoadProperty(false);
          window.location.reload();
          alert(error.message);
        });
    }
  };

  // Delete Property -- Property Section
  const deleteProperty = async (id) => {
    setLoadProperty(true);
    const response = await fetch(
      `${host}/api/properties/deleteproperty/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        const json = res.json();
        const newProperty = property.filter((prop) => {
          return prop._id !== id;
        });
        setProperty(newProperty);
        alert("Delete Successfully !!");
        setLoadProperty(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Get specific property -- Property Section
  const getSpecificProperty = async (id) => {
    setLoadProperty(true);
    let url = `${host}/api/properties/getproperty/${id}`;

    const res = await axios.get(url);
    let bhk_no_data = [];
    if (res.data.bhk_no) {
      res.data.bhk_no.forEach((item) => {
        bhk_no_data.push(JSON.parse(item));
      });
    }
    setBhkNo(bhk_no_data);
    setSpecProp(res.data);
    setLoadProperty(false);
  };
  // Edit Property -- Property Section
  const editProp = (id, formData) => {
    const url = `${host}/api/properties/updateproperty/${id}`;
    setLoadProperty(true);
    axios
      .post(url, formData)
      .then((result) => {
        alert(`Upadated Property successfully \n id: ${id}`);
        setLoadProperty(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(`Some Error Occured ! \n id: ${err.message}`);
        setLoadProperty(false);
        window.location.reload();
      });
  };

  // Patch Property -- Property Section
  const patchProp = (id, formData) => {
    const url = `${host}/api/properties/patchproperty/${id}`;
    setLoadProperty(true);
    axios
      .patch(url, formData)
      .then((result) => {
        alert(`Upadated Property successfully \n id: ${id}`);
        setLoadProperty(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(`Some Error Occured ! \n id: ${err.message}`);
        setLoadProperty(false);
        window.location.reload();
      });
  };

  // Get Services -- Services Section
  const getService = async () => {
    setLoad(true);
    const response = await fetch(`${host}/api/services/getservices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    setServices(json);
    setLoad(false);
  };

  // Add Service -- Service Section
  const addServices = async (formData) => {
    const url = `${host}/api/services/addservice`;

    axios
      .post(url, formData)
      .then((result) => {
        setServices(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete Service -- Service Section
  const deleteService = async (id) => {
    const response = await fetch(`${host}/api/services/deleteservice/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = response.json();
    const newService = services.filter((prop) => {
      return prop._id !== id;
    });
    setServices(newService);
  };

  // Update Service -- Service Section
  const updateService = async (id, formData) => {
    const url = `${host}/api/services/updateservice/${id}`;

    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data.service);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Contact -- Contact Section
  const getContact = async () => {
    const response = await fetch(`${host}/api/contacts/getcontact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setContact(json);
  };

  // Add Contact -- Contact Section
  const addContact = async (formData) => {
    const url = `${host}/api/contacts/addcontact`;

    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data);
        setContact(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete Contact -- Contact Section
  const deleteContact = async (id) => {
    const response = await fetch(`${host}/api/contacts/deletecontact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = response.json();
    const newContact = contact.filter((prop) => {
      return prop._id !== id;
    });
    setContact(newContact);
  };

  // Update Contact -- Contact Section
  const updateContact = async (id, formData) => {
    const url = `${host}/api/contacts/updatecontact/${id}`;

    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PropertyContext.Provider
      value={{
        property,
        services,
        loadProperty,
        contact,
        load,
        getService,
        specProp,
        getProperty,
        addProperty,
        deleteProperty,
        getSpecificProperty,
        editProp,
        patchProp,
        bhkNo,
        addServices,
        deleteService,
        updateService,
        getContact,
        addContact,
        deleteContact,
        updateContact,
        setLoadProperty,
        count,
        getAllProperties,
        allProperties,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
