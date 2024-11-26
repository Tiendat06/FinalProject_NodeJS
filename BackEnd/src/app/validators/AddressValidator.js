const {check} = require('express-validator')

checkAllAddressFields = [
    check('fullName')
        .trim()
        .notEmpty().withMessage('Please enter full name'),
    check('phone_number')
        .trim()
        .notEmpty().withMessage('Please enter phone number'),
    check('address')
        .trim()
        .notEmpty().withMessage('Please enter address'),
    check('is_default')
        .trim()
        .notEmpty().withMessage('Please enter is_default'),
];

checkIdField = [
    check('id')
        .trim()
        .notEmpty().withMessage('Please enter id'),
];

module.exports = {
    checkAllAddressFields,
    checkIdField
}