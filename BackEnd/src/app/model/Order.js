const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./Product');
const ProductVariant = require('./ProductVariant');
const User = require('./User');
const OrderStatus = require('./OrderStatus');
const Coupon = require('./Coupon');
const Address = require('./Address');

const Order = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    coupon_id: { type: Schema.Types.ObjectId, ref: "Coupon", default: null },
    address_id: { type: Schema.Types.ObjectId, ref: "Address", default: null },
    // product_variant_id: { type: Schema.Types.ObjectId, ref: "ProductVariant", required: true },
    // status_id: { type: Schema.Types.ObjectId, ref: "OrderStatus", required: true },
    status: {type: String, default: 'Pending'},
    tax: {type: Number, default: 10},
    shippingFee: { type: Number, default: 6 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', Order, 'order');