const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    userId: String, // reference SQL user id
    type: String,
    payload: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
