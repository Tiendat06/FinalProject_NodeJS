const { body, validationResult } = require('express-validator');

const UpdateProductValidator = [
  body('product_name')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Product name must be a string')
    .isLength({ min: 3 })
    .withMessage('Product name must be at least 3 characters long'),

  body('product_description')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage('Description must be a string'),

  body('product_price')
    .optional({ checkFalsy: true })
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),

  body('category_id')
    .optional({ checkFalsy: true })
    .isMongoId()
    .withMessage('Category ID must be a valid MongoDB ID'),
];

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      msg: 'Validation failed',
      errors: errors.array()[0],
    });
  }
  next();
};

module.exports = {
  UpdateProductValidator,
  handleValidation,
};