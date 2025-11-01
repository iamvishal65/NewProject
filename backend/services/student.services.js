const studentModel=require('../models/Student.authmodel');
const{hashedPassword}=require('../utils/hashPassword.util')


function checkEmail(email,enrollment_number){
    return studentModel.findOne(email||enrollment_number);
}

async function createUser({firstName,lastName,email,password,enrollment_number,admissionYear}){
    const catchDuplicate = checkEmail(email,enrollment_number);
    if (catchDuplicate) {
      return res.status(400).json({ messgae: "Student already registerd" });
    }

    const hashPassword=hashedPassword(password);

    const newStudent=await studentModel.create({firstName,lastName,email,password:hashPassword,enrollment_number,admissionYear})
}

module.exports={createUser,checkEmail};