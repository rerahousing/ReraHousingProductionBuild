const express = require("express");
const router = express.Router();
const Property = require("../models/properties");
const multer = require("multer");
const upload = require("../middleware/upload");

// Route 1 : Get all the properties
router.get("/getproperties", async (req, res) => {
  const data = await Property.find({});
  res.json(data);
});

// Route 2 : Add a property
router.post("/addproperty", upload.array("imgCollection"), async (req, res) => {
  console.log(req.files);
  try {
    const {
      rera_no,
      title,
      developer,
      city,
      state,
      bhk,
      bhk_no,
      pricingmin,
      pricing_max,
      website_property,
      possession,
      configuration,
      carpet_area,
      tower,
      floor,
      apartment_per_floor,
      why,
      other_fet,
      amenites,
    } = req.body;
    let newProp = new Property({
      rera_no,
      title,
      developer,
      city,
      state,
      bhk,
      bhk_no,
      pricingmin,
      pricing_max,
      website_property,
      possession,
      configuration,
      carpet_area,
      tower,
      floor,
      apartment_per_floor,
      why,
      other_fet,
      amenites,
    });

    if (req.files) {
      let path = "";
      req.files.forEach(function (files, index, arr) {
        path = path + files.path;
        newProp.imgCollection.push(path);
      });
    }

    const savedProp = await newProp.save();
    res.json(savedProp);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong", message: err.message });
  }
});

// Route 3 : Delete Property
router.delete("/deleteproperty/:id", async (req, res) => {
  try {
    // Find the note to be deleted
    let property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Not Found");
    }
    property = await Property.findByIdAndDelete(req.params.id);

    res.json({ Success: "Note has been delete", property });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 4 : Getting specific propert data
router.get("/getproperty/:id", async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Not Found", err);
    }
    res.json(property);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 5 : Updating a property
router.put("/updateproperty/:id", async (req, res) => {
  const {
    rera_no,
    title,
    developer,
    city,
    state,
    bhk,
    bhk_no,
    pricingmin,
    pricing_max,
    website_property,
    possession,
    configuration,
    carpet_area,
    tower,
    floor,
    apartment_per_floor,
    why,
    other_fet,
    amenites,
  } = req.body;
  const newProp = {};
  if (rera_no) {
    newProp.rera_no = rera_no;
  }
  if (title) {
    newProp.title = title;
  }
  if (developer) {
    newProp.developer = developer;
  }
  if (state) {
    newProp.city = state;
  }
  if (bhk) {
    newProp.bhk = bhk;
  }
  if (bhk_no) {
    newProp.bhk_no = bhk_no;
  }
  if (city) {
    newProp.city = city;
  }
  if (pricingmin) {
    newProp.pricingmin = pricingmin;
  }
  if (pricing_max) {
    newProp.pricing_max = pricing_max;
  }
  if (website_property) {
    newProp.website_property = website_property;
  }
  if (possession) {
    newProp.possession = possession;
  }
  if (configuration) {
    newProp.configuration = configuration;
  }
  if (carpet_area) {
    newProp.carpet_area = carpet_area;
  }
  if (tower) {
    newProp.tower = tower;
  }
  if (floor) {
    newProp.floor = floor;
  }
  if (apartment_per_floor) {
    newProp.apartment_per_floor = apartment_per_floor;
  }
  if (why) {
    newProp.why = why;
  }
  if (other_fet) {
    newProp.other_fet = other_fet;
  }
  if (amenites) {
    newProp.amenites = amenites;
  }

  let property = await Property.findById(req.params.id);
  if (!property) {
    return res.status(404).send("Not Found");
  }

  property = await Property.findByIdAndUpdate(
    req.params.id,
    { $set: newProp },
    { new: true }
  );

  res.json({ property });
});

// Route 6: Upload Image

module.exports = router;
