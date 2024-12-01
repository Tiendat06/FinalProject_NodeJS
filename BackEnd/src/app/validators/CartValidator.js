const {check} = require('express-validator');

updateCartValidator = [
    check('quantity')
        .trim()
        .notEmpty().withMessage('Quantity cannot be empty'),
]

addCouponValidator = [
    check('code')
        .trim()
        .notEmpty().withMessage('Please enter coupon code !'),
    check('user_id')
        .trim()
        .notEmpty().withMessage('Please enter user id !'),
];

addOrderValidator = [
    // check('user_id')
    //     .trim()
    //     .notEmpty().withMessage('Please enter user id !'),
    check('tax')
        .trim()
        .notEmpty().withMessage('Please enter tax !'),
    check('shippingFee')
        .trim()
        .notEmpty().withMessage('Please enter shipping fee !'),

]

module.exports = {
    updateCartValidator,
    addCouponValidator,
    addOrderValidator
}