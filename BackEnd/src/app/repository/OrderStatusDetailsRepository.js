const OrderStatusDetails = require('../model/OrderStatusDetails');

class OrderStatusDetailsRepository {

    insertOrderStatusDetails = (orderStatusDetailsData) => {
        return OrderStatusDetails.insertMany(orderStatusDetailsData)
            .then(orderStatusDetailsData => orderStatusDetailsData)
            .catch(err => console.log(err));
    }

    getOrderStatusByOrderId = (order_id) => {
        return OrderStatusDetails.find({order_id})
            .populate('status_id')
            .populate('order_id')
            .then(orderStatusDetailsData => orderStatusDetailsData)
            .catch(err => console.log(err));
    }

    getOrderStatusByOrderIdAndStatusId = (order_id, status_id) => {
        return OrderStatusDetails.findOne({order_id, status_id})
            .populate('status_id')
            .populate('order_id')
            .then(orderStatusDetailsData => orderStatusDetailsData)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderStatusDetailsRepository;