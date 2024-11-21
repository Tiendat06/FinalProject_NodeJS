const {check} = require('express-validator');

login_POST = [
    check('phone')
        .trim()
        .notEmpty().withMessage('Please enter phone number'),
    check('password')
        .trim()
        .notEmpty().withMessage('Please enter password'),
];

// fullName, phone, password, dob, gender, email, address
register_POST = [
    check('fullName')
        .trim()
        .notEmpty().withMessage('Please enter full name'),
    check('phone')
        .trim()
        .notEmpty().withMessage('Please enter phone number'),
    check('password')
        .trim()
        .notEmpty().withMessage('Please enter password')
        .isLength({min: 6}).withMessage('Password must be at least 6 characters'),
    check('birthday')
        .trim()
        .notEmpty().withMessage('Please enter birthday'),
    check('gender')
        .trim()
        .notEmpty().withMessage('Please select gender'),
    check('email')
        .trim()
        .notEmpty().withMessage('Please enter email')
        .isEmail().withMessage('Invalid email format'),
    check('address')
        .trim()
        .notEmpty().withMessage('Please enter address'),
];

emailValidator = [
    check('email')
        .trim()
        .notEmpty().withMessage('Please enter email !')
        .isEmail().withMessage('Invalid email format !'),
]

module.exports = {
    login_POST,
    register_POST,
    emailValidator
}