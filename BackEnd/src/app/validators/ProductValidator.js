const {check} = require('express-validator');

commentValidator = [
    check('content')
        .trim()
        .notEmpty().withMessage('Please enter content'),
    check('star')
        .notEmpty().withMessage('Please rating'),
];

module.exports = {
    commentValidator,
}