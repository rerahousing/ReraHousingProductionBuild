import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const authenticate = (e) => {
    const url = `https://rerahousing.in/api/admin/login`;
    // axios
    //   .post(url, { username: username, password: password })
    //   .then((result) => {
    //     localStorage.setItem("token", result.data.authToken);
    //     navigate("/rera-housing-dashboard");
    //   })
    //   .catch((err) => {
    //     setShow(true);
    //     alert(err);
    //   });

    fetch(url, {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    })
      .then((result) => {
        localStorage.setItem("token", result.data.authToken);
        navigate("/rera-housing-dashboard");
      })
      .catch((err) => {
        setShow(true);
        alert(err);
      });
    e.preventDefault();
  };
  return (
    <>
      {show && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Invalid Request !</strong> Password or Username wrong
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
      )}
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button onClick={authenticate}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
