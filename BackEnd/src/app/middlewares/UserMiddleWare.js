const {validationResult} = require("express-validator");

class UserMiddleWare {

    update_user_profile = (req, res, next) => {
        // const result = validationResult(req);
        // let error = '';
        //
        // if(!result.isEmpty()){
        //     error = result.array()[0].msg;
        // }
        // req.flash('error', error);
        next();
    }
}

module.exports = new UserMiddleWare;