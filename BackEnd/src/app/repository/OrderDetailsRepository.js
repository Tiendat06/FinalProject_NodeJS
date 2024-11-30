const OrderDetails = require('../model/OrderDetails')

class OrderDetailsRepository{

    insertOrderDetailsFromCart = (orderDetailsData) => {
        return OrderDetails.insertMany(orderDetailsData)
            .then(orderDetails => orderDetails)
            .catch(error => console.log(error));
    }
}

module.exports = new OrderDetailsRepository;