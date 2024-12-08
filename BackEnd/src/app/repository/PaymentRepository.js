const Payment = require('../model/Payment');

class PaymentRepository {
    getAllPayments = () => {
        return Payment.find()
            .then(payments => {
                return payments; // Return payments
            })
            .catch(err => {
                console.error('Error fetching payments:', err); // Log error more clearly
                throw new Error('Failed to fetch payments'); // Optionally, throw an error for better handling in calling code
            });
    };


    insertPayment = (paymentData) => {
        return Payment.insertMany(paymentData)
            .then(payments => payments)
            .catch(err => console.log(err));
    }

    checkPaymentOrderRelatedOrderId = (matchingOrderIds) => {
        return Payment.find({
            order_id: {$in: matchingOrderIds},
        })
            .then(payments => payments)
            .catch(err => console.log(err));
    }

    calculateRevenueAndProfitLast7Day = () => {
        const now = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 6);
        return Payment.aggregate([
            {
                $lookup: {
                    from: 'order', // Collection Order
                    localField: 'order_id',
                    foreignField: '_id',
                    as: 'orderDetails',
                },
            },
            { $unwind: "$orderDetails" },
            {
                $match: {
                    "orderDetails.createdAt": { $gte: sevenDaysAgo, $lte: now }, // Lọc trong 7 ngày qua
                },
            },
            {
                $addFields: {
                    day: {
                        $dateToString: { format: "%Y-%m-%d", date: "$orderDetails.createdAt" },
                    },
                },
            },
            {
                $group: {
                    _id: "$day",
                    revenue: { $sum: "$total_money" },
                    totalTax: { $sum: "$orderDetails.tax" },
                    totalShippingFee: { $sum: "$orderDetails.shippingFee" },
                },
            },
            {
                $addFields: {
                    profit: {
                        $subtract: [
                            "$revenue",
                            { $add: ["$totalTax", "$totalShippingFee"] },
                        ],
                    },
                },
            },
            { $sort: { "_id": 1 } },
        ]);
    }

    calculateRevenueAndProfitPerMonths = () => {
        return Payment.aggregate([
            {
                $lookup: {
                    from: 'order',
                    localField: 'order_id',
                    foreignField: '_id',
                    as: 'orderDetails',
                },
            },
            { $unwind: "$orderDetails" },
            {
                $addFields: {
                    month: { $month: "$orderDetails.createdAt" },
                    year: { $year: "$orderDetails.createdAt" },
                },
            },
            {
                $group: {
                    _id: { year: "$year", month: "$month" },
                    revenue: { $sum: "$total_money" },
                    totalTax: { $sum: "$orderDetails.tax" },
                    totalShippingFee: { $sum: "$orderDetails.shippingFee" },
                },
            },
            {
                $addFields: {
                    profit: {
                        $subtract: ["$revenue", { $add: ["$totalTax", "$totalShippingFee"] }],
                    },
                },
            },
        ]);
    }
}

module.exports = new PaymentRepository;