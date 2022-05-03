import * as api from "../api";

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);

    dispatch({ type: "LOGIN", payload: data.token });
  } catch (error) {
    console.log(error);
  }
};