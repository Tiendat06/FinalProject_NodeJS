const orderRepository = require('../repository/OrderRepository');

class OrderService {
    async getOrdersByUserId(userId) {
        try {
            return await orderRepository.getOrdersByUserId(userId);
        } catch (error) {
            throw new Error('Error fetching orders');
        }
    }
    async getOrderDetailsByOrderId(orderId) {
        try {
            return await orderRepository.getOrderDetailsByOrderId(orderId);
        } catch (error) {
            throw new Error('Error fetching order details');
        }
    }
}

module.exports = new OrderService();