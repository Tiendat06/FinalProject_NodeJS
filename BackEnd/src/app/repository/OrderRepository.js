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
    //Top selling products
    getTopSellingProducts = (limit) => {
        return OrderDetails.aggregate([
            { $group: { _id: "$product_variant_id", count: { $sum: "$quantity" } } },
            { $sort: { count: -1 } },
            { $limit: limit },
            {
                $lookup: {
                    from: "product_variant",
                    localField: "_id",
                    foreignField: "_id",
                    as: "product_variant"
                }
            },
            { $unwind: "$product_variant" }
        ])
            .then(products => {
                return products;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new OrderRepository();