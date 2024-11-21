const {check} = require('express-validator')

userProfileValidator = [
    check('name')
        .trim()
        .notEmpty().withMessage('Name is required !'),
    check('email')
        .trim()
        .notEmpty().withMessage('Email is required !')
        .isEmail().withMessage('Invalid email format !'),
    check('phoneNumber')
        .trim()
        .notEmpty().withMessage('Phone number is required !'),
    check('gender')
        .trim()
        .notEmpty().withMessage('Please select gender'),
    check('birthday')
        .trim()
        .notEmpty().withMessage('Please select birthday'),
];

module.exports = {
    userProfileValidator
}