import * as api from "../api";

// Action creators
export const getRequests = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRequests();

    dispatch({ type: "FETCH_REQUESTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
