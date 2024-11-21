const {validationResult} = require("express-validator");
const userRepository = require('../repository/UserRepository');

class LogMiddleWare {

    login = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    register = async (req, res, next) => {
        const result = validationResult(req);
        const {fullName, phone, password, birthday, gender, email, address} = req.body;
        let error = '';

        if(await userRepository.getUserByPhone(phone)){
            error = 'Phone is exists';
        } else if(await userRepository.getUserByEmail(email)) {
            error = 'Email is exists';
        } else if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    forgot_password = async (req, res, next) => {
        const result = validationResult(req);
        const {email} = req.body;
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if(!await userRepository.getUserByEmail(email)) {
            error = 'Email is not exists';
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new LogMiddleWare;