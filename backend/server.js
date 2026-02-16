require("dotenv").config()
const app=require('./app')
const connectdb=require('./starterFunction/DB')
const adminCheck=require('./starterFunction/adminCheck')

async function startServer() {
  try {
    await connectdb();        
    await adminCheck();       
    app.listen(5000, () => {
      console.log("server is on");
    });
  } catch (err) {
    console.log("error in starting server:", err);
  }
}

startServer();