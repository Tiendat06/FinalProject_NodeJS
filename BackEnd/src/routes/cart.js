const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');
const cartMiddleware = require('../app/middlewares/CartMiddleWare');
const cartValidator = require('../app/validators/CartValidator');

router.get('/', cartMiddleware.index, cartController.getCart);
// router.put('/update/:product_variant_id', cartMiddleware.index, cartController.updateCart);
// router.delete('/delete/:product_variant_id', cartMiddleware.index, cartController.deleteCartItem);

router.post('/', cartMiddleware.add_cart, cartController.add_cart);

router.put('/:cartId', cartValidator.updateCartValidator, cartMiddleware.update_cart, cartController.updateCart);

router.delete('/:cartId', cartMiddleware.index, cartController.deleteCartItem);

router.post('/add-coupon', cartValidator.addCouponValidator, cartMiddleware.add_coupon, cartController.add_coupon);

router.post('/order', cartValidator.addOrderValidator, cartMiddleware.add_cart_order, cartController.add_cart_order)

module.exports = router;