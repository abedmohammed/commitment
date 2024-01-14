const express = require("express");
const router = express.Router();
const HabitData = require("../models/habitData")

// get all habits
router.get('/', async (req, res) => {
  try {
    const habits = await HabitData.find()
    res.json(habits)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// create a habit
router.post('/', async (req, res) => {
  const habit = new HabitData({
    settings: req.body.settings,
    entries: req.body.entries
  });

  try {
    const newHabit = await habit.save()
    res.status(201).json(newHabit)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// update a habit
router.patch('/:id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// delete a habit
router.delete("/:id", (req, res) => {});

// add an entry
router.patch("/:id/addEntry", (req, res) => {})

async function getHabit(req, res, next) {
  try {
    data = await HabitData.find()
    let habits = data[0].habits
    for (let i = 0; i < habits.length; i++) {
     if (input_title == habits[i].settings.title) {
        
      }
    }
  } catch {
    return null
  }
}

module.exports = router;
