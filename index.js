const express = require("express")
const app = express()
require("dotenv").config()
require("./db")
const PORT = process.env.PORT || 8080
const userRoutes = require("./routes/userRoutes")
const coffeeRoutes = require("./routes/CoffeeRoutes")
const uploadRoutes = require("./routes/uploadMediaRouter")
app.use(express.json())

app.get("/", (req, res) => {
  res.send("products api running new deploy")
})

app.get("/ping", (req, res) => {
  res.send("PONG")
})

// /users
app.use("/users", userRoutes)
app.use("/coffee", coffeeRoutes)
app.use("/uploads", uploadRoutes)

app.listen(8080, () => {
  console.log("Server is listenin on PORT :" + PORT)
})
