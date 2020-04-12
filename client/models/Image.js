const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  imageType: {
    type: String,
    required: true,
    default: "eventImages"
  },
  url: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = Image = mongoose.model("images", ImageSchema);
