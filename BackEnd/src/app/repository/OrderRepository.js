const Order = require('../model/Order');
const OrderDetails = require('../model/OrderDetails');
const OrderStatusDetails = require('../model/');
const OrderStatus = require('../model/OrderStatus');
class OrderRepository {

    async createOrder(orderData) {
        const newOrder = new Order(orderData);
        return await newOrder.save();
    }

    async createOrderDetails(orderDetailsData) {
        const newOrderDetails = new OrderDetails(orderDetailsData);
        return await newOrderDetails.save();
    }
    getOrdersByUserId = (userId) => {
        return Order.find({ userId, deleted: false })
            .then(orders => orders)
            .catch(err => console.log(err));
    }
    getOrderByIdAndUserId = (orderId, userId) => {
        return Order.findOne({ _id: orderId, userId, deleted: false })
            .then(order => order)
            .catch(err => console.log(err));
    }

    async findOrderStatusById(orderStatus_id) {
        return await OrderStatus.findById(orderStatus_id);
    }

    // Check if the order exists
    async doesOrderExist(orderId) {
        return await Order.exists({ _id: orderId });
    }

    // Check if the status exists
    async doesStatusExist(statusId) {
        return await OrderStatus.exists({ _id: statusId });
    }

    // Update or create OrderStatusDetails
    async upsertOrderStatusDetails(orderId, statusId) {
        return OrderStatusDetails.findOneAndUpdate(
            { order_id: orderId },
            { status_id: statusId, createdAt: Date.now(), is_check: true },
            { upsert: true, new: true }
        );
    }
}

module.exports = new OrderRepository;