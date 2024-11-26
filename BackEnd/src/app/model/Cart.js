const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product');
const User = require('./User');

const Cart = new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Cart', Cart, 'cart');