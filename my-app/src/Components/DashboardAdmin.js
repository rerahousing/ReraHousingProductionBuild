import React, { useEffect, useState } from "react";
import axios from "axios";

function DashboardAdmin() {
  useEffect(() => {
    setShow(false);
    getAllAdmins();
  }, []);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [admins, setAdmins] = useState([]);
  const getAllAdmins = () => {
    let url =
      "https://rera-housing-production-build-bicph54x5-rerahousing.vercel.app/api/admin/getalladmins";
    axios
      .get(url)
      .then((res) => {
        setAdmins(res.data);
      })
      .catch((err) => {
        setShow(true);
      });
  };

  const deleteAdmin = (id) => {
    let url = `https://rera-housing-production-build-bicph54x5-rerahousing.vercel.app/api/admin/deleteadmin/${id}`;
    axios
      .delete(url)
      .then((res) => {
        setShow(true);
      })
      .catch((err) => {
        setShow(true);
      });
  };

  return (
    <div className="admin-tab">
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success !</strong> Deleted an Admin Successfully
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addAdmin"
      >
        Add Admin
      </button>
      <div
        className="modal fade"
        id="addAdmin"
        tabindex="-1"
        aria-labelledby="addAdmin"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addAdmin">
                Add Admin
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword17" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword17"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
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
                onClick={() => {
                  let url =
                    "https://rera-housing-production-build-bicph54x5-rerahousing.vercel.app/api/admin/signup";
                  axios.post(url, { username: username, password: password });
                  window.location.reload();
                }}
              >
                Add Admin
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {admins?.map((item, index) => {
            return (
              <tr>
                <th>{item._id}</th>
                <td>{item.username}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteAdmin(item._id);
                      window.location.reload();
                    }}
                    disabled={index === 0 ? true : false}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardAdmin;
