import React, { useContext, useEffect, useState, useRef } from "react";
import PropertyContext from "../Context/Property/PropertyContext";
import "../Styles/Card7.css";
import InputForm from "./InputForm";
import CurrencyFormat from "react-currency-format";
// import ImageUpload from "./ImageUpload";
// import { serialize } from "object-to-formdata";

function Dashboard() {
  // States
  const ref = useRef(null);

  const [imageData, setImageData] = useState([]);
  const [data, setData] = useState([]);

  const context = useContext(PropertyContext);
  const [imageSingle, setImageSingle] = useState();
  const [amenites, setAmenites] = useState([] || "");
  const [why, setWhy] = useState([]);
  const [fetures, setFetures] = useState([]);
  const [bhkDet, setBhkDet] = useState([
    {
      bhk: "",
      Price: "",
      Area: "",
    },
  ]);
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
  });
  const [image, setImage] = useState([]);
  const { property, getProperty, addProperty, deleteProperty, editProp } =
    context;

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
  });

  const [inputDet, setInputDet] = useState([]);
  const [suffix, setSuffix] = useState(" ft");
  const [price_min, setPrice_min] = useState();
  const [price_max, setPrice_max] = useState();

  // Functions
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

  const updateProp = (currentProp) => {
    setAmenites(currentProp.amenites);
    setInputProp({
      id: currentProp._id,
      etitle: currentProp.title,
      edeveloper: currentProp.developer,
      erera_no: currentProp.rera_no,
      ecity: currentProp.city,
      estate: currentProp.state,
      ebhk: currentProp.bhk,
      ewebsite_property: currentProp.website_property,
      epossession: currentProp.possession,
      econfiguration: currentProp.configuration,
      ecarpet_area: currentProp.carpet_area,
      etower: currentProp.tower,
      efloor: currentProp.floor,
      eapartment_per_floor: currentProp.apartment_per_floor,
      ewhy: currentProp.why,
      eother_fet: currentProp.other_fet,
      eamenites: currentProp.amenites,
    });
    setBhk(currentProp.bhk);
    setBhkDet(currentProp.bhk_no);
    setWhy(currentProp.why);
    setFetures(currentProp.other_fet);
    setPrice_min(currentProp.pricingmin);
    setPrice_max(currentProp.pricing_max);
  };
  // console.log(parsedBhkDet);
  const handleFormChange = (e) => {
    setInputDet({ ...inputDet, [e.target.name]: e.target.value });
  };

  const updatePropDB = () => {
    ref.current.click();
    editProp(
      inputProp.id,
      inputProp.etitle,
      inputProp.edeveloper,
      inputProp.erera_no,
      inputProp.ecity,
      inputProp.estate,
      bhk,
      bhkDet,
      price_min,
      price_max,
      inputProp.ewebsite_property,
      inputProp.epossession,
      inputProp.econfiguration,
      inputProp.ecarpet_area,
      inputProp.etower,
      inputProp.efloor,
      inputProp.eapartment_per_floor,
      why,
      fetures,
      amenites
    );
    window.location.reload();
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = [...bhkDet];
    newfield.push(inputDet);
    setBhkDet(newfield);
  };
  const removeFields = (e) => {
    e.preventDefault();
    let newfield = [...bhkDet];
    newfield.pop();
    setBhkDet(newfield);
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
    formData.append("apartment_per_floor", propertyData.apartment_per_floor);
    formData.append("imgCollection", image);
    bhkDet.forEach((item) => formData.append("bhk_no", JSON.stringify(item)));
    fetures.forEach((item) => formData.append("other_fet", item));
    why.forEach((item) => formData.append("why", item));
    amenites.forEach((item) => formData.append("amenites", item));
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
    const copyBhk = [...bhk];
    copyBhk.pop();
    setBhk(copyBhk);
    setInput("");
  };

  const removeAmenites = (e) => {
    setAmenites([...amenites.filter((amenity) => amenity !== e.target.value)]);
  };

  const onChange = (e) => {
    console.log(propertyData);
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setInputProp({ ...inputProp, [e.target.name]: e.target.value });
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
            <th scope="col">Why this property</th>
            <th scope="col">Other Features</th>
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
                  {e.bhk_no.map((item) => {
                    const data = JSON.parse(item);
                    console.log(data);
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
                    {e.amenites.map((i) => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteProperty(e._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal1"
                    onClick={() => {
                      updateProp(e);
                    }}
                  >
                    Edit
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
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="rera_no"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="title"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Developer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="developer"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="city"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="state"
                    onChange={onChange}
                  />
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
                    addProperty={addProperty}
                    setBhkDet={setBhkDet}
                    bhkDet={bhkDet}
                    setImageData={setImageData}
                  />
                  <h6>BHK Details Added: </h6>
                  {bhkDet?.map((i) => {
                    return (
                      <>
                        <div className="d-flex">
                          <p>
                            <strong>BHK: </strong>
                            {i.bhk}
                          </p>
                          {"  "}
                          <p>
                            <strong>Price: </strong>
                            {i.Price}
                          </p>
                          {"  "}
                          <p>
                            <strong>Area: </strong>
                            {i.Area}
                          </p>
                          {"  "}
                          <p>
                            <strong>Image: </strong>
                            {i.image}
                          </p>
                          {"  "}
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
                    <CurrencyFormat
                      thousandSeparator={false}
                      thousandSpacing={"2s"}
                      className="form-control"
                      placeholder="Min"
                      onValueChange={(values) => {
                        const { formattedValue, value } = values;
                        setPrice_min(value);
                      }}
                    />
                    <CurrencyFormat
                      thousandSeparator={false}
                      thousandSpacing={"2s"}
                      className="form-control"
                      placeholder="Max"
                      onValueChange={(values) => {
                        const { formattedValue, value } = values;
                        setPrice_max(value);
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="website_property"
                    placeholder="Ex: https://www.example.com"
                    onChange={onChange}
                  />
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
                  <label for="exampleInputPassword1" className="form-label">
                    Configuration:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="configuration"
                    placeholder="Ex: 123 ft"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Possession in:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="possession"
                    placeholder="Ex: 2022-12-31"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Tower:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="tower"
                    placeholder="Ex: 2"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Floor:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="floor"
                    placeholder="Ex: 3"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Apartments per floor:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
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
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Hospital"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Hospital
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Park"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Park
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="School"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          School
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Club House"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Club House
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Play Area"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Play Area
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Collage"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Collage
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Metro Station"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Metro Station
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Police Station"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Police Station
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Mall"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Mall
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Shopping Mall"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Shopping Mall
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Cinema"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            addAminity(e);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
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

                {/* <ImageUpload formData={formData} /> */}
                <div className="form-group">
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      console.log(e.target.files);
                      setImage(e.target.files);
                    }}
                  />
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
                    <label for="exampleInputPassword1" className="form-label">
                      RERA ID
                    </label>
                    <input
                      value={inputProp.erera_no}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="erera_no"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Title
                    </label>
                    <input
                      value={inputProp.etitle}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="etitle"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Developer
                    </label>
                    <input
                      value={inputProp.edeveloper}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="edeveloper"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      city
                    </label>
                    <input
                      value={inputProp.ecity}
                      type="text"
                      className="form-control"
                      name="ecity"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      State
                    </label>
                    <input
                      value={inputProp.estate}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="estate"
                      onChange={handleChange}
                    />
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

                    <div className="d-flex my-2">
                      <input
                        name="bhk"
                        placeholder="bhk"
                        className="form-control"
                        onChange={handleFormChange}
                      />
                      <input
                        name="Price"
                        placeholder="Price"
                        className="form-control"
                        onChange={handleFormChange}
                      />
                      <input
                        name="Area"
                        className="form-control"
                        placeholder="Area"
                        onChange={handleFormChange}
                      />
                    </div>

                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary mx-2"
                      onClick={addFields}
                    >
                      +
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary"
                      onClick={removeFields}
                    >
                      -
                    </button>
                    <button
                      style={{ display: "inline" }}
                      type="submit"
                      className="btn btn-primary mx-2"
                    >
                      Add Details into DB
                    </button>
                    {bhkDet?.map((i) => {
                      return (
                        <>
                          <div className="d-flex">
                            <p>
                              <strong>BHK: </strong>
                              {i.bhk}
                            </p>
                            {"  "}
                            <p>
                              <strong>Price: </strong>
                              {i.Price}
                            </p>
                            {"  "}
                            <p>
                              <strong>Area: </strong>
                              {i.Area}
                            </p>
                            {"  "}
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      BHK details:
                    </label>
                    <InputForm
                      addProperty={addProperty}
                      setBhkDet={setBhkDet}
                      bhkDet={bhkDet}
                    />
                    <h6>BHK Details Added: </h6>
                    {bhkDet?.map((i) => {
                      return (
                        <>
                          <div className="d-flex">
                            <p>
                              <strong>BHK: </strong>
                              {i.bhk}
                            </p>
                            {"  "}
                            <p>
                              <strong>Price: </strong>
                              {i.Price}
                            </p>
                            {"  "}
                            <p>
                              <strong>Area: </strong>
                              {i.Area}
                            </p>
                            {"  "}
                          </div>
                        </>
                      );
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
                      <CurrencyFormat
                        thousandSeparator={false}
                        thousandSpacing={"2s"}
                        className="form-control"
                        placeholder="Min"
                        value={price_min}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          setPrice_min(value);
                        }}
                      />
                      <CurrencyFormat
                        thousandSeparator={false}
                        thousandSpacing={"2s"}
                        className="form-control"
                        placeholder="Max"
                        value={price_max}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          setPrice_max(value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="ewebsite_property"
                      value={inputProp.ewebsite_property}
                      placeholder="Ex: https://www.example.com"
                      onChange={handleChange}
                    />
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
                    <label for="exampleInputPassword1" className="form-label">
                      Configuration:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={inputProp.econfiguration}
                      id="exampleInputPassword1"
                      name="econfiguration"
                      placeholder="Ex: 123 ft"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Possession in:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={inputProp.epossession}
                      id="exampleInputPassword1"
                      name="possession"
                      placeholder="Ex: 2022-12-31"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Tower:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={inputProp.etower}
                      id="exampleInputPassword1"
                      name="etower"
                      placeholder="Ex: 2"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Floor:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={inputProp.efloor}
                      name="efloor"
                      placeholder="Ex: 3"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Apartments per floor:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
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
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Hospital"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Hospital
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Park"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Park
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="School"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            School
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Club House"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Club House
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Play Area"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Play Area
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Collage"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Collage
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Metro Station"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Metro Station
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Police Station"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Police Station
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Mall"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Mall
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Shopping Mall"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Shopping Mall
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Cinema"
                            id="flexCheckDefault"
                            onChange={(e) => {
                              addAminity(e);
                            }}
                          />
                          <label
                            class="form-check-label"
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
    </div>
  );
}

export default Dashboard;
