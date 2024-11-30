const Order = require('../model/Order');
const OrderDetails = require('../model/OrderDetails');

class OrderRepository {
    async getOrdersByUserId(userId) {
        try {
            return await Order.find({ user_id: userId, deleted: false }).populate('user_id').exec();
        } catch (error) {
            throw new Error('Error fetching orders');
        }
    }
    async getOrderDetailsByOrderId(orderId) {
        try {
            return await OrderDetails.find({ order_id: orderId }).populate('product_variant_id').exec();
        } catch (error) {
            throw new Error('Error fetching order details');
        }
    }

    addCartToOrder = (orderData) => {
        return Order.insertMany(orderData)
            .then(orders => orders)
            .catch(error => console.log(error));
    }
}

module.exports = new OrderRepository();