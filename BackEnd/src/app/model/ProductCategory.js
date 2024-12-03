const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategory = new Schema({
    category_name: {type: String},
    description: {type: String, default: ""},
});

module.exports = mongoose.model('ProductCategory', ProductCategory, 'product_category');