import React from "react";
import { useDispatch } from "react-redux";

import "./EmployeeRequest.css";

import { approveRequest, rejectRequest } from "../../../actions/employeeRequests";

function EmployeeRequest({ employeeRequest, index }) {
  const dispatch = useDispatch();
  const id = employeeRequest.id;
  const userRole = localStorage.getItem("userRole");

  return (
    <tbody>
      <tr>
        <td>{index +1} </td>
        <td>{employeeRequest.status}</td>
        <td>{employeeRequest.asset_type}</td>
        <td>{employeeRequest.request_type}</td>
        <td>{employeeRequest.sender}</td>
        <td>{employeeRequest.quantity}</td>
        <td>{employeeRequest.urgency}</td>

        {userRole === "Manager" ? (
          <>
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
          </>
        ) : (
          <td>DELETE</td>
        )}
      </tr>
    </tbody>
  );
}

export default EmployeeRequest;
