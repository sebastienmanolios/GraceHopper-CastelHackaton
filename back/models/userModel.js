const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 6, max: 200 },
    email: { type: String, required: true, min: 6, max: 200 },
    password: { type: String, required: true, min: 6, max: 200 },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
