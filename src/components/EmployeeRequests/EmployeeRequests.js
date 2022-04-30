import React from "react";
import { useSelector } from "react-redux";

import EmployeeRequest from "./EmployeeRequest/EmployeeRequest";

function EmployeeRequests() {
  const employeeRequests = useSelector((state) => state.employeeRequests);

  return (
    <div>
      EmployeeRequests
      <div>
        <table className="requests-table">
          <tr>
            <th>Asset Type</th>
            <th>Request Type</th>
            <th>Sender</th>
            <th>Quantity</th>
            <th>Urgency</th>
            <th>Status</th>
          </tr>
          {employeeRequests.map((employeeRequest) => (
            <EmployeeRequest key={employeeRequest.id} employeeRequest={employeeRequest} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default EmployeeRequests;
