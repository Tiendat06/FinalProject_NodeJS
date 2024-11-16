const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    fullName: {type: String, maxLength: 255},
    email: {type: String, maxLength: 255},
    gender: {type: String, maxLength: 10},
    birthday: {type: Date},
    phone: {type: String, maxLength: 20},
    profile_image: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', User, 'user');