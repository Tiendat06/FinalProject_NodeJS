const userService = require('../services/UserService');

class UserController {

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }

    user_change_password = async (req, res, next) => {
        return await userService.userChangePassword(req, res);
    }
}

module.exports = new UserController;