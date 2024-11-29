const OrderController = require('../app/controllers/OrderController');
const router = require('express').Router();

router.post('/', OrderController.createOrder);

router.put('/order-status/:orderId', OrderController.updateOrderStatusDetails);

module.exports = router;