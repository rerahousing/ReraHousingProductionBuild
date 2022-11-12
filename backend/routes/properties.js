const express = require("express");
const router = express.Router();
const Property = require("../models/properties");
const multer = require("multer");
const upload = require("../middleware/upload");
const fs = require("fs");

// Route 1 : Get all the properties
router.get("/getproperties", async (req, res) => {
  const data = await Property.find({});
  res.json(data);
});

// Route 2 : Add a property
router.post(
  "/addproperty",
  upload.fields([
    {
      name: "imgCollection",
    },
    {
      name: "image",
    },
  ]),

  async (req, res) => {
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
        priceMaxFormated,
        priceMinFormated,
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
        priceMaxFormated,
        priceMinFormated,
      });
      console.log(req.files);
      if (req.files) {
        if (req.files.imgCollection) {
          req.files.imgCollection.forEach(function (files, index, arr) {
            let path = "/uploads/";
            path = path + files.filename;
            newProp.imgCollection.push(path);
          });
        }

        if (req.files.image) {
          req.files.image.forEach(function (files, index, arr) {
            let path = "/uploads/";
            path = path + files.filename;
            newProp.image.push(path);
          });
        }
      }

      const savedProp = await newProp.save();
      res.json(savedProp);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Something went wrong", message: err.message });
    }
  }
);

// Route 3 : Delete Property
router.delete("/deleteproperty/:id", async (req, res) => {
  try {
    // Find the note to be deleted
    let property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Not Found");
    }
    property.imgCollection?.forEach((item) => {
      const path = "../my-app/public" + item;
      fs.stat(path, function (err, stats) {
        console.log(stats); //here we got all information of file in stats variable

        if (err) {
          return console.error(err);
        }

        fs.unlink(path, function (err) {
          if (err) return console.log(err);
          console.log("file deleted successfully");
        });
      });
    });
    property.image?.forEach((item) => {
      const path = "../my-app/public" + item;
      fs.stat(path, function (err, stats) {
        console.log(stats); //here we got all information of file in stats variable

        if (err) {
          return console.error(err);
        }

        fs.unlink(path, function (err) {
          if (err) return console.log(err);
        });
      });
    });
    property = await Property.findByIdAndDelete(req.params.id);

    res.json({ Success: "Note has been delete", property });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 4 : Getting specific propert data
router.get(
  "/getproperty/:id",

  async (req, res) => {
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
  }
);

// Route 5 : Updating a property
router.post("/updateproperty/:id", upload.none(), async (req, res) => {
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
    priceMaxFormated,
    priceMinFormated,
  } = req.body;
  console.log(req);
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
    newProp.state = state;
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
  if (priceMaxFormated) {
    newProp.priceMaxFormated = priceMaxFormated;
  }
  if (priceMinFormated) {
    newProp.priceMinFormated = priceMinFormated;
  }

  // console.log(req.body.image);
  // if (req.files) {
  //   if (req.files.imgCollection) {
  //     req.files.imgCollection.forEach(function (files, index, arr) {
  //       let path = "";
  //       path = path + files.path;
  //       newProp.imgCollection.push(path);
  //       path = "";
  //     });
  //   }

  //   if (req.files.image) {
  //     req.files.image.forEach(function (files, index, arr) {
  //       let path = "";
  //       path = path + files.path;
  //       newProp.image.push(path);
  //     });
  //   }
  // }

  // if (req.files) {
  //   if (req.files.imgCollection) {
  //     req.files.imgCollection.forEach(function (files, index, arr) {
  //       let path = "/uploads/";
  //       path = path + files.filename;
  //       newProp.imgCollection.push(path);
  //     });
  //   }

  //   if (req.files.image) {
  //     req.files.image.forEach(function (files, index, arr) {
  //       let path = "/uploads/";
  //       path = path + files.filename;
  //       newProp.image.push(path);
  //     });
  //   }
  // }
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
router.patch(
  "/patchproperty/:id",
  upload.fields([
    {
      name: "imgCollection",
    },
    {
      name: "image",
    },
  ]),
  async (req, res) => {
    console.log(req);
    let property = await Property.findById(req.params.id);
    const newProp = { image: [], imgCollection: [] };
    if (req.body.bhk_no) {
      newProp.bhk_no = req.body.bhk_no;
    }
    if (req.files) {
      if (req.files.imgCollection) {
        req.files.imgCollection.forEach(function (files, index, arr) {
          let path = "/uploads/";
          path = path + files.filename;
          newProp.imgCollection.push(path);
        });

        property.imgCollection?.forEach((item) => {
          const path = "../my-app/public" + item;
          fs.stat(path, function (err, stats) {
            console.log(stats); //here we got all information of file in stats variable

            if (err) {
              return console.error(err);
            }

            fs.unlink(path, function (err) {
              if (err) return console.log(err);
            });
          });
        });
      }
      if (!req.files.imgCollection) {
        property.imgCollection.forEach((item) => {
          newProp.imgCollection.push(item);
        });
      }
      if (!req.files.image) {
        property.image.forEach((item) => {
          newProp.image.push(item);
        });
      }
      if (req.files.image) {
        req.files.image.forEach(function (files, index, arr) {
          let path = "/uploads/";
          path = path + files.filename;
          newProp.image.push(path);
        });

        property.image?.forEach((item) => {
          const path = "../my-app/public" + item;
          fs.stat(path, function (err, stats) {
            console.log(stats); //here we got all information of file in stats variable

            if (err) {
              return console.error(err);
            }

            fs.unlink(path, function (err) {
              if (err) return console.log(err);
            });
          });
        });
      }
    }

    if (!property) {
      return res.status(404).send("Not Found");
    }

    property = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: newProp },
      { new: true }
    );

    res.json({ property });
  }
);

module.exports = router;
