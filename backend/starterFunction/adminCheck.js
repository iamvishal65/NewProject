const userModel=require('../models/User.model')
const { hashPassword } = require("../utils/hashPassword.util");


async function adminCheck(){
  try {
    const confirmAdmin=await userModel.findOne({ roles: ["admin"] });
    if(confirmAdmin) {
        console.log("admin is there");
        return;
    }
    
    const passwordHash=await hashPassword(process.env.ADMIN_PASSWORD);
    await userModel.create({
        email:process.env.ADMIN_EMAIL,
        password:passwordHash,
        roles:["admin"]
    })
    console.log("Admin user seeded successfully");
    
  } catch (error) {
    console.log(error);
  }
}
module.exports=adminCheck;