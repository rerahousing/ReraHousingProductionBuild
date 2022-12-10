const mongoose = require("mongoose");
const { MONGOURI } = require("./config/keys");

// connecting server to monogoDB using compass
// mongoURI = "MONGO_SERVER/DATABASE_NAME"

const connectMongo = () => {
  mongoose.connect(MONGOURI, () => {
    console.log("Connect to mongo sucessfully");
  });
};

// exporting the function using common js model
module.exports = connectMongo;
