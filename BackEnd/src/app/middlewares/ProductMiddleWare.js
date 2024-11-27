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
        const {star} = req.body;
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if(star === 0){
            error = 'Please rating !';
        }
        req.flash('error', error);
        // console.log('middle ware');
        next();
    }

    add_wish_list = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new ProductMiddleWare;