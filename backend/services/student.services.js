const studentModel = require("../models/Student.authmodel");
const { hashedPassword } = require("../utils/hashPassword.util");
const { comparePassword } = require("../utils/hashPassword.util");

async function checkEmail(email, enrollment_number) {
  return await studentModel.findOne({
    $or: [{ email }, { enrollment_number }],
  });
}

async function createUser({
  firstName,
  lastName,
  email,
  password,
  enrollment_number,
  admissionYear,
}) {
  const catchDuplicate = await checkEmail(email,enrollment_number);
  if (catchDuplicate) {
    throw new Error("Student already registered");
  }
  const hashPassword = await hashedPassword(password);

  const newStudent = await studentModel.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    enrollment_number,
    admissionYear,
  });
  return newStudent;
}

async function checkUser({ identifier, password }) {
  const query = identifier.includes("@")
    ? { email: identifier }
    : { enrollment_number: identifier };
  const res = await studentModel.findOne(query);
  if (!res) throw new Error("Register first");

  const check = await comparePassword(password, res.password);
  if (!check) throw new Error("wrong password");

  return check;
}

module.exports = { createUser, checkEmail, checkUser };
