import React, { useEffect } from "react";

import "../../App.css";
import '../pages/Manager.css';

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
      <h1 className="manager_approval">Listed here, are all asset requests from employees</h1>
      <div class='container-fluid'>
          <div class='row '>
              <div class='col-md-1 col-sm-1'>
                {/* sidebar */}
              </div>
              <div class='col-md-8 col-sm-8 fill'>
                <EmployeeRequests />
              </div>
              <div class='col-md-4 col-sm-3'>
                {/* sidebar */}
              </div>
          </div>
      </div>
    </>
  );
}

export default Manager;
