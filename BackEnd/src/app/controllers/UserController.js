const userService = require('../services/UserService');

class UserController {

    update_user_profile = async (req, res, next) => {
        return await userService.updateUserProfile(req, res);
    }
}

module.exports = new UserController;