import React, { useEffect } from "react";

import "../../App.css";

import { useDispatch } from "react-redux";
import { fetchRequests } from "../../actions/employeeRequests";
import EmployeeRequests from "../EmployeeRequests/EmployeeRequests";

function Manager() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  return (
    <>
      <h1 className="manager_approval">Manager Approval Dashboard....Esther</h1>
      <p> All requests </p>
      <div>
        <EmployeeRequests />
      </div>
    </>
  );
}

export default Manager;
