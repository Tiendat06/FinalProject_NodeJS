const { body, validationResult } = require('express-validator');

const addProductValidator = [
  body('product_name')
    .notEmpty()
    .withMessage('Product name is required')
    .isString()
    .withMessage('Product name must be a string')
    .isLength({ min: 3 })
    .withMessage('Product name must be at least 3 characters long'),

  body('product_description')
    .notEmpty()
    .withMessage('Product description is required')
    .isString()
    .withMessage('Product description must be a string'),

  body('product_price')
    .notEmpty()
    .withMessage('Product price is required')
    .isNumeric()
    .withMessage('Product price must be a number'),

  // body('category_id')
  //   .notEmpty()
  //   .withMessage('Category ID is required')
  //   .isMongoId()
  //   .withMessage('Category ID must be a valid MongoDB ID'),
];

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      msg: errors.array()[0].msg,
    });
  }
  next();
};

module.exports = {
  addProductValidator,
  handleValidationAddProduct: handleValidation,
};
