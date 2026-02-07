const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  enrollment_number: {
    type: String,
    required: true,
    unique: true,
  },
  admissionYear: {
    type: Number,
    required: true,
  },
  github: {
    connected: { type: Boolean , default: false },
    accessTokenEnc: String,
    iv: String,
    authTag: String,
    connectedAt: Date
  },
});

const studentModel = mongoose.model("personalData", studentSchema);
module.exports = studentModel;
