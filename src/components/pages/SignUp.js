import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { register } from "../../actions/auth";

// import * as React from 'react'
import "../../static/css/SignUp.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: "",
  manager: false,
  employee: true,
};

function SignUp() {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();
  const clearInputs = () => setUserData(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(userData));

    clearInputs();

    // Redirect to login page
    navigate("/sign-in");
  };

  return (
    <form style={{ width: "400px", margin: "20px auto" }} onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Userame</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="username"
          onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="email"
          onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          name="password2"
          className="form-control"
          placeholder="Confirm password"
          onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right" style={{ margin: "20px auto" }}>
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;
