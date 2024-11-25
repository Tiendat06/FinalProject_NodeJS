const productService = require('../services/ProductService');

class ProductController {

    index = async (req, res, next) => {
        return await productService.getAllProducts(req, res);
    }
}

module.exports = new ProductController;