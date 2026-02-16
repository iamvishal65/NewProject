const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const cors=require('cors');
const auth=require('./routes/auth.route')
const project=require('./routes/projectRoutes')
const github=require('./routes/github.routes')


app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',auth)
app.use('/api/project',project)
app.use('/api/auth',github)


app.get('/',(_,res)=>{
    res.send("Server is running");
});

module.exports=app;