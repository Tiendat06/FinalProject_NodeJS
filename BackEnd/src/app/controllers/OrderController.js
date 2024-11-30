const orderService = require('../services/OrderService');

class OrderController {

    async createOrder(req, res, next) {
        try {
            return await orderService.createOrder(req, res); // Call service method
        } catch (error) {
            next(error);  // If there's an error, pass it to the next middleware
        }
    };

    updateOrderStatusDetails = async (req, res, next) => {
        return await orderService.updateOrderStatusDetails(req, res);
    }

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

    get_user_order = async (req, res, next) => {
        return await orderService.getUserOrder(req, res);
    }

    place_order = async (req, res, next) => {
        // console.log(req.body);
        //
        // return res.status(200).json({
        //     status: true,
        //     msg: 'Place order oke'
        // })
        console.log(req.body);
        return await orderService.placeOrder(req, res);
    }
}

module.exports = new OrderController;
