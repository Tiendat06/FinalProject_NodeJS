const {validationResult} = require("express-validator");

class CartMiddleware {
    // [GET] /cart
    index = async (req, res, next) => {
        next();
    }

    update_cart = (req, res, next) => {
        const result = validationResult(req);
        const {quantity} = req.body;
        let error = '';
        console.log(quantity)

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if(Number(quantity) === 0){
            error = 'Quantity must be greater than 0';
        }
        req.flash('error', error);
        next();
    }

    add_cart = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    add_coupon = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    add_cart_order = (req, res, next) => {
        const result = validationResult(req);
        const {products} = req.body;
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if (products.length === 0) {
            error = 'No item in cart yet !';
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new CartMiddleware();