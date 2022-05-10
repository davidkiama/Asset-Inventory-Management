import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import EmployeeRequest from "./EmployeeRequest/EmployeeRequest";

function EmployeeRequests() {
  const employeeRequests = useSelector((state) => state.employeeRequests);

  return (
    <div>
      <div>
        <table className="requests-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Status</th>
              <th>Asset Type</th>
              <th>Request Type</th>
              <th>Sender</th>
              <th>Quantity</th>
              <th>Urgency</th>
              <th colspan="2">Review</th>
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
      </div>
    </div>
  );
}

export default EmployeeRequests;
