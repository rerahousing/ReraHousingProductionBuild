const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const JWT_SECRET = "rera$housing$.in";

// Route 1:  Create a admin using post "/api/auth/createadmin". Doesn't require Auth
router.post(
  "/signup",
  [
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check weather admin with this username exist already.

    try {
      let admin = await Admin.findOne({ username: req.body.username });
      if (admin) {
        return res
          .status(400)
          .json({ error: "Sorry a admin with this username already exists" });
      }
      // Create a salt and adding it to password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      admin = await Admin.create({
        username: req.body.username,
        password: secPass,
      });

      const data = {
        admin: {
          id: admin.id,
        },
      };
      // jwt.sign is a sync method --> means that it does not require async and await function
      // Signing the data using jwt
      const authToken = jwt.sign(data, JWT_SECRET);

      // .then((user) => res.json(user))
      // .catch((err) => {
      //   console.log(err);
      //   res.json({
      //     error: "Please Enter a unique value for email",
      //   });
      // });

      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Route 2: Authenticate a Admin using POST : "/api/admin/login" - No login required
router.post(
  "/login",
  body("password", "Password cannot be blank").exists(),
  async (req, res) => {
    console.log(req.body.password);
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let admin = await Admin.findOne({ username: username });
      if (!admin) {
        return res
          .status(400)
          .json({ errors: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please login with correct credentials" });
      }

      const data = {
        admin: {
          id: admin.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken, message: "success" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
