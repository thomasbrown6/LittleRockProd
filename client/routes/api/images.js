const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Image = require("../../models/Image");

// @route   POST api/events/images
// @desc    Upload a event image
// @access  Private
router.post("/images", auth, async (req, res) => {
  try {
    let image = await Image.findOne({ imageType: "eventImages" });

    if (image.url === null) {
      image = new Image({ url: [] });
      console.log("image is null");
    }

    let urls = image.url;

    urls.unshift(req.body.url);

    await image.save();

    return res.status(200).json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/events/images
// @desc    get event images
// @access  Private
router.get("/images", async (req, res) => {
  try {
    let image = await Image.findOne({ imageType: "eventImages" });

    if (!image) {
      return res.status(404).json({ msg: "no images found" });
    }

    return res.status(200).json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
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
