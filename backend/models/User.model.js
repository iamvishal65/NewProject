const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  roles: {
    type: [String],
    enum: ["user", "student", "mentor", "admin"],
    default: ["user"]
  }
});

const userModel = mongoose.model("userData", userSchema);
module.exports = userModel;