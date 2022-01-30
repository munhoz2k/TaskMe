import multer from "multer"
import path from "path"
import { uuid } from 'uuidv4'

const multerUpload = multer({
    storage: multer.diskStorage({

        destination: path.join(__dirname, '..', '..', 'tmp', 'uploads'),

        filename(req, file, callback) {
            const fileName = `${uuid()}-${file.originalname}`

            return callback(null, fileName)
        },

    }),

})

export { multerUpload }