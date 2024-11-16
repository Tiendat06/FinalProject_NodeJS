const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
    category_id: {type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true},
    product_name: {type: String,},
    product_description: {type: String},
    product_image: {type: String},
    import_price: {type: Number},
    retail_price: {type: Number},
    quantity: {type: Number},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Product', Product, 'product');