const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/nutrition";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
