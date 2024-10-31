const mongoose = require("mongoose");

let wisherSchema = new mongoose.Schema({
  lastUser: {
    type: String,
  },
  currUser: {
    type: String
  }
});

module.exports = mongoose.model("Wisher",wisherSchema);