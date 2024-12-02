const OrderStatus = require('../model/OrderStatus');

class OrderStatusRepository{

    getOrderStatusByName = (status) => {
        return OrderStatus.findOne({status})
            .then(orderStatus => orderStatus)
            .catch(err => console.log(err));
    }

    getOrderStatusById = (_id) => {
        return OrderStatus.findOne({_id})
            .then(orderStatus => orderStatus)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderStatusRepository;