const {validationResult} = require("express-validator");

class ProductMiddleWare {

    index = (req, res, next) => {
        next();
    }

    product_details = (req, res, next) => {
        next();
    }

    comment_product = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        console.log('middle ware');
        next();
    }
}

module.exports = new ProductMiddleWare;