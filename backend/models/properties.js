const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "property" },
  rera_no: { type: Number },
  title: { type: String },
  developer: { type: String },
  city: { type: String },
  state: { type: String },
  bhk: [{ type: String }],
  bhk_no: [
    // {
    //   bhk: { type: String },
    //   Price: { type: String },
    //   Area: { type: String },
    // },
    { type: String },
  ],
  pricingmin: { type: String },
  pricing_max: { type: String },
  website_property: { type: String },
  possession: { type: String },
  configuration: { type: String },
  carpet_area: { type: String },
  tower: { type: String },
  floor: { type: String },
  apartment_per_floor: { type: String },
  why: [{ type: Array }],
  other_fet: [{ type: String }],
  amenites: [{ type: String }],
  imgCollection: [{ type: String }],
  image: [{ type: String }],
});

module.exports = mongoose.model("properties", PropertySchema);
