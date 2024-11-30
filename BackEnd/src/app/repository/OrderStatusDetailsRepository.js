const OrderStatusDetails = require('../model/OrderStatusDetails');

class OrderStatusDetailsRepository {

    insertOrderStatusDetails = (orderStatusDetailsData) => {
        return OrderStatusDetails.insertMany(orderStatusDetailsData)
            .then(orderStatusDetailsData => orderStatusDetailsData)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderStatusDetailsRepository;