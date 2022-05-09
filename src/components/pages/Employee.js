import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./RequestForm.css";

import { createRequest } from "../../actions/employeeRequests";

const initialState = { asset_type: "", request_type: "", quantity: "", urgency: "", status: "open" };
function Employee() {
  const [requestData, setRequestData] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createRequest(requestData));
    console.log(requestData);
  };

  return (
    <>
      <div className="hero-container">
        {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}

        <div className="hero-btns">
          <div className="input-areas">
            <form className="form form--request" onSubmit={handleSubmit}>
              <h4>Create request</h4>

              <label>Asset Type</label>
              <input
                required
                type="text"
                name="asset_type"
                onChange={(e) => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
              />

              <label>Request Type</label>
              <select
                required
                type="text"
                name="request_type"
                onChange={(e) => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
              >
                <option value="">Type of request</option>
                <option value="Repair">Repair</option>
                <option value="Service">Service</option>
                <option value="New">New</option>
              </select>

              <label>Quantity</label>
              <input
                required
                type="number"
                name="quantity"
                onChange={(e) => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
              />

              <label>Urgency</label>
              <select
                required
                name="urgency"
                onChange={(e) => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
              >
                <option value="">Level of urgency</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
