const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  team: { type: String, required: true },
  app: { type: String, required: true },
  manager: { type: String, required: true },
  location: { type: String, required: true },
  company: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
