const mongoose = require("mongoose");

const mentorApplicationSchema = new mongoose.Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userData",
        required: true,
        unique:true
      },
    status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  },
  nextEligibleAt: {
    type:Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("MentorApplication", mentorApplicationSchema);