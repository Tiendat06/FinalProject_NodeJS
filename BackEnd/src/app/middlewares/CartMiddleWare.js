const {validationResult} = require("express-validator");
const addressRepository = require('../repository/AddressRepository');

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

    add_cart_order = async (req, res, next) => {
        const result = validationResult(req);
        const {products, user_id} = req.body;
        let error = '';
        const addresses = await addressRepository.getAddressesByUserId(user_id);

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        } else if (products.length === 0) {
            error = 'No item in cart yet !';
        } else if (addresses.length === 0) {
            error = 'Please add your shipping address to place order !';
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new CartMiddleware();