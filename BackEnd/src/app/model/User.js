const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    fullName: {type: String, maxLength: 255},
    email: {type: String, maxLength: 255},
    gender: {type: String, maxLength: 10, default: 'Male'},
    birthday: {type: Date, default: Date.now},
    phone: {type: String, maxLength: 20, default: ""},
    point: {type: Number, default: 0},
    profile_image: {type: String, default: 'https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', User, 'user');