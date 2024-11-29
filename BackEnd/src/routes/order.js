const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');
const checkLogin = require('../app/auth/checkLogin');

router.get('/history', checkLogin, orderController.getOrderHistory);
router.get('/details/:orderId', checkLogin, orderController.getOrderDetails);
module.exports = router;