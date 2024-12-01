const Order = require('../model/Order');
const OrderDetails = require('../model/OrderDetails');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const OrderStatus = require('../model/OrderStatus');

class OrderRepository {

    async createOrder(orderData) {
        const newOrder = new Order(orderData);
        return await newOrder.save();
    }

    async createOrderDetails(orderDetailsData) {
        const newOrderDetails = new OrderDetails(orderDetailsData);
        return await newOrderDetails.save();
    }

    // Method to fetch order details by order ID
    // async getOrderDetailsByOrderId(orderId) {
    //     try {
    //         return await OrderDetails.find({ order_id: orderId }).populate('product_variant_id'); // Populate with product variant data if needed
    //     } catch (error) {
    //         throw new Error('Error fetching order details');
    //     }
    // }
    // getOrdersByUserId = (userId) => {
    //     return Order.find({ userId, deleted: false })
    //         .then(orders => orders)
    //         .catch(err => console.log(err));
    // }

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

    async findOrderStatusById(orderStatus_id) {
        return await OrderStatus.findById(orderStatus_id);
    }

    // Check if the order exists
    async doesOrderExist(orderId) {
        return await Order.exists({ _id: orderId });
    }

    // Check if the status exists
    async doesStatusExist(statusId) {
        return await OrderStatus.exists({ _id: statusId });
    }

    // Update or create OrderStatusDetails
    async upsertOrderStatusDetails(orderId, statusId) {
        return OrderStatusDetails.findOneAndUpdate(
            { order_id: orderId, status_id: statusId },
            { createdAt: Date.now(), is_check: true },
            { upsert: true, new: true }
        );
    }

    addCartToOrder = (orderData) => {
        return Order.insertMany(orderData)
            .then(orders => orders)
            .catch(error => console.log(error));
    }

    getOrderByUserAndDateCreatedIsNull = (user_id) => {
        return Order.findOne({ user_id, createdAt: null, updatedAt: null })
            .populate('coupon_id')
            .then(order => order)
            .catch(error => console.log(error));
    }

    findOneOrderAndUpdate = ({ user_id, ...updateData }) => {
        return Order.findOneAndUpdate({ user_id, createdAt: null }, { $set: updateData }, { new: true })
            .then(order => order)
            .catch(err => console.log(err));
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

    getAllOrders = (order_id) => {
        return Order.find({ order_id })
            .populate('user_id')
            .populate('coupon_id')
            .populate('address_id')
            .then(orders => orders)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderRepository;