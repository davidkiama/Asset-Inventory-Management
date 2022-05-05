import * as api from "../api";

// Auth actions
export const register = (user) => async (dispatch) => {
  try {
    const { data } = await api.register(user);
    // console.log(data);

    dispatch({ type: "REGISTER", payload: data.token });
  } catch (error) {
    console.log(error);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);

    localStorage.setItem("token", data.token);
    localStorage.setItem("userRole", data.user_role);

    // dispatch({ type: "LOGIN", payload: data.token });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.logout();

    window.location.reload();

    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
