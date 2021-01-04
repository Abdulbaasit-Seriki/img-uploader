const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = require('./config/multer')
const { displayError } = require('./utils/helpers')

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello'))

app.post('/upload', upload.single('image'), (req, res) => {
    
        console.log(req.file)
        if (req.fileValidationError) {
            return displayError(res, 401, req.fileValidationError)
        }
        else if (!req.file) {
            return displayError(res, 404, 'Please select an image to upload')
        }
        

        res.status(200).json({
            success: true,
            data: req.file.path
        })
        // res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))