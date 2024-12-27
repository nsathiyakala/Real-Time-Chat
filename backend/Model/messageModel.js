const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required:true
    }
}, {timestamps: true})


const messageModel = mongoose.model("Message", messageSchema)
module.exports = messageModel
