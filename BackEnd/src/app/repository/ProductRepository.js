const Product = require('../model/Product');
// const ProductVariant = require('../model/ProductVariant');

class ProductRepository {

    getAllProducts = () => {
        return Product.find()
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }

    getTopNProducts = (n) => {
        return Product.find()
            .limit(n)
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductRepository;