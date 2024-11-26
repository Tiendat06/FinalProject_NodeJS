const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./Product')

const ProductVariant = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    product_name: {type: String},
    product_color: {type: String},
    variant_quantity: {type: Number},
    product_image: {type: String},
    retail_price: {type: Number},
    variant_ROM: {type: String, default: null},
    variant_RAM: {type: String, default: null},
    variant_operation_system: {type: String, default: null},
    variant_chipset: {type: String, default: null},
    variant_graphic_card: {type: String, default: null},
    variant_screen: {type: String, default: null},
    variant_cpu: {type: String, default: null},
    variant_weight: {type: String, default: null},
});

module.exports = mongoose.model('ProductVariant', ProductVariant, 'product_variant');
