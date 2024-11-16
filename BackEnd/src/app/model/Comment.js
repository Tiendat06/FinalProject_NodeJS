const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    content: { type: String,},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Comment', Comment, 'comment');