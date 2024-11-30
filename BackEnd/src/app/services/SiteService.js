const productRepository = require('../repository/ProductRepository');
const wishListRepository = require('../repository/WishListRepository');
const OrderRepository = require('../repository/OrderRepository');
const commentRepository = require('../repository/CommentRepository');
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
     // Get top wishlisted products
    getTopWishListedProducts = async (req, res) => {
        try {
            const topProducts = await wishListRepository.getTopWishListedProducts(3);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top wishlisted products fetched successfully!',
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

    // Get top-selling products
    getTopSellingProducts = async (req, res) => {
        try {
            const topProducts = await OrderRepository.getTopSellingProducts(8);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top selling products fetched successfully!',
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

    // Get top-reviewed products
    getTopReviewedProducts = async (req, res) => {
        try {
            const topProducts = await commentRepository.getTopReviewedProducts(8);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top reviewed products fetched successfully!',
            });
        } catch (e) {
            console.log('Service Error:', e);
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

}

module.exports = new SiteService;