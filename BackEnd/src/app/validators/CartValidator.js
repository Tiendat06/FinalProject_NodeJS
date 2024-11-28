const { check } = require('express-validator');

const cartValidator = {
    updateCartValidator: [
        check('quantity')
            .trim()
            .notEmpty().withMessage('Quantity is required')
            .isInt({ min: 1 }).withMessage('Quantity must be at least 1')
    ]
};

module.exports = cartValidator;