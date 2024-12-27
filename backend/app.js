const express = require('express')
const app = express()
const dotenv= require("dotenv")
const path = require('path')
const env = require("process")
const cors = require('cors')
dotenv.config({path:path.join(__dirname,"config","config.env")})
app.use(express.json())
app.use(cors())

const connectdatabase=require('./config/connectDatabase')
connectdatabase()

const UserRouter= require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')
app.use("/api/users",UserRouter)
app.use("/api/chats", chatRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server listening to ${process.env.PORT}`);
    
})