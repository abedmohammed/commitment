const express = require("express");
const router = express.Router();
const HabitData = require("../models/data");

// get all
router.get("/", async (req, res) => {
  try {
    const habits = await HabitData.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create one
router.post("/", async (req, res) => {
  console.log(req.body);
  const habit = new HabitData({
    habits: req.body.habits,
  });

  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch("/:id", (req, res) => {});

// delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
