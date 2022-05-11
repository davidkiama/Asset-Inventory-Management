import { combineReducers } from "redux";

import token from "./auth";
import employeeRequests from "./employeeRequests";
import assets from "./assets";

export default combineReducers({ token, employeeRequests, assets });
