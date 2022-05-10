import * as api from "../api/index";

export const fetchAssets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAssets();

    dispatch({ type: "FETCH_ASSETS", payload: data });
  } catch (error) {}
};
