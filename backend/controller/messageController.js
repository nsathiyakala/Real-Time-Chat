const messageModel = require('../models/messageModel');
const userModel = require('../models/userModel');
const chatModel = require('../models/chatModel');

exports.createTextMessage = async (req, res) => {
    const {text,chatId} = req.body
    const senderId = req.user._id
    try {
        
        if(!text){
            return res.status(400).json({
                status: false,
                message:"Text is required"
            })
        }

        const textMessage = await messageModel.create({
            senderId,
            text,
            chatId
        })

        if
    } catch (error) {
        
    }
}