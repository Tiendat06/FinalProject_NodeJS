const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./Product');
const ProductVariant = require('./ProductVariant');
const Order = require('./Order');

const OrderDetails = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    product_variant_id: { type: Schema.Types.ObjectId, ref: "ProductVariant", required: true },
    quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('OrderDetails', OrderDetails, 'order_details');