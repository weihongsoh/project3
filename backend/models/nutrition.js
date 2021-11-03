const mongoose = require("mongoose");

const NutritionSchema = new mongoose.Schema({
  name: { type: String },
  calories: { type: Number },
  carbohydrates: { type: Number },
  protein: { type: Number },
  fats: { type: Number },
  weight: { type: Number },
  date: { type: Date },
  mealtype: { type: String },
  user: { type: String },
});

const NutritionModel = mongoose.model("NutritionModel", NutritionSchema);

module.exports = NutritionModel;
