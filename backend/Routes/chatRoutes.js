const express = require("express")
const { protect } = require("../Middleware/auth")
const { createChat, getUserChat, getSingleChat } = require("../controller/chatController")
const router = express.Router()


router.route("/createChat").post(protect,createChat)
router.route("/userChats").get(protect,getUserChat)
router.route("/getsingleChat/:secondId").get(protect,getSingleChat)



module.exports=router