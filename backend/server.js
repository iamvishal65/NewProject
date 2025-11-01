const app=require('./app')
require('.env').config()
const connectdb=require('./db/DB')


connectdb()
.then (app.listen(3000,()=>console.log("server is on")))
.catch((err)=>console.log("error in starting server:"+err))
