// routes/weight
const express = require("express");
const router = express.Router();

// Load weight
const currentWeight = require("../models/weighttracker");

// @route GET nutrition/weight/test
router.get("/test", (req, res) => {
  res.send("todo list item route testing!");
});

// @route GET nutrition/weight/
// @description Get all nutrition item
router.get("/all", async (req, res) => {
  try {
    const allWeight = await currentWeight.find();
    res.json(allWeight);
  } catch (e) {
    res.status(404).json({ noWeightFound: e });
  }
});

// @route GET /nutrition/weight/:id
// @description Get single todoitem by id
router.get("/:id", (req, res) => {
  currentWeight
    .findById(req.params.id)
    .then((weight) => res.json(weight))
    .catch((err) => res.status(404).json({ noLogFound: "No weight found" }));
});

// @route GET /nutrition?
// @route POST /nutrition/weight
// @description create/add/save todo item
// @access Public
router.post("/", (req, res) => {
  currentWeight
    .create(req.body)
    .then((log) => res.json({ msg: "weight added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to log weight" }));
});

module.exports = router;