const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    targetCalories: { type: Number, min: 0 },
    targetCarbohydrates: { type: Number, min: 0 },
    targetProtein: { type: Number, min: 0 },
    targetFats: { type: Number, min: 0 },
    currentWeight: { type: Number, min: 0 },
    targetWeight: { type: Number, min: 0 },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
