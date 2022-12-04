const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("admin", AdminSchema);
