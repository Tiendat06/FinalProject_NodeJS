const userService = require('../services/UserService');
const couponService = require('../services/CouponService');
const productService = require('../services/ProductService');
const wishListService = require('../services/WishListService');

class UserController {

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }
    get_user_profile = async (req, res, next) => {
        return await userService.getUserProfile(req, res);
    }
    //show purchase history
    get_purchase_history = async (req, res, next) => {
        return await userService.getPurchaseHistory(req, res);
    }
    get_purchase_details = async (req, res, next) => {
        return await userService.getPurchaseDetails(req, res);
    }
    //show shopping cart
    display_shopping_cart = async (req, res, next) => {
        return await userService.displayShoppingCart(req, res);
    }
    update_cart = async (req, res, next) => {
        return await userService.updateCart(req, res);
    }

    user_change_password = async (req, res, next) => {
        return await userService.userChangePassword(req, res);
    }

    user_coupon_list = async (req, res, next) => {
        return await couponService.getAllCoupons(req, res);
    }

    user_wish_list = async (req, res, next) => {
        return await wishListService.getUserWishList(req, res);
    }

    delete_wish_list = async (req, res, next) => {
        return await wishListService.deleteWishList(req, res);
    }
}

module.exports = new UserController;