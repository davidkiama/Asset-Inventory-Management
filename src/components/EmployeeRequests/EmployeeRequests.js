import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import "./Employee_Request.css";

import EmployeeRequest from "./EmployeeRequest/EmployeeRequest";

function EmployeeRequests() {
  const employeeRequests = useSelector((state) => state.employeeRequests);
  const userRole = localStorage.getItem("userRole");

  return (
    <>
      <table className="requests-table" class="table">
        <caption id="caption">Assets requests summary statement</caption>
        <thead>
          <tr className="table-row">
            <th>Index</th>
            <th>Status</th>
            <th>Asset </th>
            <th>Request </th>
            <th>Sender</th>
            <th>Quantity</th>
            <th>Urgency</th>
            {userRole === "Manager" ? <th colspan="2">Review</th> : <th>Delete</th>}
          </tr>
        </thead>

        {!employeeRequests.length ? (
          <CircularProgress />
        ) : (
          <>
            {employeeRequests.map((employeeRequest, index) => (
              <EmployeeRequest key={employeeRequest.id} employeeRequest={employeeRequest} index={index} />
            ))}
          </>
        )}
      </table>
    </>
  );
}

export default EmployeeRequests;
