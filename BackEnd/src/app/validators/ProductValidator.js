const {check} = require('express-validator');

commentValidator = [
    check('content')
        .trim()
        .notEmpty().withMessage('Please enter content'),
    // check('star')
    //     .notEmpty().withMessage('Please rating'),
];

addWishListValidators = [
    check('user_id')
        .trim()
        .notEmpty().withMessage('Leak of data'),
    check('product_id')
        .trim()
        .notEmpty().withMessage('Leak of data'),
];

getProductVariantByProduct = [
    check('product_id')
        .trim()
        .notEmpty().withMessage('Leak of data'),
];

addProductValidatorV2 = [
    check('product_name')
        .trim()
        .notEmpty().withMessage('Product name is required !'),
    check('product_price')
        .trim()
        .notEmpty().withMessage('Product price is required !'),
    check('variant_quantity')
        .trim()
        .notEmpty().withMessage('Quantity is required !'),
    check('product_color')
        .trim()
        .notEmpty().withMessage('Product color is required !'),
    check('product_description')
        .trim()
        .notEmpty().withMessage('Product description is required !'),
];

addCategoryValidator = [
    check('category_name')
        .trim()
        .notEmpty().withMessage('Category name is required !'),
    check('description')
        .trim()
        .notEmpty().withMessage('Description is required !'),
]

module.exports = {
    commentValidator,
    addWishListValidators,
    getProductVariantByProduct,
    addProductValidatorV2,
    addCategoryValidator
}