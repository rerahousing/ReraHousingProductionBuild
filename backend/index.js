const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const connectMongo = require("./db");
var cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());

app.use("/api/properties", require("./routes/properties"));
app.use("/api/services", require("./routes/services"));
app.use("/api/contacts", require("./routes/contact"));
app.use("/api/admin", require("./routes/admin"));

if (NODE_ENV == "production") {
  const path = require("path");

  app.use(express.static(path.join(__dirname, "../my-app", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../my-app", "build", "index.html")),
      function (err) {
        if (err) {
          res.status(500).send({
            err,
          });
        }
      };
  });
} else {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.join(__dirname, "../my-app", "build")));
    res.sendFile(path.join(__dirname, "../my-app", "build", "index.html")),
      function (err) {
        if (err) {
          res.status(500).send({
            err,
          });
        }
      };
  });
}

app.listen(port, () => {
  console.log(`App listning on port ${port}`);
});

connectMongo();
