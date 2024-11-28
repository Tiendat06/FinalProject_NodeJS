const { body, validationResult } = require('express-validator');

const updateProductVariantValidator = [
  // Validate the 'product_id' field (optional since it may not be updated)
  body('product_id')
    .optional()
    .isMongoId().withMessage('Invalid Product ID'),

  body('product_name')
    .optional()
    .notEmpty().withMessage('Product name cannot be empty')
    .isString().withMessage('Product name must be a valid string'),

  // Validate the 'variant_quantity' field (optional)
  body('variant_quantity')
    .optional()
    .isInt({ min: 1 }).withMessage('Variant quantity must be a positive integer'),

  // Validate the 'product_image' field (optional)
  body('product_image')
    .optional()
    .notEmpty().withMessage('Product image cannot be empty')
    .isURL().withMessage('Invalid URL format for product image'),

  // Validate other fields, such as color, RAM, ROM, etc. (optional)
  body('product_color')
    .optional()
    .notEmpty().withMessage('Product color cannot be empty')
    .isString().withMessage('Product color must be a valid string'),

  body('variant_ROM')
    .optional()
    .isString().withMessage('ROM must be a valid string'),

  body('variant_RAM')
    .optional()
    .isString().withMessage('RAM must be a valid string'),

  body('variant_operation_system')
    .optional()
    .isString().withMessage('Operating system must be a valid string'),

  body('variant_chipset')
    .optional()
    .isString().withMessage('Chipset must be a valid string'),

  body('variant_screen')
    .optional()
    .isString().withMessage('Screen details must be a valid string'),

  body('variant_cpu')
    .optional()
    .isString().withMessage('CPU specification must be a valid string'),

  body('variant_weight')
    .optional()
    .isString().withMessage('Variant weight must be a valid string'),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array()[0],
      });
    }
    next();
  },
];

module.exports = {
  updateProductVariantValidator,
};
