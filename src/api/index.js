import axios from "axios";

const url = "http://127.0.0.1:8000/requests";
const authUrl = "http://127.0.0.1:8000/auth";

let token = localStorage.getItem("token");
console.log(token);

let AUTH_TOKEN = `Token ${token}`;

if (token) {
  axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
}

export const fetchRequests = () => axios.get(url);

// Auth requests
export const register = (user) => axios.post(`${authUrl}/register/`, user);
