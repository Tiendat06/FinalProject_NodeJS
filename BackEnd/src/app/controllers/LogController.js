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
            status: false,
            msg: 'Wait for a seconds !',
        });
    }
}

module.exports = new LogController;