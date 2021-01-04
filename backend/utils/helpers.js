exports.displayError = (res, code, msg) => (
    res.status(code || 400).json({
        success: false,
        msg: msg || `Some error occured`
    })
)

exports.imageFilter = (req, file, cb) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!'
        return cb(new Error('Only image files are allowed!'), false)
    }
    cb(null, true)
}
