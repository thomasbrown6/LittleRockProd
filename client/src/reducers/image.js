import {
  GET_IMAGE,
  IMAGE_ERROR,
  CLEAR_IMAGE,
  UPDATE_IMAGE,
  GET_IMAGES
} from "../actions/types";

const initialState = {
  image: null,
  loaded: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_IMAGE:
    case UPDATE_IMAGE:
      return {
        ...state,
        image: payload,
        loaded: true
      };

    case GET_IMAGES:
      return {
        ...state,
        image: payload,
        loaded: true
      };

    case IMAGE_ERROR:
      return {
        ...state,
        error: payload,
        loaded: true,
        image: null
      };

    case CLEAR_IMAGE:
      return {
        ...state,
        image: null,
        loaded: false,
        error: null
      };

    default:
      return state;
  }
}
