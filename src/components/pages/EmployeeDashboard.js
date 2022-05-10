import React, { useEffect } from "react";

import "../../App.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchRequests } from "../../actions/employeeRequests";
import EmployeeRequests from "../EmployeeRequests/EmployeeRequests";

function EmployeeDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  return (
    <>
      <h1 className="manager_approval">All your requests </h1>

      <Link to="/employee">Create new request</Link>

      <div>
        <EmployeeRequests />
      </div>
    </>
  );
}

export default EmployeeDashboard;
