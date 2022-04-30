import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getRequests } from "../../actions/employeeRequests";

import EmployeeRequests from "../EmployeeRequests/EmployeeRequests";

function EmployeeDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequests());
  }, [dispatch]);
  return (
    <>
      <div className="hero-container">
        <h1> EMPLOYEE DASHBOARD! </h1>
        <p> All requests </p>
        <div>
          <EmployeeRequests />
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
