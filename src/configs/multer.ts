import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dest = path.join(__dirname, "..", "..", "tmp", "uploads")
        cb(null, dest)
    },
    filename: async function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    },
})

const upload = multer({
    storage: storage,
    limits: {
        fieldNameSize: 100,
    },
})

export { upload }
