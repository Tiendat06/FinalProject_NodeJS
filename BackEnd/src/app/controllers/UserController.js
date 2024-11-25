const userService = require('../services/UserService');
const couponService = require('../services/CouponService');

class UserController {

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }

    user_change_password = async (req, res, next) => {
        return await userService.userChangePassword(req, res);
    }

    user_coupon_list = async (req, res, next) => {
        return await couponService.getAllCoupons(req, res);
    }
}

module.exports = new UserController;