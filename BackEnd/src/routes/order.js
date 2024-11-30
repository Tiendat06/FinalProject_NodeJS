const orderController = require('../app/controllers/OrderController');
const router = require('express').Router();
const checkLogin = require('../app/auth/checkLogin');

router.post('/', checkLogin, orderController.createOrder);

//[PUT] update orderStatusDetails based on orderId
router.put('/order-status/:orderId', orderController.updateOrderStatusDetails);

router.get('/history', checkLogin, orderController.getOrderHistory);
router.get('/details/:orderId', checkLogin, orderController.getOrderDetails);
module.exports = router;