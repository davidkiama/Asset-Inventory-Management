import React from "react";
import { useDispatch } from "react-redux";

import "./EmployeeRequest.css";

import { approveRequest, rejectRequest } from "../../../actions/employeeRequests";

function EmployeeRequest({ employeeRequest }) {
  const dispatch = useDispatch();
  const id = employeeRequest.id;
  return (
    <tbody>
      <tr>
        <td>{employeeRequest.status}</td>
        <td>{employeeRequest.asset_type}</td>
        <td>{employeeRequest.request_type}</td>
        <td>{employeeRequest.sender}</td>
        <td>{employeeRequest.quantity}</td>
        <td>{employeeRequest.urgency}</td>
        <button onClick={() => dispatch(rejectRequest(id))}>Reject</button>
        <button onClick={() => dispatch(approveRequest(id))}>Approve</button>
      </tr>
    </tbody>
  );
}

export default EmployeeRequest;
