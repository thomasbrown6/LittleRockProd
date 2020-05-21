import axios from "axios";

import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USERS_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE,
  DELETE_USER_FAIL
} from "./types";

// Load User
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth/users");

    dispatch({
      type: USERS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Delete User
export const deleteUser = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.delete("/api/auth", body, config);

    dispatch({
      type: DELETE_USER_FAIL
    });
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch(setAlert(`successfully deleted user: ${email}`, "success"));

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: DELETE_USER_FAIL
    });
  }
};

//Logout User, Clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
