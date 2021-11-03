// ====================================
//          DEPENDENCIES
// ====================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ====================================
//          CONNECT TO MONGO
// ====================================

//Use MongoAtlas
// const mongoose = require("mongoose");
const nutrition = require("./router/imanRoutes");
const user = require("./router/user");
const weight = require("./router/weightRouter");

// const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("MongoDB database connection established successfully");
// });

const connectDB = require("./models/db");
// const mongoURI = "mongodb://localhost:27017/nutrition";
const mongoURI =
  // "mongodb+srv://alexKoh:CountingBros123@cluster0.8vipm.mongodb.net/Cluster0?retryWrites=true&w=majority";
  // "mongodb+srv://ImanMaliki:CountingBros123@cluster0.8vipm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  "mongodb+srv://WeiHongSoh:CountingBros123@cluster0.8vipm.mongodb.net/Cluster0?retryWrites=true&w=majority";

connectDB();

// const connectDBWeight = require("./models/dbWeight");
// const mongoURI2 = "mongodb://localhost:27017/nutrition/weight";
// connectDBWeight(mongoURI2);

const store = new MongoDBStore({
  uri: mongoURI,
  collection: "currentSessions",
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// ====================================
//              ROUTES
// ====================================

app.use("/nutrition", nutrition);
app.use("/nutrition/weight", weight);
app.use("/nutrition/user", user);

// ====================================
//                 PORT
// ====================================
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`Server is running on Port:${PORT}`);
});
