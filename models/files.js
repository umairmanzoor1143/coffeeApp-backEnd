const mongoose = require("mongoose")

const FileSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Files", FileSchema)
