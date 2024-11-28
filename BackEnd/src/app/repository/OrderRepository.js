const Order = require('../model/Order');

class OrderRepository {
    getOrdersByUserId = (userId) => {
        return Order.find({ user_id: userId, deleted: false })
            .populate('product_variant_id')
            .populate('status_id')
            .then(orders => orders)
            .catch(err => console.log(err));
    }

    getOrderByIdAndUserId = (orderId, userId) => {
        return Order.findOne({ _id: orderId, user_id: userId, deleted: false })
            .populate('product_variant_id')
            .populate('status_id')
            .then(order => order)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderRepository;