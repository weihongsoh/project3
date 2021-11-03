const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://alexKoh:CountingBros123@cluster0.8vipm.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected (MongoAtlas)");
  } catch (err) {
    console.log(err, "MongoDB Connection Error");
    process.exit(1);
  }
};

module.exports = connectDB;
