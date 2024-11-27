const express = require('express');
const router = express.Router();
const productMiddleWare = require('../app/middlewares/ProductMiddleWare');
const productController = require('../app/controllers/ProductController');
const checkLogin = require('../app/auth/checkLogin');
const productValidator = require('../app/validators/ProductValidator');

router.get('/', productMiddleWare.index, productController.index);

router.post('/comment', checkLogin, productValidator.commentValidator,
    productMiddleWare.comment_product, productController.comment_product);

router.post('/add-wishlist', checkLogin, productValidator.addWishListValidators,
    productMiddleWare.add_wish_list, productController.add_wish_list)

router.get('/:id', productMiddleWare.product_details, productController.product_details);

module.exports = router;