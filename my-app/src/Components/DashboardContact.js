import React, { useState, useEffect, useContext, useRef } from "react";
import PropertyContext from "../Context/Property/PropertyContext";
import "../Styles/Card7.css";

function DashboardContact() {
  const ref = useRef(null);
  const context = useContext(PropertyContext);
  const { contact, getContact, deleteContact, updateContact } = context;
  const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    project_name: "",
    project_city: "",
    project_state: "",
    budget: "",
    remarks: "",
  });

  useEffect(() => {
    getContact();
  }, []);

  const updateinput = (id) => {
    const currentContact = contact.filter((item) => item._id === id);
    setInput({
      id: currentContact[0]._id,
      name: currentContact[0].name,
      email: currentContact[0].email,
      mobile: currentContact[0].mobile,
      project_name: currentContact[0].project_name,
      project_city: currentContact[0].project_city,
      project_state: currentContact[0].project_state,
      budget: currentContact[0].budget,
      remarks: currentContact[0].remarks,
    });
  };

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = () => {
    ref.current.click();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("mobile", input.mobile);
    formData.append("project_name", input.project_name);
    formData.append("project_city", input.project_city);
    formData.append("project_state", input.project_state);
    formData.append("budget", input.budget);
    formData.append("remarks", input.remarks);
    updateContact(input.id, formData);
  };

  return (
    <div className="container">
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Project Name</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Budget</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {contact?.map((e) => {
            return (
              <tr>
                <th scope="row">{e._id}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.project_name}</td>
                <td>{e.project_state}</td>
                <td>{e.project_city}</td>
                <td>{e.budget}</td>
                <td>{e.remarks}</td>
                <td>
                  <button
                    type="button "
                    className="btn btn-danger my-1"
                    onClick={() => {
                      deleteContact(e._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    type="button my-2"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editcontact"
                    onClick={() => {
                      updateinput(e._id);
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
        id="editcontact"
        tabindex="-1"
        aria-labelledby="editcontact"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editcontact">
                Edit Contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={input.name}
                  onChange={changeInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleFormControlInput2"
                  value={input.email}
                  onChange={changeInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Mobile No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput3"
                  value={input.mobile}
                  onChange={changeInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput4" className="form-label">
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput4"
                  name="project_name"
                  value={input.project_name}
                  onChange={changeInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Project State
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="project_state"
                  value={input.project_state}
                  onChange={changeInput}
                >
                  <option selected>Select State</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Project City
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="project_city"
                  value={input.project_city}
                  onChange={changeInput}
                >
                  <option selected>Select City</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput5" className="form-label">
                  Budget
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput5"
                  name="budget"
                  value={input.budget}
                  onChange={changeInput}
                />
              </div>
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
                onClick={submit}
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

export default DashboardContact;
