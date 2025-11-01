const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const cors=require('cors');

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:process.env.CLIENT_URl,
    credentials:true
}))

app.get('/',(_,res)=>{
    res.send("Server is running");
});

module.exports-app;