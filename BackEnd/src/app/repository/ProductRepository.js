const Product = require('../model/Product');
const ProductCategory = require('../model/ProductCategory');
// const ProductVariant = require('../model/ProductVariant');

class ProductRepository {
    getAllProducts = () => {
        return Product.find({ deleted: false })
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }

    getProductById = (_id) => {
        return Product.findOne({ _id, deleted: false })
            .populate('category_id')
            .then(product => product)
            .catch(err => console.log(err));
    }

    getTopNProducts = (n) => {
        return Product.find({ deleted: false })
            .limit(n)
            .populate('category_id')
            .then(products => products)
            .catch(err => console.log(err));
    }

    getProductCategoryById(category_id) {
        return ProductCategory.findOne({ _id: category_id })
            .then(category => category)
            .catch(err => console.log(err));
    }

    async createProduct(productData) {
        try {
            const product = new Product(productData);
            return await product.save();
        } catch (error) {
            throw new Error('Error saving product: ' + error.message);
        }
    }

    async updateProduct(product_id, updateData) {
        try {
            return await Product.findByIdAndUpdate(product_id, updateData, { new: true });
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    }

    async deleteProduct(product_id) {
        try {
            return await Product.findByIdAndDelete(product_id);
        } catch (err) {
            throw new Error('Error deleting product: ' + err.message);
        }
    }
}

module.exports = new ProductRepository;