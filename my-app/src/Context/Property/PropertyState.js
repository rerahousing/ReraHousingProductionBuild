import React from "react";
import { useState } from "react";
import PropertyContext from "./PropertyContext";
import axios from "axios";

const PropertyState = (props) => {
  const host = "https://rera-housing-production-build-2ybt.vercel.app";
  const [load, setLoad] = useState();
  const [loadProperty, setLoadProperty] = useState();
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
    setLoadProperty(true);
    const response = await fetch(`${host}/api/properties/getproperties`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setProperty(json);
    setLoadProperty(false);
  };

  const addProperty = async (formData) => {
    const url = `${host}/api/properties/addproperty`;

    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data.developer_logo);
        setProperty(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete Property -- Property Section
  const deleteProperty = async (id) => {
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

  // Get specific property -- Property Section
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
  // Edit Property -- Property Section
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

  // Patch Property -- Property Section
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

  // Get Services -- Services Section
  const getService = async () => {
    setLoad(true);
    const response = await fetch(`${host}/api/services/getservices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
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
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;
