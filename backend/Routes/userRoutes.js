const express = require("express")
const { registerUser, loginUser, getUser, getAllUser } = require("../controller/userController")
const { protect } = require("../Middleware/auth")
const router = express.Router()


router.route("/newUser").post(registerUser)
router.route("/loginUser").post(loginUser)
router.route("/getUser").get(protect,getUser)
router.route("/getAllUser").get(getAllUser)


module.exports=router