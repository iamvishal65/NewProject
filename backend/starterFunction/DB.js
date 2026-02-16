const mongoose=require("mongoose");

module.exports =async function dbConnect (){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
        
    } catch (err) {
        console.error("error in connecting to db is:"+err);
    }
}