import React from "react";
import { useDispatch } from "react-redux";

import "./EmployeeRequest.css";

import { approveRequest, rejectRequest } from "../../../actions/employeeRequests";

function EmployeeRequest({ employeeRequest, index }) {
  const dispatch = useDispatch();
  const id = employeeRequest.id;
  return (
    <tbody>
      <tr>
        <td>{index} </td>
        <td>{employeeRequest.status}</td>
        <td>{employeeRequest.asset_type}</td>
        <td>{employeeRequest.request_type}</td>
        <td>{employeeRequest.sender}</td>
        <td>{employeeRequest.quantity}</td>
        <td>{employeeRequest.urgency}</td>
        <td>
          <button className="reject" onClick={() => dispatch(rejectRequest(id))}>
            Reject
          </button>
        </td>
        <td>
          <button className="approve" onClick={() => dispatch(approveRequest(id))}>
            Approve
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default EmployeeRequest;
