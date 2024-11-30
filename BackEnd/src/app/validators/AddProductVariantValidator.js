const { body, validationResult } = require('express-validator');

const addProductVariantValidator = [
  // Validate the 'product_id' field
  body('product_id')
    .notEmpty().withMessage('Product ID is required')
    .isMongoId().withMessage('Invalid Product ID'),

  // Validate the 'variant_quantity' field
  body('variant_quantity')
    .notEmpty().withMessage('Variant quantity is required')
    .isInt({ min: 1 }).withMessage('Variant quantity must be a positive integer'),

  // Validate other fields, such as color, RAM, ROM, etc.
  body('product_color').notEmpty().withMessage('Product color is required'),
  body('variant_ROM').isString().withMessage('Invalid ROM specification'),
  body('variant_RAM').isString().withMessage('Invalid RAM specification'),
  body('variant_operation_system').isString().withMessage('Invalid operation system specification'),
  body('variant_chipset').isString().withMessage('Invalid chipset specification'),
  body('variant_screen').isString().withMessage('Invalid screen specification'),
  body('variant_cpu').isString().withMessage('Invalid CPU specification'),
  body('variant_weight').isString().withMessage('Invalid weight specification'),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        msg: errors.array()[0].msg,
      });
    }
    next();
  },
];

module.exports = {
  addProductVariantValidator,
};