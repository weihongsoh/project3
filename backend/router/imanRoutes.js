// routes/nutrition

const express = require("express");
const router = express.Router();

// Load todo model
const itemNutrition = require("../models/nutrition");

// @route GET nutrition/test
router.get("/test", (req, res) => {
  res.send("todo list item route testing!");
});

// @route GET nutrition
// @description Get all nutrition item
router.get("/", async (req, res) => {
  try {
    const allNutritionItem = await itemNutrition.find();
    res.json(allNutritionItem);
  } catch (e) {
    res.status(404).json({ noNutritionfound: e });
  }
});

// @route GET /nutrition/:id
// @description Get single todoitem by id
router.get("/:id", (req, res) => {
  itemNutrition
    .findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noLogFound: "No item found" }));
});

// @route GET /nutrition?
// @route POST /nutrition
// @description create/add/save todo item
// @access Public
router.post("/", (req, res) => {
  itemNutrition
    .create(req.body)
    .then((log) => res.json({ msg: "log added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to log this item" }));
});

// @route GET api/books/:id
// @description Edit and Update
// @access Public
router.put("/:id", (req, res) => {
  itemNutrition
    .findByIdAndUpdate(req.params.id, req.body)
    .then((log) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET nutrition/:id
// @description Delete item log by id
// @access Public

router.delete("/:id", (req, res) => {
  itemNutrition
    .findByIdAndRemove(req.params.id, req.body)
    .then((log) => res.json({ mgs: "item log deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a item" }));
});

// @route GET /nutrition/:date
// @description Get single todoitem by date
// router.get("/getDate/:date", (req, res) => {
//   itemNutrition
//     .find(req.params.id)
//     .then((item) => res.json(item))
//     .catch((err) => res.status(404).json({ noLogFound: "No item found" }));
// });

module.exports = router;
