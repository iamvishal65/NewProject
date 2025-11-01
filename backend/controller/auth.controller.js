const studentModel=require('../models/Student.authmodel')
const {checkEmail}=require('../utils/finduser.util')
const {registerSchema}=require('../validators/auth.validator')

const jwt=require('jsonwebtoken')

async function Register(req,res) {
    try {
        const user =req.body;
        const validateUser=registerSchema.safeParse(user)
    const catchDuplicate=checkEmail(data)
    if(catchDuplicate){
        return res.status(400).json({messgae:"Student already registerd"})
    }
    const hashedPassword=bcrypt.hash(data.password,10);
    const model=await studentModel.create({})

    } catch (error) {
        
    }
}