const {check} = require('express-validator');

commentValidator = [
    check('content')
        .trim()
        .notEmpty().withMessage('Please enter content'),
    check('star')
        .notEmpty().withMessage('Please rating'),
];

addWishListValidators = [
    check('user_id')
        .trim()
        .notEmpty().withMessage('Leak of data'),
    check('product_id')
        .trim()
        .notEmpty().withMessage('Leak of data'),
]

module.exports = {
    commentValidator,
    addWishListValidators
}