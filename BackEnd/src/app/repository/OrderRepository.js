const Order = require('../model/Order');
const OrderDetails = require('../model/OrderDetails');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const OrderStatus = require('../model/OrderStatus');
const { $where } = require('../model/Coupon');

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
            return await Order.find({ user_id: userId, deleted: false }).populate('user_id').sort({createdAt: -1}).exec();
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

    getAllOrders = () => {
        return Order.find()
            .populate('user_id')
            .populate('coupon_id')
            .populate('address_id')
            .sort({ createdAt: -1 })
            .then(orders => orders)
            .catch(err => console.log(err));
    }

    updateOrderById = (_id, updateData) => {
        return Order.updateOne({ _id }, { $set: updateData }, { new: true })
            .then(value => value)
            .catch(err => console.log(err));
    }

    getOrdersByMonth = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Generate a list of 12 months (indexed from 0 to 11)
        const monthsData = Array(12).fill(0); // Initialize array with 12 zeros

        // MongoDB aggregation query to get order counts by month
        return Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: start,  // Ensure this is in UTC
                        $lt: end      // Ensure this is in UTC
                    }
                }
            },
            {
                $group: {
                    _id: { $month: "$createdAt" }, // Group by month (0 = January, 11 = December)
                    count: { $sum: 1 }, // Count orders
                }
            },
            {
                $sort: { _id: 1 } // Sort by month (ascending)
            }
        ])
            .then(orders => {
                // For each order result, map the month index (_id) to the corresponding month in monthsData
                orders.forEach(order => {
                    const monthIndex = order._id - 1;  // _id in MongoDB is 1-indexed, so we subtract 1 to get 0-indexed month
                    monthsData[monthIndex] = order.count; // Set the count for the correct month
                });

                console.log('Monthly Order Counts:', monthsData); // Debug log
                return monthsData;  // Return the array with 12 months (some months may have 0 orders)
            })
            .catch(err => {
                console.error('Error during aggregation:', err);
                return Array(12).fill(0); // Return 12 zeros if there's an error
            });
    };

    getOrdersByWeek = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Generate a list of 7 days (indexed from 0 to 6)
        const daysData = Array(7).fill(0); // Initialize array with 7 zeros

        // MongoDB aggregation query to get order counts by day
        return Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: start,  // Ensure this is in UTC
                        $lt: end      // Ensure this is in UTC
                    }
                }
            },
            {
                $group: {
                    _id: { $dayOfYear: "$createdAt" }, // Group by day of the year (1 = Jan 1, 2 = Jan 2, etc.)
                    count: { $sum: 1 } // Count orders
                }
            },
            {
                $sort: { _id: 1 } // Sort by day (ascending)
            }
        ])
            .then(orders => {
                // For each order result, map the day (_id) to the corresponding day in daysData
                orders.forEach(order => {
                    const dayIndex = order._id % 7;  // We use modulo to get the correct day index (0-6)
                    daysData[dayIndex] = order.count; // Set the count for the correct day
                });

                console.log('Daily Order Counts (Last 7 days):', daysData); // Debug log
                return daysData;  // Return the array with 7 days (some days may have 0 orders)
            })
            .catch(err => {
                console.error('Error during aggregation:', err);
                return Array(7).fill(0); // Return 7 zeros if there's an error
            });
    };

    getTotalOrder = () => {
        return Order.countDocuments()
            .then(value => {
                console.log('Total Orders:', value); // Debug log
                return value;
            }).catch(err => {
                console.error('Error counting orders:', err);
                return 0;
            });
    };

    getOrderById = (_id) => {
        return Order.findOne({ _id })
            .then(order => order)
            .catch(err => console.log(err));
    }
}

module.exports = new OrderRepository;