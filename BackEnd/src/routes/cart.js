const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');
const cartMiddleware = require('../app/middlewares/CartMiddleware');

router.get('/', cartMiddleware.index, cartController.getCart);
router.put('/update/:product_variant_id', cartMiddleware.index, cartController.updateCart);
router.delete('/delete/:product_variant_id', cartMiddleware.index, cartController.deleteCartItem);

module.exports = router;