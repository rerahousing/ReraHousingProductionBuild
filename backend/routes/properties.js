const express = require("express");
const router = express.Router();
const Property = require("../models/properties");
const upload = require("../middleware/upload");
const {
  uploadToCloudinary,
  removeFromCloudinary,
} = require("../middleware/cloudinary");

// Route 1 : Get the properties
router.get("/getproperties", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const perPage = parseInt(req.query.perPage) || 10;
    const city = req.query.city ? req.query.city : "";
    const state = req.query.state ? req.query.state : "";
    const search = req.query.search ? req.query.search : "";
    const price = req.query.price ? req.query.price : 100000000;
    const bhk = req.query.bhk ? [1, 2, 3, 4, 5, 6] : [req.query.bhk];
    let amenites = req.query.amenites || "All";
    let propertyType = req.query.propertyType || "All";
    const amenitesOption = [
      "Hosptial",
      "Park",
      "School",
      "Club House",
      "Play Area",
      "Collage",
      "Metro Station",
      "Police Station",
      "Mall",
      "Shopping Mall",
      "Cinema Hall",
    ];

    const propertyTypeOption = [
      "Apartment",
      "Row House / Villa",
      "Independent Floor",
    ];

    propertyType === "All"
      ? (propertyType = [...propertyTypeOption])
      : (propertyType = req.query.propertyType.split(","));

    amenites === "All"
      ? (amenites = [...amenitesOption])
      : (amenites = req.query.amenites.split(","));
    const status =
      req.query.projectStatus == ""
        ? ["Under Construction", "Ready to Move"]
        : [req.query.projectStatus];
    const count = await Property.countDocuments({
      title: { $regex: search, $options: "i" },
      city: { $regex: city, $options: "i" },
      state: { $regex: state, $options: "i" },
      $or: [{ pricing_max: { $lte: price } }, { pricingmin: { $lte: price } }],
      bhk: { $in: bhk },
      project_status: { $in: status },
      amenites: { $in: amenites },
      property_type: { $in: propertyType },
    });
    const property = await Property.find({
      title: { $regex: search, $options: "i" },
      city: { $regex: city, $options: "i" },
      state: { $regex: state, $options: "i" },
      $or: [{ pricing_max: { $lte: price } }, { pricingmin: { $lte: price } }],
      bhk: { $in: bhk },
      project_status: { $in: status },
      amenites: { $in: amenites },
      property_type: { $in: propertyType },
    })
      .skip(page * perPage)
      .limit(perPage);

    res.status(200).json({
      count,
      property,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
      error_message: err.message,
    });
  }
});

// Route 1.5 : Get all the properties -- for dashboard
router.get("/getallproperties", async (req, res) => {
  try {
    const property = await Property.find({});
    res.json(property);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
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
    {
      name: "developer_logo",
    },
  ]),
  // upload.single("image"),
  async (req, res) => {
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
        project_status,
        hot_deal,
        views,
        property_type,
      } = req.body;

      // const data = await uploadToCloudinary(req.files.image[0].path, "image");
      let data2;
      if (req.files.developer_logo) {
        data2 = await uploadToCloudinary(
          req.files.developer_logo[0].path,
          "developer_logo"
        );
      }

      let imageUrlList = [];

      if (req.files.image) {
        for (let i = 0; i < req.files.image.length; i++) {
          let locaFilePath = req.files.image[i].path;
          let result = await uploadToCloudinary(locaFilePath, "image");
          imageUrlList.push(result);
        }
      }

      let imageUrlList2 = [];

      if (req.files.imgCollection) {
        for (let i = 0; i < req.files.imgCollection.length; i++) {
          let locaFilePath2 = req.files.imgCollection[i].path;
          let result = await uploadToCloudinary(locaFilePath2, "imgCollection");
          imageUrlList2.push(result);
        }
      }
      const newProp = new Property({
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
        project_status,
        hot_deal,
        views,
        property_type,
        image: imageUrlList || [],
        developer_logo: data2 || [],
        imgCollection: imageUrlList2 || [],
      });

      const savedProp = await newProp.save();

      res.send(savedProp);
    } catch (error) {
      return res.status(502).json({ error });
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

    await property.image.forEach((item) => {
      removeFromCloudinary(item.public_id);
    });
    await property.imgCollection.forEach((item) => {
      removeFromCloudinary(item.public_id);
    });
    removeFromCloudinary(property.developer_logo.public_id);
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
    Property.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
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
    project_status,
    hot_deal,
    views,
    property_type,
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
  if (project_status) {
    newProp.project_status = project_status;
  }
  if (views) {
    newProp.views = views;
  }
  if (hot_deal) {
    newProp.hot_deal = hot_deal;
  }
  if (property_type) {
    newProp.property_type = property_type;
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
router.patch(
  "/patchproperty/:id",
  upload.fields([
    {
      name: "imgCollection",
    },
    {
      name: "image",
    },
    {
      name: "developer_logo",
    },
  ]),
  async (req, res) => {
    try {
      let property = await Property.findById(req.params.id);
      const newProp = {};
      if (req.body.bhk_no) {
        newProp.bhk_no = req.body.bhk_no;
      }

      if (req.files) {
        if (req.files.image) {
          let image = [];
          if (property.image) {
            await property.image.forEach((item) => {
              if (item.url) {
                removeFromCloudinary(item.public_id);
              }
            });
          }

          for (let i = 0; i < req.files.image.length; i++) {
            let locaFilePath = req.files.image[i].path;
            let result = await uploadToCloudinary(locaFilePath, "image");
            image.push(result);
          }
          newProp.image = image;
        }
        if (req.files.developer_logo) {
          if (property.developer_logo.public_id) {
            await removeFromCloudinary(property.developer_logo.public_id);
          }
          newProp.developer_logo = await uploadToCloudinary(
            req.files.developer_logo[0].path,
            "developer_logo"
          );
        }
        if (req.files.imgCollection) {
          let image = [];
          if (property.imgCollection) {
            await property.imgCollection.forEach((item) => {
              if (item.url) {
                removeFromCloudinary(item.public_id);
              }
            });
          }

          for (let i = 0; i < req.files.imgCollection.length; i++) {
            let locaFilePath = req.files.imgCollection[i].path;
            let result = await uploadToCloudinary(
              locaFilePath,
              "imgCollection"
            );
            image.push(result);
          }
          newProp.imgCollection = image;
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
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
