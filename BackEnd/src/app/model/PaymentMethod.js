const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentMethod = new Schema({
    payment_method_name: {type: String},
});

module.exports = mongoose.model('PaymentMethod', PaymentMethod, 'payment_method');