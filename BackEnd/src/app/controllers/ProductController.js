const productService = require('../services/ProductService');
const wishListService = require('../services/WishListService');

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
        // console.log('controller');
        return await productService.commentProduct(req, res);
    }

    // [POST] /product/add-wishlist
    add_wish_list = async (req, res, next) => {
        return await wishListService.addWishList(req, res);
    }

    // [GET] /product/variants
    getAllVariants = async (req, res, next) => {
        return await productService.getAllProductVariants(req, res);
    };

    // [GET] /product/variant/:id
    getProductVariantsById = async (req, res, next) => {
        try {
            await productService.getProductVariantById(req, res); // Call the service which will handle the response
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,
            });
        }
    }

    // [POST] /product/variant
    addProductVariant = async (req, res, next) => {
        return await productService.addProductVariant(req, res);
    }

    // [PUT] /product/variant/:id
    updateProductVariant = async (req, res, next) => {
        return await productService.updateProductVariant(req, res);
    }

    // [DELETE] /product/variant/:id
    deleteProductVariant = async (req, res, next) => {
        return await productService.deleteProductVariant(req, res);
    }

    //Create new product
    // [POST] /product
    createProduct = async (req, res, next) => {
        return await productService.createProduct(req, res);
    }

    // [PUT] /product/:id
    updateProduct = async (req, res, next) => {
        return await productService.updateProduct(req, res);
    }

    // [DELETE] /product/:id
    deleteProduct = async (req, res, next) => {
        return await productService.deleteProduct(req, res);
    }
}

module.exports = new ProductController;