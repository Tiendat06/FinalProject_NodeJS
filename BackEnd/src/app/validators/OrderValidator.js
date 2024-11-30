const {check} = require('express-validator');

placeOrderValidator = [
    // check('user_id')
    //     .trim()
    //     .notEmpty().withMessage('User ID is required !'),
    check('totalBill')
        .trim()
        .notEmpty().withMessage('Total Bill is required !'),
    check('address_id')
        .trim()
        .notEmpty().withMessage('Address is required !'),
    check('email')
        .trim()
        .notEmpty().withMessage('Email is required !')
        .isEmail().withMessage('Invalid email format !'),
];

module.exports = {
    placeOrderValidator
}