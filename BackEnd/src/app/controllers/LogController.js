const logService = require('../services/LogService');

class LogController {

    // [POST] /log/login
    login = async (req, res, next) => {
        return await logService.checkLogin(req, res);
    }

    // [POST] /log/register
    register = async (req, res, next) => {
        return await logService.registerAccount(req, res);
    }

    // [POST] /log/forgot-password
    forgot_password = async (req, res, next) => {
        return await logService.forgotPassword(req, res);
    }

    // [POST] /log/logout
    logout = (req, res) => {
        res.clearCookie('token');
        res.status(200).json({
            status: true,
            msg: 'Wait for a seconds !',
        });
    }

    // [POST] /log/googleOAuth
    sign_in_google = async (req, res, next) => {
        return await logService.signInGoogle(req, res);
    }


    // [GET] /log/googleOAuth
    get_sign_in_google = async (req, res, next) => {
        return await logService.getSignInGoogle(req, res);
    }

    // [GET] /log/get-user-data
    get_user_data = async (req, res, next) => {
        return await logService.getUserSession(req, res);
    }
}

module.exports = new LogController;