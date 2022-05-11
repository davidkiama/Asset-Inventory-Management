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
      <div class="manager-dashboard">
        <h1 className="manager_approval">All your requests</h1>

        <Link to="/employee" className="side-btn">
          Create new request
        </Link>

        <div class="container-fluid">
          <div class="row ">
            <div class="col-md-2 col-sm-2">{/* sidebar */}</div>
            <div class="col-md-8 col-sm-8">
              <EmployeeRequests />
            </div>
            <div class="col-md-2 col-sm-2">{/* sidebar */}</div>
          </div>
        </div>
        {/* <section class='footer'>
      <Footer />  
      </section> */}
      </div>
    </>
  );
}

export default EmployeeDashboard;
