const Coffee = require("../models/Coffee")
async function uploadCoffee(req, res) {
  const { body } = req
  Coffee.insertMany(body)
    .then(() => res.status(201).send("All coffee data uploaded successfully"))
    .catch((err) => res.status(400).send(err))
  // coffee
  //   .save()
  //   .then(() => res.status(201).send("Coffee data uploaded successfully"))
  //   .catch((err) => res.status(400).send(err))
}
async function getAllCoffee(req, res) {
  try {
    const data = await Coffee.find()
    res.send(data)
  } catch (err) {
    res.status(400).send(err)
  }
}
module.exports = {
  uploadCoffee,
  getAllCoffee,
}
