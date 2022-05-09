import React from "react";
import { useSelector } from "react-redux";

import EmployeeRequest from "./EmployeeRequest/EmployeeRequest";

function EmployeeRequests() {
  const employeeRequests = useSelector((state) => state.employeeRequests);

  return (
    <div>
      <div>
        <table className="requests-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Asset Type</th>
              <th>Request Type</th>
              <th>Sender</th>
              <th>Quantity</th>
              <th>Urgency</th>
            </tr>
          </thead>

          {employeeRequests.map((employeeRequest) => (
            <EmployeeRequest key={employeeRequest.id} employeeRequest={employeeRequest} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default EmployeeRequests;
