const userService = require('../services/UserService');
const couponService = require('../services/CouponService');
const productService = require('../services/ProductService');
const wishListService = require('../services/WishListService');

class UserController {

    get_all_users = async (req, res, next) => {
        return await userService.getAllUsers(req, res);
    }

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }

    delete_user = async (req, res, next) => {
        return await userService.deleteUser(req, res);
    }

    get_user_profile = async (req, res, next) => {
        return await userService.getUserProfile(req, res);
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

    view_profile = async (req, res, next) => {
        return await userService.viewProfile(req, res);
    }
}

module.exports = new UserController;