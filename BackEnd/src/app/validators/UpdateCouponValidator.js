const { body, validationResult } = require('express-validator');

updateCoupon = [
  // Validation rules
  body('coupon_name').optional().isString().withMessage('Coupon name must be a string'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('code').optional().isAlphanumeric().withMessage('Code must be alphanumeric'),
  body('point').optional().isInt({ min: 0 }).withMessage('Point must be a non-negative integer'),
  body('discount').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100'),
]

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
  updateCoupon,
  handleValidationUpdateCoupon: handleValidation,
}