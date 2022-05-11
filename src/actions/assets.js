import * as api from "../api/index";

export const fetchAssets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAssets();

    dispatch({ type: "FETCH_ASSETS", payload: data });
  } catch (error) {}
};

export const createAsset = (asset) => async (dispatch) => {
  try {
    const { data } = await api.createAsset(asset);

    dispatch({ type: "CREATE_ASSET", payload: data });
  } catch (error) {
    console.log(error);
  }
};
