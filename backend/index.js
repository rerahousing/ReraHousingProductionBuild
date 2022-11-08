const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const connectMongo = require("./db");
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

app.use("/api/properties", require("./routes/properties"));
// app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listning on port ${port}`);
});

connectMongo();
