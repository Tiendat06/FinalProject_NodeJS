const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductCategory = require('./ProductCategory');

const Product = new Schema({
    category_id: {type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true},
    product_name: {type: String,},
    product_description: {type: String},
    product_price: {type: Number},
    product_img: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Product', Product, 'product');