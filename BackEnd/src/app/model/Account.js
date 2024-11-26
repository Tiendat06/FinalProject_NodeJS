const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');
const Role = require('./Role');

const Account = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    role_id: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    password: {type: String},
    is_ban: {type: Boolean, default: false},
    forgot_password_code: {type: String, maxLength: 100, default: ''},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Account', Account, 'account');