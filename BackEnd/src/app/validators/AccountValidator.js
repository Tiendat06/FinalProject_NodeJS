const {check} = require('express-validator');

updateAccountBanningValidator = [
    check('is_ban')
        .trim()
        .notEmpty().withMessage('Please enter a valid banning status !'),
];

updateAccountRoleValidator = [
    check('role')
        .trim()
        .notEmpty().withMessage('Please enter a valid role !'),
]

module.exports = {
    updateAccountBanningValidator,
    updateAccountRoleValidator
}