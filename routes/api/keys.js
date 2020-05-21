const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Key = require("../../models/Key");

// @route   POST api/keys/livestream
// @desc    Upload a livestream key
// @access  Private
router.post("/livestream", auth, async (req, res) => {
  try {
    let key = await Key.findOne({ keyType: "livestream" });

    if (key && key.data) {
      await Key.findByIdAndDelete(key._id);
    }

    key = new Key({ keyType: "livestream", data: req.body.data });

    await key.save();

    return res.status(200).json(key.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/keys/livestream
// @desc    get event images
// @access  Private
router.get("/livestream", async (req, res) => {
  try {
    let key = await Key.findOne({ keyType: "livestream" });

    if (!key) {
      return res.status(404).json({ msg: "no key found" });
    }

    return res.status(200).json(key.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
