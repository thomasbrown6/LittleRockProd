import {
  GET_GOOGLEALBUM,
  GOOGLEALBUM_ERROR,
  CLEAR_GOOGLEALBUM,
  UPDATE_GOOGLEALBUM,
  GET_GOOGLEALBUMS,
} from "../actions/types";

const initialState = {
  album: null,
  loaded: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GOOGLEALBUM:
    case UPDATE_GOOGLEALBUM:
      return {
        ...state,
        album: payload,
        loaded: true,
      };

    case GET_GOOGLEALBUMS:
      return {
        ...state,
        album: payload,
        loaded: true,
      };

    case GOOGLEALBUM_ERROR:
      return {
        ...state,
        error: payload,
        loaded: true,
        album: null,
      };

    case CLEAR_GOOGLEALBUM:
      return {
        ...state,
        album: null,
        loaded: false,
        error: null,
      };

    default:
      return state;
  }
}
