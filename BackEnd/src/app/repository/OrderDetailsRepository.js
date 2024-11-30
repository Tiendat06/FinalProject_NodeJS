const OrderDetails = require('../model/OrderDetails')

class OrderDetailsRepository{

    insertOrderDetailsFromCart = (orderDetailsData) => {
        return OrderDetails.insertMany(orderDetailsData)
            .then(orderDetails => orderDetails)
            .catch(error => console.log(error));
    }

    getOrderDetailsByOrderId = (order_id) => {
        return OrderDetails.find({order_id})
            .populate('product_variant_id')
            .then(orderDetails => orderDetails)
            .catch(error => console.log(error));
    }
}

module.exports = new OrderDetailsRepository;