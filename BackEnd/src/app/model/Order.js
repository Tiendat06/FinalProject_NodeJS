const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./Product');
const User = require('./User');
const OrderStatus = require('./OrderStatus');

const Order = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    status_id: { type: Schema.Types.ObjectId, ref: "OrderStatus", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', Order, 'order');