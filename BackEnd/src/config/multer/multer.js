const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/upload");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
module.exports = upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else cb(null, false);
    },
});