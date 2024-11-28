const Product = require('../model/Product');
// const ProductVariant = require('../model/ProductVariant');

class ProductRepository {

    getAllProducts = () => {
        return Product.find({deleted: false})
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }

    getProductById = (_id) => {
        return Product.findOne({_id, deleted: false})
            .populate('category_id')
            .then(product => product)
            .catch(err => console.log(err));
    }

    getTopNProducts = (n) => {
        return Product.find({deleted: false})
            .limit(n)
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductRepository;