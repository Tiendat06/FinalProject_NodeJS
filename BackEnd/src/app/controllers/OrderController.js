const orderService = require('../services/OrderService');

class OrderController {
    async getOrderHistory(req, res) {
        try {
            const userId = req.userData._id;
            const orders = await orderService.getOrdersByUserId(userId);
            if (!orders || orders.length === 0) {
                return res.status(404).json({
                    status: false,
                    msg: 'No orders found for this user'
                });
            }
            res.status(200).json({
                status: true,
                orders
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: 'Error fetching order history'
            });
        }
    }
    async getOrderDetails(req, res) {
        try {
            const { orderId } = req.params;
            const orderDetails = await orderService.getOrderDetailsByOrderId(orderId);
            if (!orderDetails || orderDetails.length === 0) {
                return res.status(404).json({
                    status: false,
                    msg: 'No details found for this order'
                });
            }
            res.status(200).json({
                status: true,
                orderDetails
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: 'Error fetching order details'
            });
        }
    }

    
}

module.exports = new OrderController();