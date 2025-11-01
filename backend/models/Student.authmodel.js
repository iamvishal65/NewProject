const mongoose=require('mongoose');

const studentSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    enrollment_number:{
        type:String,
        required:true,
        unique:true
    },
    Admission_year:{
        type:Number,
        required:true
    }
})

const studentModel=mongoose.model("personalData",studentSchema);
module.exports=studentModel;