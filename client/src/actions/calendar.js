import axios from "axios";
import {
  GET_CALENDAREVENTS,
  CALENDAREVENT_ERROR,
  CLEAR_CALENDAREVENT
} from "./types";

// Get calendar events
export const getCalendarEvents = () => async (dispatch) => {
  const CALENDAR_ID =
    "littlerockamezion.org_q8n87gmgm6re5mkhhr4gvmj7bs@group.calendar.google.com";
  // const API_KEY = "AIzaSyCF5wB9cJEUkLttrqYXS886n8dDJZkQJco";
  //const CALENDAR_ID = "ib74prv527n2uvhfle9enchh9g@group.calendar.google.com";
  const API_KEY = "AIzaSyCF5wB9cJEUkLttrqYXS886n8dDJZkQJco";
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

  try {
    const res = await axios.get(url);

    let events = [];

    res.data.items.map((event) => {
      events.push({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary
      });
    });

    console.log(res.data);
    dispatch({
      type: GET_CALENDAREVENTS,
      payload: events
    });
  } catch (err) {
    console.log(err + ":  " + err.message);
    if (err.response) {
      dispatch({
        type: CALENDAREVENT_ERROR,
        payload: { msg: err.response, status: err.response.status }
      });
    }
  }
};
