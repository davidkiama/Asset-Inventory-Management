import * as api from "../api";

// Auth actions
export const register = (user) => async (dispatch) => {
  try {
    const { data } = await api.register(user);
    // Saving the token in the browser
    localStorage.setItem("token", data.token);

    dispatch({ type: "REGISTER", payload: data.token });
  } catch (error) {
    console.log(error);
  }
};
