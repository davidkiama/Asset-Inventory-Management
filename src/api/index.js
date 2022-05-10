import axios from "axios";

const authUrl = "http://127.0.0.1:8000/auth";
const requestsUrl = "http://127.0.0.1:8000/requests/";
const managerReviewUrl = "http://127.0.0.1:8000/manager/requests/";

let token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Token ${token}`;
}

// Auth requests
export const register = (user) => axios.post(`${authUrl}/register/`, user);
export const login = (user) => axios.post(`${authUrl}/login/`, user);
export const logout = () => axios.get(`${authUrl}/logout/`);

export const fetchRequests = () => axios.get(requestsUrl);
export const createRequest = (employeeRequest) => axios.post(requestsUrl, employeeRequest);

export const approveRequest = (id) => axios.put(`${managerReviewUrl}${id}/approve/`);
export const rejectRequest = (id) => axios.put(`${managerReviewUrl}${id}/reject/`);
