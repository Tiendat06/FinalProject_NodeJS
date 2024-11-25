const Product = require('../model/Product');
const ProductVariant = require('../model/ProductVariant');

class ProductRepository {

    getAllProducts = () => {
        return ProductVariant.find()
            .populate({
                path: 'product_id',
                populate: {
                    path: 'category_id',
                    model: 'ProductCategory'
                }
            })
            .then(products => products)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductRepository;