const mongoose=require('mongoose');


const mentorSchema=new mongoose.Schema({
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
    designation:{
        type:String,
        required:true
    },
    visibility:{
        type:String,
        enum:[private,public],
        default:public
    }
})

const mentorModel=mongoose.model("mentorModel",mentorSchema);
module.exports=mentorModel;