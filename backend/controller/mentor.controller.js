const MentorApplication = require("../models/mentorApplication.model");
const { checkMentor } = require("../services/mentor.service");
const { mentorregisterSchema } = require("../validators/mentor.validator");
async function applyForMentor(req, res) {
  const userId = req.user.id;

  const existing = await MentorApplication.findOne({ userId });
  if (existing) {
    return res.status(400).json({ message: "Already applied" });
  }

  await MentorApplication.create({ userId });

  res.json({ message: "Mentor application submitted" });
}

async function newMentor(req, res) {
  try {
    const validateUser = mentorregisterSchema.safeParse(req.body);
    if (!validateUser.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validateUser.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
          success: false,
        })),
      });
    }
    const data = validateUser.data;
    const userId = req.token.id;
    const newMentor=checkMentor(data,userId);
    if (newMentor.error) {
      return res.status(400).json({ message: error.message, success: false });
    }
    
    res.status(201).json({
      success: true,
      message: "mentor registered successfully",
    });
  } catch (error) {
    console.error("error is:" + error);
    res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = { applyForMentor ,newMentor};
