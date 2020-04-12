import axios from "axios";
import {
  GET_GOOGLEALBUMS,
  GOOGLEALBUM_ERROR,
  CLEAR_GOOGLEALBUM,
} from "./types";

// Get users daycares
export const getGoogleAlbum = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://google-photos-album-demo.glitch.me/94DFcUjbCsiTWea38"
    );

    dispatch({
      type: GET_GOOGLEALBUMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: CLEAR_GOOGLEALBUM });

    dispatch({
      type: GOOGLEALBUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
