const express = require("express");
const router = express.Router();
const UserData = require("../models/data");

// get all
router.get("/", async (req, res) => {
  try {
    const users = await UserData.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// create one
router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new UserData({
    habits: req.body.habits,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch("/", (req, res) => {});

// delete one
router.delete("/", (req, res) => {});

module.exports = router;
