import React, { Component } from "react";
// import * as React from 'react'
import "../../static/css/SignUp.css";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="register-form-form-role">
          <p className="register-form-form-role-title">Registering as? </p>
          <div className="register-form-form-role-container">
            <div className="register-form-form-role-user">
              <input type="radio" name="role" id="role" />
              <p>Manager</p>
            </div>
            <div className="register-form-form-role-mover">
              <input type="radio" name="role" id="role" />
              <p>Employee</p>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}