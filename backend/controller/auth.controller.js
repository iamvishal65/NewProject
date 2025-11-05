const { 
  registerSchema,
  loginSchema,
} = require("../validators/student.validator");
const { mentorregisterSchema,loginmentorSchema} = require('../validators/mentor.validator');
const { createUser, checkUser } = require("../services/student.services");
const { createToken } = require("../utils/token.util");
const{createMentor,checkMentor}=require('../services/mentor.service')


async function Register(req, res) {
  try {
    const validateUser = registerSchema.safeParse(req.body);
    if (!validateUser.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validateUser.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    const data = validateUser.data;
    const user = await createUser(data);
    if (user.error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("error is:" + error);
    res.status(500).json({ message: error.message });
  }
}

async function Login(req, res) {
  try {
    const validateUser = loginSchema.safeParse(req.body);
    if (!validateUser.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validateUser.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    const data = validateUser.data;

    const user = await checkUser(data);
    if (user.error) {
      return res.status(400).json({ message: user.error });
    }
    const token = createToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User logged in",
    });
  } catch (error) {
    console.error("error is:" + error);
    res.status(500).json({ message: error.message });
  }
}

async function registerMentor(req, res) {
  try {
    const validateUser = mentorregisterSchema.safeParse(req.body);
    if (!validateUser.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validateUser.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    const data = validateUser.data;
    const user = await createMentor(data);
    if (user.error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("error is:" + error);
    res.status(500).json({ message: error.message });
  }
}

async function loginMentor(req,res){ 
  try {
    const validateUser = loginmentorSchema.safeParse(req.body);
    if (!validateUser.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validateUser.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    const data = validateUser.data;

    const user = await checkMentor(data);
    if (user.error) {
      return res.status(400).json({ message: user.error });
    }
    const token = createToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); 
    res.status(201).json({
      message: "User logged in",
    });
  } catch (error) {
    console.error("error is:" + error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { Register, Login, registerMentor,loginMentor};
