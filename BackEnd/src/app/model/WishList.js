const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product');
const User = require('./User');

const WishList = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WishList', WishList, 'wish_list');