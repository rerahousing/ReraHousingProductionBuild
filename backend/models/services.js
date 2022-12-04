const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "service" },
  name: { type: String },
  services: [{ type: String }],
  loc_area: { type: String },
  loc_state: { type: String },
  loc_city: { type: String },
  availability: { type: String },
  facebook_link: { type: String },
  whatsapp_link: { type: String },
  instagram_link: { type: String },
  website_link: { type: String },
  profile_pic: { type: String },
});

module.exports = mongoose.model("services", ServiceSchema);
