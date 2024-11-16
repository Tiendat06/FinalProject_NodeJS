const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coupon = new Schema({
    coupon_name: {type: String},
    description: {type: String},
    code: {type: String},
    point: {type: Number},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    expiredAt: {type: Date,},
});

module.exports = mongoose.model('Coupon', Coupon, 'coupon');