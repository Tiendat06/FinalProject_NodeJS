const productRepository = require('../repository/ProductRepository');

class SiteService {
    index = async (req, res) => {
        const top5Products = await productRepository.getTopNProducts(5);
        const top8Products = await productRepository.getTopNProducts(8);
        const top3Products = await productRepository.getTopNProducts(3);

        return res.status(200).json({
            status: true,
            top5Products,
            top8Products,
            top3Products
        })
    }

}

module.exports = new SiteService;