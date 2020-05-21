const mongoose = require("mongoose");
const KeySchema = new mongoose.Schema({
  keyType: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  }
});

module.exports = Key = mongoose.model("keys", KeySchema);
