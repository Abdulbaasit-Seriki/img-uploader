const multer = require('multer')
const path = require('path')
const { imageFilter } = require('../utils/helpers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads')
    }
}, 
{
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage, fileFilter: imageFilter })
module.exports = upload