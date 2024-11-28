const Order = require('../model/Order');
const OrderStatus = require('../model/OrderStatus');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderStatusDetails = new Schema({
    order_id: {type: Schema.Types.ObjectId, ref: 'Order', required: true},
    status_id: {type: Schema.Types.ObjectId, ref: 'OrderStatus', required: true},
    createdAt: {type: Date, default: null },
    is_check: {type: Boolean, default: false},
});

module.exports = mongoose.model('OrderStatusDetails', OrderStatusDetails, 'order_status_details');