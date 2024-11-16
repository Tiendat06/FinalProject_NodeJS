const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Rating = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    star: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rating', Rating, 'rating');
