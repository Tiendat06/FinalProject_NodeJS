const orderService = require('../services/OrderService');

class OrderController {

    async createOrder(req, res, next) {
        try {
            return await orderService.createOrder(req, res); // Call service method
        } catch (error) {
            next(error);  // If there's an error, pass it to the next middleware
        }
    };

    async getAllOrders(req, res, next) {
        return await orderService.getAllOrders(req, res);
    }

    updateOrderStatusDetails = async (req, res, next) => {
        return await orderService.updateOrderStatusDetails(req, res);
    }

    async getOrderHistory(req, res) {
        // console.log('hi world: ',req.userData);

        try {
            const userId = req.query.user_id;
            const orders = await orderService.getOrdersByUserId(userId);
            if (!orders || orders.length === 0) {
                return res.status(404).json({
                    status: false,
                    msg: 'No orders found for this user'
                });
            }
            res.status(200).json({
                status: true,
                data: orders
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: error.message
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
                data: orderDetails
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

    get_order_status = async (req, res, next) => {
        return await orderService.getOrderStatusByOrderId(req, res);
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

    place_order_no_login = async (req, res, next) => {
        return await orderService.placeOrderNoLogin(req, res);
    }

    place_order_zalopay = async (req, res, next) => {
        return await orderService.placeOrderZaloPay(req, res);
    }
}

module.exports = new OrderController;
