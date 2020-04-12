import axios from "axios";
import { setAlert } from "./alert";
import { GET_IMAGES, IMAGE_ERROR, CLEAR_IMAGE } from "./types";
import { formatMs } from "@material-ui/core";

// Upload a Image
export const uploadEventImage = FormData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const image = {
      url: FormData
    };

    console.log(image);

    const res = await axios.post("/api/events/images", image, config);
    dispatch({
      type: GET_IMAGES,
      payload: res.data
    });

    dispatch(setAlert("Image uploaded", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "error")));
    }

    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
};

// Get users daycares
export const getImages = () => async dispatch => {
  try {
    const res = await axios.get("/api/events/images");

    dispatch({
      type: GET_IMAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: CLEAR_IMAGE });

    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete image
export const deleteImage = id => async dispatch => {
  if (window.confirm("Are you sure you want to delete your image?")) {
    try {
      console.log(`deleting image at position: ${id}`);

      await axios.delete(`/api/events/images/${id}`);

      dispatch({ type: CLEAR_IMAGE });

      dispatch(setAlert("Your image has been deleted"));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "error")));
      }
      dispatch({
        type: IMAGE_ERROR,
        payload: {
          msg: err.response,
          status: err.response.status
        }
      });
    }
  }
};
