const { validationResult } = require('express-validator');

class CartMiddleware {
    update_cart = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if (!result.isEmpty()) {
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new CartMiddleware();