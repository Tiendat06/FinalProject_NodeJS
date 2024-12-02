const { body, validationResult } = require('express-validator');

const addCouponValidator = [
  body('coupon_name')
    .notEmpty()
    .withMessage('Coupon name is required')
    .isString()
    .withMessage('Coupon name must be a string'),

  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be a string'),

  body('code')
    .notEmpty()
    .withMessage('Code is required')
    .isString()
    .withMessage('Code must be a string'),

  body('point')
    .notEmpty()
    .withMessage('Point is required')
    .isNumeric()
    .withMessage('Point must be a number'),

  body('discount')
    .notEmpty()
    .withMessage('Discount is required')
    .isNumeric()
    .withMessage('Discount must be a number'),
];

// Middleware to handle validation results
const handleValidationCoupon = (req, res, next) => {
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
  addCouponValidator,
  handleValidationCoupon: handleValidationCoupon,
};