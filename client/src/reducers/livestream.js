import {
  GET_KEY,
  KEY_ERROR,
  CLEAR_KEY,
  UPDATE_KEY,
  GET_KEYS
} from "../actions/types";

const initialState = {
  data: null,
  loaded: false,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_KEY:
    case UPDATE_KEY:
      return {
        ...state,
        data: payload,
        loaded: true
      };

    case GET_KEYS:
      return {
        ...state,
        data: payload,
        loaded: true
      };

    case KEY_ERROR:
      return {
        ...state,
        error: payload,
        loaded: true,
        data: null
      };

    case CLEAR_KEY:
      return {
        ...state,
        data: null,
        loaded: false,
        error: null
      };

    default:
      return state;
  }
}
