const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "property" },
  rera_no: { type: String },
  title: { type: String },
  developer: { type: String },
  city: { type: String },
  state: { type: String },
  bhk: [{ type: Number }],
  bhk_no: [{ type: String }],
  pricingmin: { type: Number },
  pricing_max: { type: Number },
  website_property: { type: String },
  possession: { type: Date },
  configuration: { type: String },
  carpet_area: { type: String },
  tower: { type: String },
  floor: { type: String },
  apartment_per_floor: { type: String },
  why: [{ type: Array }],
  other_fet: [{ type: String }],
  amenites: [{ type: String }],
  imgCollection: [{ type: Object }],
  image: [{ type: Object }],
  priceMaxFormated: { type: String },
  priceMinFormated: { type: String },
  project_status: { type: String },
  hot_deal: { type: Boolean },
  views: { type: Number },
  developer_logo: { type: Object },
  property_type: { type: String },
});

module.exports = mongoose.model("properties", PropertySchema);
