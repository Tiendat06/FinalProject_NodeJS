const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderStatus = new Schema({
    status: {type: String, maxLength: 20},
});

module.exports = mongoose.model('OrderStatus', OrderStatus, 'order_status');