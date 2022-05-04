import axios from "axios";

const url = "http://127.0.0.1:8000/requests";
const authUrl = "http://127.0.0.1:8000/auth";

let token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Token ${token}`;
}

export const fetchRequests = () => axios.get(url);

// Auth requests
export const register = (user) => axios.post(`${authUrl}/register/`, user);
export const login = (user) => axios.post(`${authUrl}/login/`, user);
export const logout = () => axios.get(`${authUrl}/logout/`);
