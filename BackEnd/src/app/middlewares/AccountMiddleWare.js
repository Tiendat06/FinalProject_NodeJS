const {validationResult} = require("express-validator");

class AccountMiddleWare {
    update_account_banning = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        const {is_ban} = req.body;
        // console.log(is_ban);

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    update_account_role = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        // const {role} = req.body;
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new AccountMiddleWare;