const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./Product');
const Order = require('./Order');

const OrderDetails = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('OrderDetails', OrderDetails, 'order_details');