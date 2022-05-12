import axios from "axios";

const authUrl = "https://asset-inventory-management.herokuapp.com/auth";
const requestsUrl = "https://asset-inventory-management.herokuapp.com/requests/";
const managerReviewUrl = "https://asset-inventory-management.herokuapp.com/manager/requests/";
const assetsUrl = "https://asset-inventory-management.herokuapp.com/manager/assets/";

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

export const fetchAssets = () => axios.get(assetsUrl);
export const createAsset = (asset) => axios.post(assetsUrl, asset);
