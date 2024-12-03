const express = require('express');
const router = express.Router();
const productMiddleWare = require('../app/middlewares/ProductMiddleWare');
const productController = require('../app/controllers/ProductController');
const checkLogin = require('../app/auth/checkLogin');
const productValidator = require('../app/validators/ProductValidator');
const { addProductVariantValidator } = require('../app/validators/AddProductVariantValidator');
const { updateProductVariantValidator } = require('../app/validators/UpdateProductVariantValidator');

const { UpdateProductValidator, handleValidation } = require('../app/validators/UpdateProductValidator');

const { addProductValidator, handleValidationAddProduct } = require('../app/validators/AddProductValidator');

const upload = require('../config/multer/multer');

router.get('/', productMiddleWare.index, productController.index);

router.post('/', upload.single('img_file'), /*addProductValidator*/ productValidator.addProductValidatorV2, handleValidationAddProduct,
    productMiddleWare.updateProduct, productController.createProduct);

router.put('/:id', upload.single('img_file'), addProductValidator, handleValidationAddProduct,
    productMiddleWare.updateProduct, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

router.get('/category', productController.get_product_category);

router.post('/category', productValidator.addCategoryValidator,
    productMiddleWare.add_product_category, productController.add_product_category);

router.put('/category/:id', productValidator.addCategoryValidator,
    productMiddleWare.update_product_category, productController.update_product_category);

router.delete('/category/:id', productController.delete_product_category);

router.post('/comment', checkLogin, productValidator.commentValidator,
    productMiddleWare.comment_product, productController.comment_product);

router.post('/add-wishlist', checkLogin, productValidator.addWishListValidators,
    productMiddleWare.add_wish_list, productController.add_wish_list);

router.get('/variant/product-details/:product_id', checkLogin, productValidator.getProductVariantByProduct,
    productMiddleWare.get_variant_by_product, productController.get_variant_by_product)

router.get('/variant', productController.getAllVariants);

// Route for adding a new product variant
router.post('/variant', upload.single('img_file'), addProductVariantValidator, productController.addProductVariant);

// Route for getting a product variant by ID
router.get('/variant/:id', productController.getProductVariantsById);

// Route for updating a product variant
router.put('/variant/:id', upload.single('img_file'), updateProductVariantValidator, productController.updateProductVariant);

// Route for deleting a product variant
router.delete('/variant/:id', productController.deleteProductVariant);

router.get('/:id', productMiddleWare.product_details, productController.product_details);

module.exports = router;