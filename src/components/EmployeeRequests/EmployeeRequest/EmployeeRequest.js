import React from "react";

import "./EmployeeRequest.css";

function EmployeeRequest({ employeeRequest }) {
  return (
    <tbody>
      <tr>
        <td>{employeeRequest.asset_type}</td>
        <td>{employeeRequest.request_type}</td>
        <td>{employeeRequest.sender}</td>
        <td>{employeeRequest.quantity}</td>
        <td>{employeeRequest.urgency}</td>
        <td>{employeeRequest.status}</td>
      </tr>
    </tbody>
  );
}

export default EmployeeRequest;
