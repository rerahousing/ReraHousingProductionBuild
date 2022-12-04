const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "service" },
  name: { type: String },
  mobile: { type: Number },
  email: { type: String },
  project_name: { type: String },
  project_city: { type: String },
  project_state: { type: String },
  budget: { type: String },
  remarks: { type: String },
});

module.exports = mongoose.model("contact", ContactSchema);
