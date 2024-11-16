const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Payment = new Schema({
    payment_method_id: {type: Schema.Types.ObjectId, ref: "PaymentMethod", required: true},
    order_id: {type: Schema.Types.ObjectId, ref: "Order", required: true},
    total_money: {type: Number},
});

module.exports = mongoose.model('Payment', Payment, 'payment');