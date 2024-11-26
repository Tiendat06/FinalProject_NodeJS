const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Coupon = require('./Coupon');
const User = require('./User');

const UserCoupon = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    coupon_id: {type: Schema.Types.ObjectId, ref: 'Coupon', required: true},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('UserCoupon', UserCoupon, 'user_coupon');