const mongoose = require("mongoose");
const MONGOURI = "mongodb://127.0.0.1:27017/ReraHousing";

// connecting server to monogoDB using compass
// mongoURI = "MONGO_SERVER/DATABASE_NAME"

const connectMongo = () => {
  mongoose.connect(MONGOURI, () => {
    console.log("Connect to mongo sucessfully");
  });
};

// exporting the function using common js model
module.exports = connectMongo;
