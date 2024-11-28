const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middlewares/UserMiddleware');
const checkLogin = require('../app/auth/checkLogin');
const userValidator = require('../app/validators/UserValidator');
const cartValidator = require('../app/validators/CartValidator');
const cartMiddleware = require('../app/middlewares/CartMiddleWare');
const upload = require('../config/multer/multer');

router.put('/profile/:id',upload.single('img_file'), checkLogin, userValidator.userProfileValidator,
    userMiddleWare.update_user_profile, userController.update_user_profile);

//View profile
// router.get('/profile/:id', checkLogin, userController.get_user_profile);
// View purchase history
router.get('/purchase-history', checkLogin, userController.get_purchase_history);
// View purchase details
router.get('/purchase-detail/:orderId', checkLogin, userController.get_purchase_details);
// Display shopping cart
router.get('/shopping-cart', userController.display_shopping_cart);
// Update cart
router.put('/cart/:product_variant_id', cartValidator.updateCartValidator, cartMiddleware.update_cart, userController.update_cart);
router.post('/profile/change-password', checkLogin, userValidator.checkPassword,
    userMiddleWare.user_change_password, userController.user_change_password);

router.get('/profile/coupon', checkLogin, userMiddleWare.user_coupon_list, userController.user_coupon_list)

router.get('/profile/wishlist', checkLogin, userMiddleWare.user_wish_list, userController.user_wish_list);

router.delete('/profile/wishlist/:id', checkLogin, userMiddleWare.delete_wish_list, userController.delete_wish_list);

module.exports = router;