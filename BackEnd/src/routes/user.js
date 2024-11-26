const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middlewares/UserMiddleWare');
const checkLogin = require('../app/auth/checkLogin');
const userValidator = require('../app/validators/UserValidator');
const upload = require('../config/multer/multer');

router.put('/profile/:id',upload.single('img_file'), checkLogin, userValidator.userProfileValidator,
    userMiddleWare.update_user_profile, userController.update_user_profile);
//View profile
router.get('/profile/:id', checkLogin, userController.get_user_profile);
//View purchase history
router.get('/purchase-history', checkLogin, userController.get_purchase_history);
router.get('/purchase-detail/:orderId', checkLogin, userController.get_purchase_details);
module.exports = router;