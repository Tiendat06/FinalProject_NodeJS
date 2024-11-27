const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product');
const ProductVariant = require('./ProductVariant');
const User = require('./User');

const Cart = new Schema({
    product_variant_id: { type: Schema.Types.ObjectId, ref: 'ProductVariant', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Cart', Cart, 'cart');