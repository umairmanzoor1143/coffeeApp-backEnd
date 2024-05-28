const fs = require("fs")
const Files = require("../models/files")
const router = require("express").Router()
const { upload } = require("../middleware/multer")

router.post("/", upload.array("files"), async (req, res) => {
  try {
    const fileDocs = await Promise.all(
      req.files?.map((file) => {
        return {
          originalname: file.originalname,
          url: file.path,
          mimetype: file.mimetype,
          path: file.path,
          size: file.size,
        }
      })
    )
    const result = await Files.insertMany(fileDocs)
    res.json({ message: "File uploaded successfully", data: result })
  } catch (error) {
    console.error("Error uploading files: ", error)
    res.status(500).send("Error uploading files")
  }
})

module.exports = router
