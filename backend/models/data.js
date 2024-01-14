const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const settingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  unitType: {
    type: String,
    default: "",
  },
  colour: {
    type: String,
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
});

const habitSchema = new mongoose.Schema({
  settings: {
    type: settingsSchema,
    required: true,
  },
  entries: {
    type: [entrySchema],
    required: true,
  },
});

const dataSchema = new mongoose.Schema({
  habits: {
    type: [habitSchema],
    required: true,
  },
});

module.exports = mongoose.model("UserData", dataSchema);
