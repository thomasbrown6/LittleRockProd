import {
  GET_CALENDAREVENT,
  CALENDAREVENT_ERROR,
  CLEAR_CALENDAREVENT,
  UPDATE_CALENDAREVENT,
  GET_CALENDAREVENTS
} from "../actions/types";

const initialState = {
  events: null,
  loaded: false,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CALENDAREVENT:
    case UPDATE_CALENDAREVENT:
      return {
        ...state,
        events: payload,
        loaded: true
      };

    case GET_CALENDAREVENTS:
      return {
        ...state,
        events: payload,
        loaded: true
      };

    case CALENDAREVENT_ERROR:
      return {
        ...state,
        error: payload,
        loaded: true,
        events: null
      };

    case CLEAR_CALENDAREVENT:
      return {
        ...state,
        events: null,
        loaded: false,
        error: null
      };

    default:
      return state;
  }
}
