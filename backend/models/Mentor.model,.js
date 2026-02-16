const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userData",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },
});

const mentorModel = mongoose.model("mentorModel", mentorSchema);
module.exports = mentorModel;
