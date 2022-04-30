import axios from "axios";

const url = "http://127.0.0.1:8000/requests";

export const fetchRequests = () => axios.get(url);
