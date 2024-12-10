const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middlewares/UserMiddleWare');
const checkLogin = require('../app/auth/checkLogin');
const userValidator = require('../app/validators/UserValidator');

const upload = require('../config/multer/multer');

router.get('/', userController.get_all_users);

router.delete('/:id', checkLogin, userController.delete_user);

router.put('/profile/:id',upload.single('img_file'), checkLogin, userValidator.userProfileValidator,
    userMiddleWare.update_user_profile, userController.update_user_profile);

//View profile
router.get('/profile', checkLogin, userController.view_profile);
// router.get('/profile/:id', checkLogin, userController.get_user_profile);

router.post('/profile/change-password', checkLogin, userValidator.checkPassword,
    userMiddleWare.user_change_password, userController.user_change_password);

router.get('/profile/coupon', checkLogin, userMiddleWare.user_coupon_list, userController.user_coupon_list)

router.get('/profile/wishlist', checkLogin, userMiddleWare.user_wish_list, userController.user_wish_list);

router.delete('/profile/wishlist/:id', checkLogin, userMiddleWare.delete_wish_list, userController.delete_wish_list);

module.exports = router;