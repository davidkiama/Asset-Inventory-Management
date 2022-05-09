import * as api from "../api/index";

export const fetchRequests = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRequests();

    dispatch({ type: "FETCH_REQUESTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createRequest = (employeeRequest) => async (dispatch) => {
  try {
    const data = await api.createRequest(employeeRequest);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
