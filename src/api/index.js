import axios from "axios";

const url = "http://127.0.0.1:8000/requests";
const authUrl = "http://127.0.0.1:8000/auth";

export const fetchRequests = () => axios.get(url);

// Auth requests
export const register = (user) => axios.post(`${authUrl}/register/`, user);
