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
    const { data } = await api.createRequest(employeeRequest);

    dispatch({ type: "CREATE_REQUEST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const approveRequest = (id) => async (dispatch) => {
  try {
    const { data } = await api.approveRequest(id);
    window.location.reload();

    dispatch({ type: "APPROVE_REQUEST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const rejectRequest = (id) => async (dispatch) => {
  try {
    const { data } = await api.rejectRequest(id);
    window.location.reload();

    dispatch({ type: "REJECT_REQUEST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
