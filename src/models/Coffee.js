const mongoose = require("mongoose")
const PriceSchema = new mongoose.Schema({
  size: {
    type: String,
    required: [true, "Size is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  currency: {
    type: String,
    required: [true, "Currency is required"],
    default: "$", // Default currency is USD, adjust as necessary
  },
})
const fileSchema = new mongoose.Schema({
  originalname: { type: String, required: true },
  url: { type: String, required: true },
  mimetype: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
})
const CoffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  roasted: {
    type: String,
    required: true,
  },
  imagelink_square: {
    type: fileSchema,
    required: true,
  },
  imagelink_portrait: {
    type: fileSchema,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  special_ingredient: {
    type: String,
    required: true,
  },
  prices: {
    type: [PriceSchema],
    required: true,
    validate: (v) => Array.isArray(v) && v.length > 0, // Ensure that the prices array is not empty
  },
  average_rating: {
    type: Number,
    required: true,
  },
  ratings_count: {
    type: String,
    required: true,
  },
  favourite: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: String,
})
module.exports = mongoose.model("Coffee", CoffeeSchema)
