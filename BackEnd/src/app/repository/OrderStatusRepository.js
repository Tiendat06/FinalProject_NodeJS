const OrderStatus = require('../model/OrderStatus');

class OrderStatusRepository{

    getOrderStatusByName = (status) => {
        return OrderStatus.findOne({status})
            .then(orderStatus => orderStatus)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderStatusRepository;