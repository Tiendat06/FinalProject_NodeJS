const {validationResult} = require("express-validator");
const accountRepository = require('../repository/AccountRepository');
const bcrypt = require('bcrypt');

class UserMiddleWare {

    update_user_profile = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    user_change_password = async (req, res, next) => {
        const result = validationResult(req);
        const {user_id, currentPassword} = req.body;
        console.log(user_id);
        let error = '';
        const account = await accountRepository.getAccountByUserId(user_id);
        console.log(account)
        const accountCurrentPassword = account.password;
        const match = await bcrypt.compare(currentPassword, accountCurrentPassword);
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if(!match){
            error = 'Current password is incorrect';
        }
        req.flash('error', error);
        next();
    }

    user_coupon_list = (req, res, next) => {
        // const result = validationResult(req);
        // let error = '';
        // if(result.isEmpty()){
        //     error = result.array()[0].msg;
        // }
        // req.flash('error', error);
        next();
    }

    user_wish_list = (req, res, next) => {
        next();
    }

    delete_wish_list = (req, res, next) => {
        next();
    }
}

module.exports = new UserMiddleWare;