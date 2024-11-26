const userService = require('../services/UserService');

class UserController {

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }
    get_user_profile = async (req, res, next) => {
        return await userService.getUserProfile(req, res);
    }
    get_purchase_history = async (req, res, next) => {
        return await userService.getPurchaseHistory(req, res);
    }
    get_purchase_details = async (req, res, next) => {
        return await userService.getPurchaseDetails(req, res);
    }

    user_change_password = async (req, res, next) => {
        return await userService.userChangePassword(req, res);

    }
}

module.exports = new UserController;