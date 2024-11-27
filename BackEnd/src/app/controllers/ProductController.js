const productService = require('../services/ProductService');

class ProductController {

    // [GET] /product
    index = async (req, res, next) => {
        return await productService.getAllProducts(req, res);
    }

    // [GET] /product/:id
    product_details = async (req, res, next) => {
        return await productService.getProductById(req, res);
    }

    // [POST] /product/comment
    comment_product = async (req, res, next) => {
        console.log('controller');

        return await productService.commentProduct(req, res);
    }

    // [POST] /product/add-wishlist
    add_wish_list = async (req, res, next) => {
        return await productService.addWishList(req, res);
    }
}

module.exports = new ProductController;