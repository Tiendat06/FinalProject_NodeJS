const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const Address = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    fullName: { type: String, maxLength: 100 },
    address: {type: String, maxLength: 500},
    phone_number: { type: String, maxLength: 20 },
    is_default: { type: Boolean, default: false },
});

module.exports = mongoose.model('Address', Address, 'address');