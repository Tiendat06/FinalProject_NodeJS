const {validationResult} = require("express-validator");

class OrderMiddleWare{
    // [GET] /
    index = (req, res, next) => {
        next();
    }

    place_order = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }
}
module.exports = new OrderMiddleWare;