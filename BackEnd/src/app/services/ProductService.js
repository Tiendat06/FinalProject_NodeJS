const productRepository = require('../repository/ProductRepository');

class ProductService {

    getAllProducts = async (req, res) => {
        const products = await productRepository.getAllProducts();
        return res.status(200).json({
            status: true,
            data: products,
            msg: 'Load products successfully',
        });
    }
}

module.exports = new ProductService;