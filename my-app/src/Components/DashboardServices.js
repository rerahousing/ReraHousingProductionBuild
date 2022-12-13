import React, { useState, useEffect, useContext, useRef } from "react";
import PropertyContext from "../Context/Property/PropertyContext";
import "../Styles/Card7.css";
import data from "./Data";

function DashboardServices() {
  const [image, setImage] = useState([]);
  const ref = useRef(null);
  const [serviceRole, setServiceRole] = useState([] || "");
  const context = useContext(PropertyContext);
  const [serviceData, setServiceData] = useState({
    name: "",
    loc_area: "",
    loc_state: "",
    loc_city: "",
    availability: "",
    facebook_link: "",
    whatsapp_link: "",
    instagram_link: "",
    website_link: "",
  });
  const [selectCity, setSelectedCity] = useState("Select City");
  const [selectState, setSelectedState] = useState("Select State");
  const availableCity = data.state.find((s) => s.name === selectState);

  const [currentValue, setCurrentValue] = useState({
    ename: "",
    loc_area: "",
    loc_state: "",
    loc_city: "",
    availability: "",
    facebook_link: "",
    whatsapp_link: "",
    instagram_link: "",
    website_link: "",
  });
  const { services, getService, addServices, deleteService, updateService } =
    context;

  useEffect(() => {
    getService();
  });

  const onChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const addServiceRole = (e) => {
    if (e.target.checked) {
      setServiceRole((oldArray) => [...oldArray, e.target.value]);
    } else {
      removeServiceRole(e);
    }
  };

  const removeServiceRole = (e) => {
    setServiceRole([...serviceRole.filter((data) => data !== e.target.value)]);
  };

  const onChangeEdit = (e) => {
    setCurrentValue({ ...currentValue, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", serviceData.name);
    formData.append("loc_area", serviceData.loc_area);
    formData.append("loc_state", serviceData.loc_state);
    formData.append("loc_city", serviceData.loc_city);
    formData.append("availability", serviceData.availability);
    image.forEach((i) => {
      formData.append("profile_pic", i);
    });
    formData.append("facebook_link", serviceData.facebook_link);
    formData.append("whatsapp_link", serviceData.whatsapp_link);
    formData.append("instagram_link", serviceData.instagram_link);
    formData.append("website_link", serviceData.website_link);
    serviceRole.map((item) => formData.append("services", item));
    addServices(formData);
    window.location.reload();
  };

  const updateServiceDB = (e) => {
    const currentService = services.filter((item) => item._id === e._id);

    setCurrentValue({
      id: currentService[0]._id,
      name: currentService[0].name,
      loc_area: currentService[0].loc_area,
      loc_state: currentService[0].loc_state,
      loc_city: currentService[0].loc_city,
      availability: currentService[0].availability,
      facebook_link: currentService[0].facebook_link,
      whatsapp_link: currentService[0].whatsapp_link,
      instagram_link: currentService[0].instagram_link,
      website_link: currentService[0].website_link,
    });
    setSelectedState(currentService[0].loc_state);
    setServiceRole(currentService[0].services);
    checkBoxes(currentService[0].services);
    checkRadioButtons(currentService[0].availability);
  };

  const submitEditForm = () => {
    ref.current.click();

    const formData = new FormData();
    formData.append("name", currentValue.name);
    formData.append("loc_area", currentValue.loc_area);
    formData.append("loc_state", currentValue.loc_state);
    formData.append("loc_city", currentValue.loc_city);
    formData.append("availability", currentValue.availability);
    formData.append("facebook_link", currentValue.facebook_link);
    formData.append("whatsapp_link", currentValue.whatsapp_link);
    formData.append("instagram_link", currentValue.instagram_link);
    formData.append("website_link", currentValue.website_link);
    serviceRole.map((item) => formData.append("services", item));
    image.forEach((i) => {
      formData.append("profile_pic", i);
    });
    const id = currentValue.id;

    updateService(id, formData);
  };

  const checkBoxes = (boxes) => {
    const checkbox = document.querySelectorAll("#serviceRoles");
    checkbox.forEach((e) => {
      if (boxes.includes(e.value)) {
        e.checked = true;
      }
    });
  };

  const checkRadioButtons = (item) => {
    const button = document.querySelectorAll("#flexRadioDefault22");

    button.forEach((e) => {
      if (e.value === item && item != "") {
        e.checked = true;
      }
      if (item === "") {
        e.checked = false;
      }
    });
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addservice"
      >
        Add a Service
      </button>

      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Profile Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Area</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Availabilty</th>
            <th scope="col">Facebook</th>
            <th scope="col">Whatsapp</th>
            <th scope="col">Instagram</th>
            <th scope="col">Website</th>
            <th scope="col">Services Offered</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {services?.map((e) => {
            return (
              <tr>
                <th scope="row">{e._id}</th>
                <td className="image_col">
                  {" "}
                  <img src={`${e.profile_pic.url}`} alt="" />
                </td>
                <td>{e.name}</td>
                <td>{e.loc_area}</td>
                <td>{e.loc_state}</td>
                <td>{e.loc_city}</td>
                <td>{e.availability}</td>
                <td>{e.facebook_link}</td>
                <td>{e.whatsapp_link}</td>
                <td>{e.instagram_link}</td>
                <td>{e.website_link}</td>
                <td>
                  <ul>
                    {e.services.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </td>
                <td>
                  <button
                    type="button "
                    className="btn btn-danger my-1"
                    onClick={() => {
                      deleteService(e._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    type="button my-2"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editservice"
                    onClick={() => {
                      updateServiceDB(e);
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

      {/* Add Service Modal */}
      <div
        className="modal fade"
        id="addservice"
        tabindex="-1"
        aria-labelledby="addservice"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addservice">
                Add a Service
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
                  <label for="exampleInputPassword18" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword18"
                    name="name"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword19" className="form-label">
                    Area
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword19"
                    name="loc_area"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="loc_state"
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
                  <label for="exampleInputPassword1" className="form-label">
                    City
                  </label>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="loc_city"
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
                <div className="mb-3 row">
                  <label for="exampleInputPassword1" className="form-label">
                    Availability
                  </label>
                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      value="Online"
                      onChange={onChange}
                      id="flexRadioDefault4"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Online
                    </label>
                  </div>

                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      value="Offline"
                      onChange={onChange}
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Offline
                    </label>
                  </div>

                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      value="Online/Offline"
                      onChange={onChange}
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Online/Offline
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword20" className="form-label">
                    Facebook Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword20"
                    name="facebook_link"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword21" className="form-label">
                    Whatsapp Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword21"
                    name="whatsapp_link"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword22" className="form-label">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword22"
                    name="instagram_link"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword28" className="form-label">
                    Website Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword28"
                    name="website_link"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      onChange={(e) => {
                        setImage([e.target.files[0]]);
                      }}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Services:
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="RERA Agent"
                          id="agent"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="agent">
                          RERA Agent
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Architects"
                          id="Architects"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="Architects">
                          Architects
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Interior Designer"
                          id="Interior Designer"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Interior Designer"
                        >
                          Interior Designer
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Vastu Consultant"
                          id="Vastu Consultant"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Vastu Consultant"
                        >
                          Vastu Consultant
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Property Lawyer"
                          id="Property Lawyer"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Property Lawyer"
                        >
                          Property Lawyer
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Builder"
                          id="Builder"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="Builder">
                          Builder
                        </label>
                      </div>
                    </div>
                  </div>
                  <h6>Added Service Role</h6>
                  <ul>
                    {serviceRole?.map((e) => {
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
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editservice"
        tabindex="-1"
        aria-labelledby="editservice"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editservice">
                Edit Service
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
                  <label for="exampleInputPassword23" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword23"
                    name="name"
                    value={currentValue.name}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword24" className="form-label">
                    Area
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword24"
                    name="loc_area"
                    value={currentValue.loc_area}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label for="stateSelectEdit" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="loc_state"
                    value={currentValue.loc_state}
                    id="stateSelectEdit"
                    onChange={(e) => {
                      onChangeEdit(e);
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
                  <label for="citySelectEdit" className="form-label">
                    City
                  </label>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="loc_city"
                    id="citySelectEdit"
                    value={currentValue.loc_city}
                    onChange={(e) => {
                      onChangeEdit(e);
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
                <div className="mb-3 row">
                  <label for="exampleInputPassword1" className="form-label">
                    Availability
                  </label>
                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      value="Online"
                      onChange={onChangeEdit}
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Online
                    </label>
                  </div>

                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      value="Offline"
                      onChange={onChangeEdit}
                      id="flexRadioDefault5"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Offline
                    </label>
                  </div>

                  <div class="form-check col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="availability"
                      id="flexRadioDefault6"
                      value="Online/Offline"
                      onChange={onChangeEdit}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Online/Offline
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Facebook Link
                  </label>
                  <input
                    type="text"
                    className="form-contro27"
                    id="exampleInputPassword27"
                    name="facebook_link"
                    value={currentValue.facebook_link}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword25" className="form-label">
                    Whatsapp Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword25"
                    name="whatsapp_link"
                    value={currentValue.whatsapp_link}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword26" className="form-label">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword26"
                    name="instagram_link"
                    value={currentValue.instagram_link}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword29" className="form-label">
                    Website Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword29"
                    name="website_link"
                    value={currentValue.website_link}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      onChange={(e) => {
                        setImage([e.target.files[0]]);
                      }}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Services:
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="RERA Agent"
                          id="agent_2"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="agent">
                          RERA Agent
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Architects"
                          id="serviceRoles"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="Architects">
                          Architects
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Interior Designer"
                          id="serviceRoles"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Interior Designer"
                        >
                          Interior Designer
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Vastu Consultant"
                          id="serviceRoles"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Vastu Consultant"
                        >
                          Vastu Consultant
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Property Lawyer"
                          id="serviceRoles"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label
                          className="form-check-label"
                          for="Property Lawyer"
                        >
                          Property Lawyer
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Builder"
                          id="serviceRoles"
                          onChange={(e) => {
                            addServiceRole(e);
                          }}
                        />
                        <label className="form-check-label" for="Builder">
                          Builder
                        </label>
                      </div>
                    </div>
                  </div>
                  <h6>Added Service Role</h6>
                  <ul>
                    {serviceRole?.map((e) => {
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
                onClick={submitEditForm}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardServices;
