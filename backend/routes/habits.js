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

// get one habit
router.get('/:id', getHabit, async (req, res) => {
  res.send(res.habit)
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
router.delete("/:id", getHabit, async (req, res) => {
  try {
    await res.habit.deleteOne()
    res.json({ message: 'Deleted habit'})
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// add an entry
router.patch("/:id/addEntry", (req, res) => {})

async function getHabit(req, res, next) {
  let habit
  try {
    habit = await HabitData.findById(req.params.id)
    if (habit == null) {
      return res.status(404).json({ message: "Cannot find habit" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.habit = habit
  next()
}

module.exports = router;
