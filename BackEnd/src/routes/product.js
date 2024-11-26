const express = require('express');
const router = express.Router();
const productMiddleWare = require('../app/middlewares/ProductMiddleWare');
const productController = require('../app/controllers/ProductController');
const checkLogin = require('../app/auth/checkLogin');
const productValidator = require('../app/validators/ProductValidator');

router.get('/', productMiddleWare.index, productController.index);

router.get('/:id', productMiddleWare.product_details, productController.product_details);

router.post('/comment', checkLogin, productValidator.commentValidator,
    productMiddleWare.comment_product, productController.comment_product);

module.exports = router;