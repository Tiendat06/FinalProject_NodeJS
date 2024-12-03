const {check} = require('express-validator');

updateAccountBanningValidator = [
    check('is_ban')
        .trim()
        .notEmpty().withMessage('Please enter a valid banning status !'),
];

module.exports = {
    updateAccountBanningValidator
}