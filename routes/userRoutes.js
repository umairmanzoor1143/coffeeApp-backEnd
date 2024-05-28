const { verify } = require("../conrollers/userController")
const router = require("express").Router()

router.post("/login", verify)
module.exports = router
