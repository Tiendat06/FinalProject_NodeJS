const Order = require('../model/Order');

class OrderRepository {
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
}

module.exports = new OrderRepository;