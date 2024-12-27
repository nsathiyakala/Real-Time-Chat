const chatModel = require("../Model/chatModel")



// creating new Chat - create chat object - /api/chat/createChat

exports.createChat = async (req,res) =>{
    const {secondId}=req.body

     // logged-in user's id
    const firstId = req.user._id

    try {

        if(!firstId || !secondId){
            return res.status(400).json({
                status: false,
                message:"User not found"
            })
        }
    
        const chat = await chatModel.findOne({
            members:{$all: [firstId, secondId]}
        })

        if(chat){
            return res.status(200).json({
                status: true,
                message:"Chat already exist",
                data:chat
            })
        }
        const newChat = await chatModel.create({
            members:[firstId, secondId]
        })
        return res.status(200).json({
            status: true,
            message:"Chat created",
            data:newChat
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message:error
        })
    }

}


// to display all the users chats - /api/chat/userChats

exports.getUserChat = async (req,res) =>{
    try {
        // logged-in user's id
        const userId = req.user._id

        const UserChat = await chatModel.find({
            members:{$in:[userId]}
        })
        return res.status(200).json({
            status: true,
            message:"Chat fetched",
            data:UserChat
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message:error
        })
    }   

}  


// to get and display the single chat that user wants to chat - /api/chat/getsingleChat/6763c662a77e3e746fee893c

exports.getSingleChat = async (req, res) =>{
    try {
        const firstId = req.user._id
        const secondId = req.params.secondId

        if(!secondId){
            return res.status(400).json({
                status: false,
                message:"User not found"
            })
        }

        const chat = await chatModel.findOne({
            members:{$all:[firstId, secondId]}
        })

        if(!chat){
            return res.status(400).json({
                status: false,
                message:"Chat not found"
            })
        }

        return res.status(200).json({
            status: true,
            message:"Chat fetched",
            data:chat
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message:error
        })
    }

}