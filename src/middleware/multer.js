const multer = require("multer")
const path = require("path")
const cloudinary = require("../config/cloudinary")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/")
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     )
//   },
// })
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "demo",
    format: async (req, file) => "png", // supports promises as well
    public_id: (req, file) => file.originalname, // Use file's original name as the public id
  },
})
const upload = multer({ storage: storage })
module.exports = {
  upload,
}
