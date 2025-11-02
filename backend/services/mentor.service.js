const mentorModel=require('../models/Mentor.model,')
const { hashedPassword } = require("../utils/hashPassword.util");


async function checkEmail(email) {
  return await mentorModel.findOne(email);
}

async function createMentor({
  firstName,
  lastName,
  email,
  password,
  designation
}) {
  const catchDuplicate = await checkEmail({email});
  if (catchDuplicate) {
    throw new Error("mentor already registered");
  }
  const hashPassword = await hashedPassword(password);

  const newMentor = await mentorModel.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    designation
  });
  return newMentor;
}

module.exports={checkEmail,createMentor}