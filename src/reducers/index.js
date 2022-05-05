import { combineReducers } from "redux";

import token from "./auth";
import employeeRequests from "./employeeRequests";

export default combineReducers({ token, employeeRequests });
