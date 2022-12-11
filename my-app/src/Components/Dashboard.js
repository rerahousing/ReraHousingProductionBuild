import React, { useContext, useEffect, useState, useRef } from "react";
import PropertyContext from "../Context/Property/PropertyContext";
import "../Styles/Card7.css";
import InputForm from "./InputForm";
import CurrencyFormat from "react-currency-format";
import data from "./Data";

function Dashboard() {
  // States
  const ref = useRef(null);
  const [logo, setLogo] = useState();
  const [imageData, setImageData] = useState([]);
  const context = useContext(PropertyContext);
  const [inputImage, setInputImage] = useState([""]);
  const [amenites, setAmenites] = useState([] || "");
  const [why, setWhy] = useState([]);
  const [fetures, setFetures] = useState([]);
  const [bhkDet, setBhkDet] = useState([] || "");
  const [inputProp, setInputProp] = useState({
    id: "",
    etitle: "",
    edeveloper: "",
    erera_no: 0,
    ecity: "",
    estate: "",
    ebhk: [],
    website_property: "",
    possession: "",
    configuration: "",
    carpet_area: "",
    tower: 0,
    floor: 0,
    apartment_per_floor: 0,
    other_fet: [],
    project_status: "",
    hot_deal: false,
    views: "0",
    property_type: "",
  });
  const [selectCity, setSelectedCity] = useState("Select City");
  const [selectState, setSelectedState] = useState("Select State");
  const availableCity = data.state.find((s) => s.name === selectState);
  const [image, setImage] = useState([]);
  const {
    property,
    getProperty,
    addProperty,
    deleteProperty,
    editProp,
    patchProp,
  } = context;

  const [bhk, setBhk] = useState([]);
  const [input, setInput] = useState({
    title: "",
    developer: "",
    rera_no: 0,
    city: "",
    state: "",
    bhk: [],
    website_property: "",
    possession: "",
    configuration: "",
    carpet_area: "",
    tower: 0,
    floor: 0,
    apartment_per_floor: 0,
    project_status: "",
    hot_deal: false,
    views: "0",
    property_type: "",
  });

  const [propertyData, setPropertyData] = useState({
    title: "",
    developer: "",
    rera_no: 0,
    city: "",
    state: "",
    bhk: [],
    website_property: "",
    possession: "",
    configuration: "",
    carpet_area: "",
    tower: 0,
    floor: 0,
    apartment_per_floor: 0,
    other_fet: [],
    project_status: "",
    hot_deal: false,
    views: "0",
    property_type: "",
  });

  const [suffix, setSuffix] = useState(" ft");
  const [price_min, setPrice_min] = useState(0);
  const [price_max, setPrice_max] = useState(0);

  // Functions;
  const checkBoxes = () => {
    const checkbox = document.querySelectorAll("#flexCheckDefault");
    checkbox.forEach((e) => {
      if (amenites.includes(e.value)) {
        e.checked = true;
      }
    });
  };
  useEffect(() => {
    getProperty();
  }, []);

  const formatCurrency = (price) => {
    let data;
    if (price > 999 && price <= 99999) {
      data = price / 1000;
      data = data.toString() + " K";
    } else if (price > 99999 && price <= 9999999) {
      data = price / 100000;
      data = data.toString() + " Lacs";
    } else if (price > 9999999) {
      data = price / 10000000;
      data = data.toString() + " Cr";
    }
    return data;
  };

  const updateProp = (currentProp) => {
    setAmenites(currentProp.amenites);
    setSelectedState(currentProp.state);
    setInputProp({
      id: currentProp._id,
      etitle: currentProp.title,
      edeveloper: currentProp.developer,
      erera_no: currentProp.rera_no,
      ecity: currentProp.city,
      estate: currentProp.state,
      ebhk: currentProp.bhk,
      ewebsite_property: currentProp.website_property,
      econfiguration: currentProp.configuration,
      ecarpet_area: currentProp.carpet_area,
      possession: currentProp.prossession,
      etower: currentProp.tower,
      efloor: currentProp.floor,
      eapartment_per_floor: currentProp.apartment_per_floor,
      ewhy: currentProp.why,
      eother_fet: currentProp.other_fet,
      eamenites: currentProp.amenites,
      epricing_max: currentProp.pricing_max,
      epricing_min: currentProp.pricingmin,
      eproject_status: currentProp.project_status,
      ehot_deal: currentProp.hot_deal,
      views: currentProp.views,
    });
    const data = document.getElementById("einput_hot_deal");
    data.checked = currentProp.hot_deal;
    const selectBox = document.getElementById("eproject_status");
    selectBox.value = currentProp.project_status;
    const selectBox2 = document.getElementById("eproperty_type");
    selectBox2.value = currentProp.property_type;
    setBhk(currentProp.bhk);
    setImage([]);
    setImageData([]);
    setBhkDet([]);
    setWhy(currentProp.why);
    setFetures(currentProp.other_fet);
    setPrice_min(currentProp.pricingmin);
    setPrice_max(currentProp.pricing_max);
  };

  const updatePropDB = () => {
    ref.current.click();
    const formData = new FormData();
    formData.append("rera_no", inputProp.erera_no);
    formData.append("title", inputProp.etitle);
    formData.append("developer", inputProp.edeveloper);
    formData.append("city", inputProp.ecity);
    formData.append("state", inputProp.estate);
    bhk.forEach((item) => formData.append("bhk", item));
    formData.append("pricingmin", price_min);
    formData.append("pricing_max", price_max);
    formData.append("website_property", inputProp.ewebsite_property);
    formData.append("possession", inputProp.possession);
    formData.append("configuration", inputProp.econfiguration);
    formData.append("carpet_area", inputProp.ecarpet_area);
    formData.append("tower", inputProp.etower);
    formData.append("floor", inputProp.efloor);
    formData.append("apartment_per_floor", inputProp.eapartment_per_floor);
    fetures.forEach((item) => formData.append("other_fet", item));
    why.forEach((item) => formData.append("why", item));
    amenites.forEach((item) => formData.append("amenites", item));
    formData.append("project_status", inputProp.eproject_status);
    let data = formatCurrency(price_max);
    formData.append("priceMaxFormated", data);
    data = formatCurrency(price_min);
    formData.append("priceMinFormated", data);
    formData.append("views", inputProp.views);
    data = document.getElementById("einput_hot_deal").checked;
    formData.append("hot_deal", data);
    formData.append("property_type", inputProp.property_type);
    editProp(inputProp.id, formData);

    window.location.reload();
  };
  const setDataImage = (image) => {
    const data = [];
    image.forEach((item) => {
      data.push(URL.createObjectURL(item));
    });
    setInputImage(data);
    setImageData(image);
  };
  const addAminity = (e) => {
    if (e.target.checked) {
      setAmenites((oldArray) => [...oldArray, e.target.value]);
    } else {
      removeAmenites(e);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("rera_no", propertyData.rera_no);
    formData.append("title", propertyData.title);
    formData.append("developer", propertyData.developer);
    formData.append("city", propertyData.city);
    formData.append("state", propertyData.state);
    bhk.forEach((item) => formData.append("bhk", item));
    formData.append("pricingmin", price_min);
    formData.append("pricing_max", price_max);
    formData.append("website_property", propertyData.website_property);
    formData.append("possession", propertyData.possession);
    formData.append("configuration", propertyData.configuration);
    formData.append("carpet_area", propertyData.carpet_area);
    formData.append("tower", propertyData.tower);
    formData.append("floor", propertyData.floor);
    imageData.forEach((item) => formData.append("image", item));
    formData.append("apartment_per_floor", propertyData.apartment_per_floor);
    formData.append("project_status", propertyData.project_status);
    image.forEach((item) => formData.append("imgCollection", item));
    bhkDet.forEach((item) => formData.append("bhk_no", JSON.stringify(item)));
    fetures.forEach((item) => formData.append("other_fet", item));
    why.forEach((item) => formData.append("why", item));
    amenites.forEach((item) => formData.append("amenites", item));
    let data = formatCurrency(price_max);
    formData.append("priceMaxFormated", data);
    data = formatCurrency(price_min);
    formData.append("priceMinFormated", data);
    formData.append("views", propertyData.views);
    data = document.getElementById("input_hot_deal").checked;
    formData.append("hot_deal", data);
    logo?.forEach((item) => formData.append("developer_logo", item));
    formData.append("property_type", propertyData.property_type);
    addProperty(formData, bhkDet);
    window.location.reload();
  };

  const onChangeArray = (e) => {
    setInput(e.target.value);
  };

  const onChangeArrayEdit = (e) => {
    setInput(e.target.value);
  };

  const addField = (e) => {
    e.preventDefault();
    const copyBhk = [...bhk];
    copyBhk.push(input);
    setBhk(copyBhk);
    document.getElementById("input_bhk").value = "";
    setInput("");
  };

  const removeField = (e) => {
    e.preventDefault();
    const copyBhk = [bhk];
    copyBhk.pop();
    setBhk(copyBhk);
    setInput("");
  };

  const removeAmenites = (e) => {
    setAmenites([...amenites.filter((amenity) => amenity !== e.target.value)]);
  };

  const onChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setInputProp({ ...inputProp, [e.target.name]: e.target.value });
  };

  const patchproperty = () => {
    const formData = new FormData();
    imageData.forEach((item) => formData.append("image", item));
    image.forEach((item) => formData.append("imgCollection", item));
    bhkDet.forEach((item) => formData.append("bhk_no", JSON.stringify(item)));
    logo.forEach((item) => formData.append("developer_logo", item));
    patchProp(inputProp.id, formData);
    window.location.reload();
  };

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add a Property
      </button>

      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">RERA No.</th>
            <th scope="col">Title</th>
            <th scope="col">Developer</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">BHK</th>
            <th scope="col">BHK Details</th>
            <th scope="col" style={{ width: "100px" }}>
              Pricing
            </th>
            <th scope="col">Project Website</th>
            <th scope="col">Possesion in</th>
            <th scope="col">Configuration</th>
            <th scope="col">Carpet Area</th>
            <th scope="col">Tower</th>
            <th scope="col">Floors</th>
            <th scope="col">Apartments per floor</th>
            <th scope="col">Project Status</th>
            <th scope="col">Project Type</th>
            <th scope="col">Views</th>
            <th scope="col">Developer Logo</th>
            <th scope="col">Hot Deal</th>
            <th scope="col">Why this property</th>
            <th scope="col">Other Features</th>
            <th scope="col">Property Images</th>
            <th scope="col">Amenities</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {property?.map((e) => {
            return (
              <tr>
                <th scope="row">{e._id}</th>
                <td>{e.rera_no}</td>
                <td>{e.title}</td>
                <td>{e.developer}</td>
                <td>{e.state}</td>
                <td>{e.city}</td>
                <td>
                  {e.bhk.map((item) => {
                    return `${item},`;
                  })}
                </td>

                <td className="overflow">
                  {e.bhk_no.map((item, index) => {
                    const data = JSON.parse(item);
                    const image = e.image;
                    return (
                      <>
                        <span>
                          <strong>BHK: </strong> {data.bhk}
                        </span>
                        <br />
                        <span>
                          <strong>Price: </strong> {data.Price}
                        </span>
                        <br />
                        <span>
                          <strong>Area: </strong> {data.Area}
                        </span>
                        <br />
                        <span>
                          <strong>image: </strong>
                          {image[index]}
                        </span>
                        <hr />
                      </>
                    );
                  })}
                </td>
                <td className="pricing w-75" style={{ width: "100px" }}>
                  <p>
                    <strong>Max: </strong>
                    {e.pricing_max}
                  </p>
                  <p>
                    <strong>Min: </strong>
                    {e.pricingmin}
                  </p>
                </td>
                <td>{e.website_property}</td>
                <td>{e.possession}</td>
                <td>{e.configuration}</td>
                <td>{e.carpet_area}</td>
                <td>{e.tower}</td>
                <td>{e.floor}</td>
                <td>{e.apartment_per_floor}</td>
                <td>{e.project_status}</td>
                <td>{e.property_type}</td>
                <td>{e.views}</td>
                <td>
                  <td className="image_col">
                    {" "}
                    <img
                      src={`https://rera-housing-production-build-2ybt.vercel.app${e.developer_logo}`}
                      alt="No Developer Logo"
                    />
                  </td>
                </td>
                <td>{e.hot_deal ? "✅" : "❌"}</td>
                <td>
                  <ul>
                    {e.why.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </td>
                <td>
                  <ul>
                    {e.other_fet.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </td>
                <td className="overflow">
                  <ul>
                    {e.imgCollection.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </td>
                <td>
                  <ul>
                    {e.amenites.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </td>
                <td className="d-flex flex-column">
                  <button
                    type="button "
                    className="btn btn-danger my-1"
                    onClick={() => {
                      deleteProperty(e._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    type="button "
                    className="btn btn-warning my-1"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal1"
                    onClick={() => {
                      updateProp(e);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-success my-1"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                    onClick={() => {
                      updateProp(e);
                    }}
                  >
                    Overwrite
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add a Property
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    RERA ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="rera_no"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword2" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword2"
                    name="title"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword3" className="form-label">
                    Developer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword3"
                    name="developer"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    City
                  </label>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="city"
                    value={selectCity}
                    onChange={(e) => {
                      onChange(e);
                      setSelectedCity(e.target.value);
                    }}
                  >
                    <option selected value="Select City">
                      Select City
                    </option>
                    {availableCity?.city.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    State
                  </label>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="state"
                    id="stateSelect"
                    onChange={(e) => {
                      onChange(e);
                      setSelectedState(e.target.value);
                    }}
                  >
                    <option selected value="Select State">
                      Select State
                    </option>
                    {data.state.map((item, index) => {
                      return (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="project_stataus" className="form-label">
                    Project Status
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="project_stataus"
                    name="project_status"
                    onChange={onChange}
                  >
                    <option selected>Property Status</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Ready to Move">Ready to Move</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label for="property_type" className="form-label">
                    Property Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="property_type"
                    name="property_type"
                    onChange={onChange}
                  >
                    <option selected>Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Row House / Villa">Row House / Villa</option>
                    <option value="Independent Floor">Independent Floor</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label for="input_views" className="form-label">
                    Views
                  </label>
                  <input
                    type="number"
                    id="input_views"
                    className="form-control"
                    name="views"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="hot_deal"
                    id="input_hot_deal"
                    onChange={onChange}
                  />
                  <label className="form-check-label" for="input_hot_deal">
                    Hot Deal Tag
                  </label>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Total BHK
                  </label>

                  <div className="input-box">
                    <input
                      type="number"
                      id="input_bhk"
                      className="form-control"
                      name="bhk"
                      onChange={onChangeArray}
                      required
                    />
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary mx-2"
                      onClick={addField}
                    >
                      +
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary"
                      onClick={removeField}
                    >
                      -
                    </button>
                  </div>

                  <h6 style={{ display: "inline" }}>BHK Added : </h6>
                  {bhk.map((e, i) => {
                    return <p style={{ display: "inline" }}>{e},</p>;
                  })}
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    BHK details:
                  </label>
                  <InputForm
                    setBhkDet={setBhkDet}
                    setDataImage={setDataImage}
                  />
                  <h6>BHK Details Added: </h6>
                  {bhkDet?.map((i, index) => {
                    const image = inputImage;
                    return (
                      <>
                        <div className="row">
                          <div className="col">
                            <p>
                              <strong>BHK: </strong>
                              {i.bhk}
                            </p>
                          </div>

                          {"  "}
                          <div className="col">
                            <p>
                              <strong>Price: </strong>
                              {i.Price}
                            </p>
                            {"  "}
                          </div>
                          <div className="col">
                            <p>
                              <strong>Area: </strong>
                              {i.Area}
                            </p>
                            {"  "}
                          </div>
                          <div className="col">
                            <p>
                              <strong>Image: {index}</strong>
                              <img
                                src={image[index] ? `${image[index]}` : ""}
                                alt=""
                              />
                            </p>
                            {"  "}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Pricing
                  </label>
                  <div className="d-flex my-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Min"
                      onChange={(e) => {
                        setPrice_min(e.target.value);
                      }}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max"
                      onChange={(e) => {
                        setPrice_max(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="basic-url" className="form-label">
                    Website URL
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                      https://example.com/users/
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="website_property"
                      aria-describedby="basic-addon3"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-3 ">
                  <label for="exampleInputPassword1" className="form-label">
                    Carpet Area:
                  </label>
                  <div className="d-flex">
                    <CurrencyFormat
                      thousandSeparator={false}
                      suffix={suffix}
                      className="form-control"
                      placeholder="Ex: 123 ft"
                      name="carpet_area"
                      onValueChange={(values) => {
                        const { formattedValue, value } = values;
                        setPropertyData({
                          ...propertyData,
                          carpet_area: formattedValue,
                        });
                      }}
                    />
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {suffix}
                      </button>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              setSuffix(" ft");
                            }}
                          >
                            ft
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              setSuffix(" sq.ft.");
                            }}
                          >
                            sq. ft.
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              setSuffix(" m");
                            }}
                          >
                            m
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword4" className="form-label">
                    Configuration:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword4"
                    name="configuration"
                    placeholder="Ex: 123 ft"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword5" className="form-label">
                    Possession in:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword5"
                    value={inputProp.possession}
                    name="possession"
                    placeholder="Ex: 2022-12-31"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword6" className="form-label">
                    Tower:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword6"
                    name="tower"
                    placeholder="Ex: 2"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword7" className="form-label">
                    Floor:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword7"
                    name="floor"
                    placeholder="Ex: 3"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword8" className="form-label">
                    Apartments per floor:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword8"
                    name="apartment_per_floor"
                    placeholder="Ex: 5"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Why this property:
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      id="input_why_edit"
                      name="why"
                      placeholder="Ex: 5"
                      onChange={handleChange}
                    />

                    <button
                      style={{ display: "inline" }}
                      type="button"
                      className="btn btn-primary mx-2"
                      onClick={(e) => {
                        e.preventDefault();
                        const input = document.getElementById("input_why_edit");
                        const copyData = [...why];
                        copyData.push(input.value);
                        setWhy(copyData);
                        input.value = "";
                      }}
                    >
                      +
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        const copyData = [...why];
                        copyData.pop(input.value);
                        setWhy(copyData);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <h6>Added Points</h6>
                  <ul>
                    {why?.map((e) => {
                      return <li>{e}</li>;
                    })}
                  </ul>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Other Features:
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      id="input_fet_edit"
                      name="other_fet"
                      placeholder="Ex: 5"
                      onChange={handleChange}
                    />

                    <button
                      style={{ display: "inline" }}
                      type="button"
                      className="btn btn-primary mx-2"
                      onClick={(e) => {
                        e.preventDefault();
                        const input = document.getElementById("input_fet_edit");
                        const copyData = [...fetures];
                        copyData.push(input.value);
                        setFetures(copyData);
                        input.value = "";
                      }}
                    >
                      +
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        const copyData = [...fetures];
                        copyData.pop(input.value);
                        setFetures(copyData);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <h6>Added Points</h6>
                  <ul>
                    {propertyData.other_fet?.map((e) => {
                      return <li>{e}</li>;
                    })}
                  </ul>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Amenites:
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Hospital"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Hospital
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Park"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Park
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="School"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          School
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Club House"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Club House
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Play Area"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Play Area
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Collage"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Collage
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Metro Station"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Metro Station
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Police Station"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Police Station
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Mall"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Mall
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Shopping Mall"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Shopping Mall
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Cinema"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Cinema Hall
                        </label>
                      </div>
                    </div>
                  </div>

                  <h6>Added Points</h6>
                  <ul>
                    {amenites?.map((e) => {
                      return (
                        <>
                          <li>{e}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>

                <div className="form-group">
                  <div className="input-group mb-3">
                    <label for="add_image_collection" className="form-label">
                      Add Property Images
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="add_image_collection"
                      onChange={(e) => {
                        setImage([...e.target.files]);
                      }}
                      multiple
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="add_developer_logo" className="form-label">
                    Add Developer Logo
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="add_developer_logo"
                      onChange={(e) => {
                        setLogo([...e.target.files]);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="editProp">
        <div
          className="modal fade"
          id="myModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Property
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" onMouseEnter={checkBoxes}>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputPassword9" className="form-label">
                      RERA ID
                    </label>
                    <input
                      value={inputProp.erera_no}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword9"
                      name="erera_no"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword10" className="form-label">
                      Title
                    </label>
                    <input
                      value={inputProp.etitle}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword10"
                      name="etitle"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword11" className="form-label">
                      Developer
                    </label>
                    <input
                      value={inputProp.edeveloper}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword11"
                      name="edeveloper"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      City
                    </label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="ecity"
                      value={inputProp.ecity}
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedCity(e.target.value);
                      }}
                    >
                      <option selected value="Select City">
                        Select City
                      </option>
                      {availableCity?.city.map((item, index) => {
                        return (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      State
                    </label>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="estate"
                      value={inputProp.estate}
                      id="stateSelectEdit"
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedState(e.target.value);
                      }}
                      defaultValue="All"
                    >
                      <option selected value="Select State">
                        Select State
                      </option>
                      {data.state.map((item, index) => {
                        return (
                          <option value={item.name} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="eproject_status" className="form-label">
                      Project Status
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="eproject_status"
                      name="eproject_status"
                      onChange={handleChange}
                    >
                      <option selected value="Not Specified">
                        Project Status
                      </option>
                      <option value="Under Construction">
                        Under Construction
                      </option>
                      <option value="Ready to Move">Ready to Move</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label for="property_type" className="form-label">
                      Property Type
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id="eproperty_type"
                      name="property_type"
                      onChange={handleChange}
                    >
                      <option selected>Property Type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Row House / Villa">
                        Row House / Villa
                      </option>
                      <option value="Independent Floor">
                        Independent Floor
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label for="einput_views" className="form-label">
                      Views
                    </label>
                    <input
                      type="number"
                      id="einput_views"
                      className="form-control"
                      name="views"
                      value={inputProp.views}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="ehot_deal"
                      id="einput_hot_deal"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" for="einput_hot_deal">
                      Hot Deal Tag
                    </label>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Total BHK
                    </label>
                  </div>

                  <div className="input-box-edit">
                    <input
                      type="number"
                      id="input_bhk1"
                      className="form-control my-2"
                      name="bhk"
                      onChange={onChangeArrayEdit}
                    />
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary mx-2"
                      onClick={addField}
                    >
                      +
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary"
                      onClick={removeField}
                    >
                      -
                    </button>
                    <h6 style={{ display: "inline" }}>BHK Added : </h6>
                    {bhk.map((e, i) => {
                      return <p style={{ display: "inline" }}>{e},</p>;
                    })}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Pricing
                    </label>
                    <div className="d-flex my-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Min"
                        value={price_min}
                        onChange={(e) => {
                          setPrice_min(e.target.value);
                        }}
                      />
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Max"
                        value={price_max}
                        onChange={(e) => {
                          setPrice_max(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="basic-url" className="form-label">
                      Website URL
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon3">
                        https://example.com/users/
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="ewebsite_property"
                        value={inputProp.ewebsite_property}
                        aria-describedby="basic-addon3"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3 ">
                    <label for="exampleInputPassword1" className="form-label">
                      Carpet Area:
                    </label>
                    <div className="d-flex">
                      <CurrencyFormat
                        thousandSeparator={false}
                        suffix={suffix}
                        className="form-control"
                        value={inputProp.ecarpet_area}
                        placeholder="Ex: 123 ft"
                        name="ecarpet_area"
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          setInputProp({
                            ...inputProp,
                            ecarpet_area: formattedValue,
                          });
                        }}
                      />
                      <div className="dropdown">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {suffix}
                        </button>

                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => {
                                setSuffix(" ft");
                              }}
                            >
                              ft
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => {
                                setSuffix(" sq.ft.");
                              }}
                            >
                              sq. ft.
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => {
                                setSuffix(" m");
                              }}
                            >
                              m
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword12" className="form-label">
                      Configuration:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={inputProp.econfiguration}
                      id="exampleInputPassword12"
                      name="econfiguration"
                      placeholder="Ex: 123 ft"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword13" className="form-label">
                      Possession in:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={inputProp.epossession}
                      id="exampleInputPassword13"
                      name="possession"
                      placeholder="Ex: 2022-12-31"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword14" className="form-label">
                      Tower:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={inputProp.etower}
                      id="exampleInputPassword14"
                      name="etower"
                      placeholder="Ex: 2"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword15" className="form-label">
                      Floor:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword15"
                      value={inputProp.efloor}
                      name="efloor"
                      placeholder="Ex: 3"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword16" className="form-label">
                      Apartments per floor:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword16"
                      value={inputProp.eapartment_per_floor}
                      name="eapartment_per_floor"
                      placeholder="Ex: 5"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Why this property:
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        id="input_why"
                        name="why"
                        placeholder="Ex: 5"
                        onChange={handleChange}
                      />

                      <button
                        style={{ display: "inline" }}
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={(e) => {
                          e.preventDefault();
                          const input = document.getElementById("input_why");
                          const copyData = [...why];
                          copyData.push(input.value);
                          setWhy(copyData);
                          input.value = "";
                        }}
                      >
                        +
                      </button>
                      <button
                        style={{ display: "inline" }}
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          const copyData = [...why];
                          copyData.pop(input.value);
                          setWhy(copyData);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <h6>Added Points</h6>
                    <ul>
                      {why?.map((e) => {
                        return <li>{e}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Other Features:
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        id="input_fet"
                        name="other_fet"
                        placeholder="Ex: 5"
                        onChange={handleChange}
                      />

                      <button
                        style={{ display: "inline" }}
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={(e) => {
                          e.preventDefault();
                          const input = document.getElementById("input_fet");
                          const copyData = [...fetures];
                          copyData.push(input.value);
                          setFetures(copyData);
                          input.value = "";
                        }}
                      >
                        +
                      </button>
                      <button
                        style={{ display: "inline" }}
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          const copyData = [...fetures];
                          copyData.pop(input.value);
                          setFetures(copyData);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <h6>Added Points</h6>
                    <ul>
                      {fetures?.map((e) => {
                        return <li>{e}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Amenites:
                    </label>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Hospital"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Hospital
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Park"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Park
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="School"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            School
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Club House"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Club House
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Play Area"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Play Area
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Collage"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Collage
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Metro Station"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Metro Station
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Police Station"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Police Station
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Mall"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Mall
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Shopping Mall"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Shopping Mall
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Cinema"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Cinema Hall
                          </label>
                        </div>
                      </div>
                    </div>

                    <h6>Added Points</h6>
                    <ul>
                      {amenites?.map((e) => {
                        return (
                          <>
                            <li>{e}</li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={ref}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updatePropDB}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overwrite">
        <div
          className="modal fade"
          id="myModal2"
          tabindex="-1"
          aria-labelledby="myModal2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="myModal2">
                  Overwrite Image files
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex my-2">
                  <form>
                    <h4>BHK Details: </h4>
                    <div className="form-group">
                      <InputForm
                        setBhkDet={setBhkDet}
                        setDataImage={setDataImage}
                      />
                      <h5>Added Bhk: </h5>
                      {bhkDet?.map((i, index) => {
                        const image = inputImage;
                        return (
                          <>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <strong>BHK: </strong>
                                  {i.bhk}
                                </p>
                              </div>

                              {"  "}
                              <div className="col">
                                <p>
                                  <strong>Price: </strong>
                                  {i.Price}
                                </p>
                                {"  "}
                              </div>
                              <div className="col">
                                <p>
                                  <strong>Area: </strong>
                                  {i.Area}
                                </p>
                                {"  "}
                              </div>
                              <div className="col">
                                <p>
                                  <strong>Image: {index}</strong>
                                  <img
                                    src={image[index] ? `${image[index]}` : ""}
                                    alt=""
                                    style={{ width: "100%" }}
                                  />
                                </p>
                                {"  "}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <h4>Upload Property Image</h4>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile03"
                        multiple
                        onChange={(e) => {
                          setImage([...e.target.files]);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="add_developer_logo_edit"
                        className="form-label"
                      >
                        Add Developer Logo
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="add_developer_logo_edit"
                          onChange={(e) => {
                            setLogo([e.target.files[0]]);
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={patchproperty}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
