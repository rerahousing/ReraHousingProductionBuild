const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const fs = require("fs");
const upload = require("../middleware/upload");

// Route 1 : Get all the contact
router.get("/getcontact", async (req, res) => {
  const data = await Contact.find({});
  res.json(data);
});

// Route 2 : Add a contact
router.post("/addcontact", upload.none(), async (req, res) => {
  try {
    const {
      name,
      mobile,
      email,
      project_name,
      project_city,
      project_state,
      budget,
      remarks,
    } = req.body;
    let newContact = new Contact({
      name,
      mobile,
      email,
      project_name,
      project_city,
      project_state,
      budget,
      remarks,
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong", message: err.message });
  }
});

// Route 3 : Delete contact
router.delete("/deletecontact/:id", async (req, res) => {
  try {
    // Find the note to be deleted
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send("Not Found");
    }

    contact = await Contact.findByIdAndDelete(req.params.id);

    res.json({ Success: "Note has been delete", contact });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 4 : Updating a contact
router.post("/updatecontact/:id", upload.none(), async (req, res) => {
  const {
    name,
    mobile,
    email,
    project_name,
    project_city,
    project_state,
    budget,
    remarks,
  } = req.body;
  const newContact = {};
  if (name) {
    newContact.name = name;
  }
  if (mobile) {
    newContact.mobile = mobile;
  }
  if (email) {
    newContact.email = email;
  }
  if (project_name) {
    newContact.project_name = project_name;
  }
  if (project_city) {
    newContact.project_city = project_city;
  }
  if (project_state) {
    newContact.project_state = project_state;
  }
  if (remarks) {
    newContact.remarks = remarks;
  }
  if (budget) {
    newContact.budget = budget;
  }
  console.log(req);

  let contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).send("Not Found");
  }

  contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { $set: newContact },
    { new: true }
  );

  res.json({ contact });
});

module.exports = router;
