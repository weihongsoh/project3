const mongoose = require("mongoose");

const WeightSchema = new mongoose.Schema({
    weight: { type: Number },
    date: { type: Date },
});

const WeightModel = mongoose.model("WeightModel", WeightSchema);

module.exports = WeightModel;
