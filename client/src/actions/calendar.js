import axios from "axios";

// Get calendar events
export const getCalendarEvents = () => async dispatch => {
  const CALENDAR_ID = "tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com";
  const API_KEY = "AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp";
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

  try {
    const res = await axios.get(url);

    let events = [];

    JSON.parse(res.text).items.map(event => {
      events.push({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary
      });
    });
  } catch (err) {
    console.log(err + ": " + err.message);
  }
};
