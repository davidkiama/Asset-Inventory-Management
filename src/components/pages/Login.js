import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../actions/auth";

const initialState = { username: "", password: "" };

function Login() {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clearInputs = () => setUserData(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(userData));

    clearInputs();

    // Redirect to home page
    navigate("/");
  };
  return (
    <form
      style={{ width: "400px", margin: "20px auto" }}
      onSubmit={handleSubmit}
    >
      <div className="hero-container">
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
