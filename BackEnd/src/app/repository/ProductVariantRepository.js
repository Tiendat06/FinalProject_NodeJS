const ProductVariant = require('../model/ProductVariant');

class ProductVariantRepository {
    getProductVariantByProductId = (product_id) => {
        return ProductVariant.find({product_id})
            .then(productVariant => productVariant)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductVariantRepository;