const axios = require("axios");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Image = require("../../models/Image");

// @route   GET api/calendar
// @desc    get event images
// @access  Private
router.get("/", async (req, res) => {
  try {
    const CALENDAR_ID =
      "littlerockamezion.org_q8n87gmgm6re5mkhhr4gvmj7bs@group.calendar.google.com";
    const API_KEY = "AIzaSyCF5wB9cJEUkLttrqYXS886n8dDJZkQJco";
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    const res = await axios.get(url);

    let events = [];

    console.log(`event data: ${res.text}`);

    JSON.parse(res.text).items.map((event) => {
      events.push({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary
      });
    });

    const calendar = {
      calendar: events
    };

    if (!Array.isArray(events)) {
      return { msg: "no events found" };
    }

    return calendar;
  } catch (err) {
    console.error(err.message);
  }
});

// @route   DELETE api/events/images/:id
// @desc    Delete image by id
// @access  Private
router.delete("/images/:id", auth, async (req, res) => {
  try {
    const image = await Image.findOne({ imageType: "eventImages" });

    if (!image) {
      return res.status(404).json({ msg: "Image model not found" });
    }
    console.log("removing image at postion: " + req.params.id);
    try {
      image.url.splice(req.params.id, 1);
    } catch (err) {
      console.error(err.message);
      return res.status(404).json({ msg: "Image not found by index" });
    }

    await image.save();

    res.status(200).json("Image removed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
