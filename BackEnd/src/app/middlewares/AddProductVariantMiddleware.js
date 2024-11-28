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

  // Validate the 'product_image' field
  body('product_image')
    .notEmpty().withMessage('Product image is required')
    .isURL().withMessage('Invalid URL format for product image'),

  // Validate other fields, such as color, RAM, ROM, etc.
  body('product_color').notEmpty().withMessage('Product color is required'),
  body('variant_ROM').notEmpty().withMessage('ROM is required'),
  body('variant_RAM').notEmpty().withMessage('RAM is required'),
  body('variant_operation_system').notEmpty().withMessage('Operating system is required'),
  body('variant_chipset').notEmpty().withMessage('Chipset is required'),
  body('variant_screen').notEmpty().withMessage('Screen details are required'),
  body('variant_cpu').optional().isString().withMessage('Invalid CPU specification'),
  body('variant_weight').notEmpty().withMessage('Variant weight is required'),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = {
  addProductVariantValidator,
};