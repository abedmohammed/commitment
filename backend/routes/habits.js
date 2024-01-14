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
router.patch('/:id', getHabit, async (req, res) => {
  if (req.body.title != null) {
    res.habit.settings.title = req.body.title    
  }
  if (req.body.unitType != null) {
    res.habit.settings.unitType = req.body.unitType
  }
  if (req.body.colour != null) {
    res.habit.settings.colour = req.body.colour
  }
  try {
    const updatedHabit = await res.habit.save()
    res.json(updatedHabit)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// delete a habit
router.delete("/:id", getHabit, async (req, res) => {
  try {
    await res.habit.deleteOne()
    res.json({ message: 'Deleted habit'})
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// add an entry
router.patch("/:id/addEntry", getHabit, async (req, res) => {
  // appending entry to entries list
  entry = {
    "day": req.body.day,
    "value": req.body.value
  }
  entriesUpdate = res.habit.entries
  entriesUpdate.push(entry)
  res.habit.entries = entriesUpdate

  // calculating streak and updating as necessary
  let count = 1
  for (i = res.habit.entries.length - 1; i > 0; i--) {
    if (res.habit.entries[i].day - 1 == res.habit.entries[i - 1].day) {
      count += 1
    } else {
      break
    }
  }
  res.habit.settings.streak = count

  // re-calculating average value
  let sum = 0
  for (i = 0; i < res.habit.entries.length; i++) {
    sum += Number(res.habit.entries[i].value)
  }
  res.habit.settings.average = sum / res.habit.entries.length

  try {
    const updatedHabit = await res.habit.save()
    res.json(updatedHabit)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

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
