const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');
const orderMiddleWare = require('../app/middlewares/OrderMiddleWare');
// const router = require('express').Router();
const checkLogin = require('../app/auth/checkLogin');
const orderValidator = require('../app/validators/OrderValidator');

router.post('/', checkLogin, orderController.createOrder);

router.post('/place-order', orderValidator.placeOrderValidator,
    orderMiddleWare.place_order, orderController.place_order);

router.get('/', orderController.getAllOrders);

//[PUT] update orderStatusDetails based on orderId
router.put('/order-status/:orderId', orderController.updateOrderStatusDetails);

router.get('/', orderMiddleWare.index, orderController.get_user_order);

router.get('/history', checkLogin, orderController.getOrderHistory);
router.get('/details/:orderId', checkLogin, orderController.getOrderDetails);
module.exports = router;