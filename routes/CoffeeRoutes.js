const router = require("express").Router()
const { uploadCoffee, getAllCoffee } = require("../conrollers/CoffeeController")
router.post("/", uploadCoffee)
router.get("/", getAllCoffee)
module.exports = router
