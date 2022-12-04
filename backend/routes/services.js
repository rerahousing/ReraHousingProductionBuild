const express = require("express");
const router = express.Router();
const Services = require("../models/services");
const uploadProfile = require("../middleware/uploadProfile");
const fs = require("fs");

// Route 1 : Get all the services
router.get("/getservices", async (req, res) => {
  const data = await Services.find({});
  res.json(data);
});

// Route 2 : Add a service
router.post(
  "/addservice",
  uploadProfile.single("profile_pic"),
  async (req, res) => {
    try {
      const {
        name,
        services,
        loc_area,
        loc_state,
        loc_city,
        availability,
        facebook_link,
        whatsapp_link,
        instagram_link,
        website_link,
      } = req.body;
      let newService = new Services({
        name,
        services,
        loc_area,
        loc_state,
        loc_city,
        availability,
        facebook_link,
        whatsapp_link,
        instagram_link,
        website_link,
      });
      console.log(req.body);
      if (req.file) {
        let path = "/uploads/profilePics/";
        path = path + req.file.filename;
        newService.profile_pic = path;
      }
      const savedService = await newService.save();
      res.json(savedService);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Something went wrong", message: err.message });
    }
  }
);

// Route 3 : Delete services
router.delete("/deleteservice/:id", async (req, res) => {
  try {
    // Find the note to be deleted
    let service = await Services.findById(req.params.id);
    if (!service) {
      return res.status(404).send("Not Found");
    }

    const path = "../my-app/public/" + service.profile_pic;
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

    service = await Services.findByIdAndDelete(req.params.id);

    res.json({ Success: "Note has been delete", service });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 4 : Edit Services
router.post(
  "/updateservice/:id",
  uploadProfile.single("profile_pic"),
  async (req, res) => {
    const {
      name,
      services,
      loc_area,
      loc_state,
      loc_city,
      availability,
      facebook_link,
      whatsapp_link,
      instagram_link,
      website_link,
    } = req.body;
    console.log(req.body);
    const newService = {};
    if (name) {
      newService.name = name;
    }
    if (services) {
      newService.services = services;
    }
    if (loc_area) {
      newService.loc_area = loc_area;
    }
    if (loc_state) {
      newService.loc_state = loc_state;
    }
    if (loc_city) {
      newService.loc_city = loc_city;
    }
    if (availability) {
      newService.availability = availability;
    }
    if (facebook_link) {
      newService.facebook_link = facebook_link;
    }
    if (whatsapp_link) {
      newService.whatsapp_link = whatsapp_link;
    }
    if (instagram_link) {
      newService.instagram_link = instagram_link;
    }
    if (website_link) {
      newService.website_link = website_link;
    }

    console.log(req.file);
    let service = await Services.findById(req.params.id);
    if (req.file) {
      let path = "/uploads/profilePics/";
      path = path + req.file.filename;
      newService.profile_pic = path;

      if (service.profile_pic) {
        path = "../my-app/public" + service.profile_pic;
        console.log(path);
        fs.stat(path, function (err, stats) {
          console.log(stats); //here we got all information of file in stats variable

          if (err) {
            return console.error(err);
          }

          fs.unlink(path, function (err) {
            if (err) return console.log(err);
          });
        });
      }
    }
    if (!service) {
      return res.status(404).send("Not Found");
    }

    service = await Services.findByIdAndUpdate(
      req.params.id,
      { $set: newService },
      { new: true }
    );

    res.json({ service });
  }
);

module.exports = router;
