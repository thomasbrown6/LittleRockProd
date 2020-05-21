import axios from "axios";
import { setAlert } from "./alert";
import { GET_KEY, KEY_ERROR, CLEAR_KEY } from "./types";

// Upload a Livestream key
export const uploadLivestreamKey = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const key = {
      data: data
    };

    console.log("hitting in actions");
    console.log(key);

    const res = await axios.post("/api/keys/livestream", key, config);
    dispatch({
      type: GET_KEY,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: KEY_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
};

// Get Livestream key
export const getLivestreamKey = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/keys/livestream");

    dispatch({
      type: GET_KEY,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: CLEAR_KEY });

    dispatch({
      type: KEY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Upload a Calendar key
export const uploadCalendarKey = (key) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log(key);

    const res = await axios.post("/api/keys/calendar", key, config);
    dispatch({
      type: GET_KEY,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: KEY_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
};

// Get Calendar key
export const getCalendarKey = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/keys/calendar");

    dispatch({
      type: GET_KEY,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: CLEAR_KEY });

    dispatch({
      type: KEY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
