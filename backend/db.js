const mongoose = require("mongoose");

// connecting server to monogoDB using compass
// mongoURI = "MONGO_SERVER/DATABASE_NAME"

const mongoURI = "mongodb://127.0.0.1:27017/ReraHousing";

const connectMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongo sucessfully");
  });
};

// exporting the function using common js model
module.exports = connectMongo;
