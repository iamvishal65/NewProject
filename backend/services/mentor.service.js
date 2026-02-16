const mentorModel=require('../models/Mentor.model,')



async function checkMentor(userId) {
  return await mentorModel.findOne(userId);
}

async function createMentor({
  firstName,
  lastName,
  designation
},userId) {
  const catchDuplicate = await checkMentor({userId});
  if (catchDuplicate) {
    throw new Error("mentor already registered");
  }
  
  const newMentor = await mentorModel.create({
    firstName,
    lastName,
    designation
  });
  return newMentor;
}




module.exports={createMentor,checkMentor}