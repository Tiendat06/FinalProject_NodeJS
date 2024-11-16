const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductVariant = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    product_name: {type: String},
    variant_quantity: {type: Number},
    import_price: {type: Number},
    retail_price: {type: Number}
});

module.exports = mongoose.model('ProductVariant', ProductVariant, 'product_variant');
