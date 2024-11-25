const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middlewares/UserMiddleware');
const checkLogin = require('../app/auth/checkLogin');
const userValidator = require('../app/validators/UserValidator');
const upload = require('../config/multer/multer');

router.put('/profile/:id',upload.single('img_file'), checkLogin, userValidator.userProfileValidator,
    userMiddleWare.update_user_profile, userController.update_user_profile);

router.post('/profile/change-password', checkLogin, userValidator.checkPassword,
    userMiddleWare.user_change_password, userController.user_change_password);

router.get('/profile/coupon', checkLogin, userMiddleWare.user_coupon_list, userController.user_coupon_list)

module.exports = router;