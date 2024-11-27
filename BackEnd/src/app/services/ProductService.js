const productRepository = require('../repository/ProductRepository');
const productVariantRepository = require('../repository/ProductVariantRepository');
const commentRepository = require('../repository/CommentRepository');
const wishListRepository = require('../repository/WishListRepository');

class ProductService {

    getAllProducts = async (req, res) => {
        const products = await productRepository.getAllProducts();
        return res.status(200).json({
            status: true,
            data: products,
            msg: 'Load products successfully',
        });
    }

    getProductById = async (req, res) => {
        const {id} = req.params;
        try {
            const product = await productRepository.getProductById(id);
            if(!product) throw new Error('Product not found !');
            const product_id = product._id;
            const productVariants = await productVariantRepository.getProductVariantByProductId(product_id);
            const top4Products = await productRepository.getTopNProducts(4);
            const comment = await commentRepository.getCommentByProductId(product_id);
            let totalStar = 0;
            let length = 0;
            let starAvg = 0;

            if(comment.length !== 0) {
                length = comment.length;
                totalStar = comment.reduce((sum, cmt) => sum + cmt.star, 0);
                starAvg = (totalStar / length).toFixed(0);
            }
            // console.log(starAvg);
            return res.status(200).json({
                status: true,
                product, productVariants, top4Products, starAvg, comment
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    commentProduct = async (req, res) => {
        const {user_id, product_id, star, content} = req.body;
        const error = req.flash('error');
        const commentData = {
            user_id, content, product_id, star: Number(star)
        }

        try {
            if(error.length !== 0) throw new Error(error[0]);
            const comment = await commentRepository.insertComment(commentData)
            if(comment.length === 0) throw new Error('Comment failed !');

            return res.status(200).json({
                status: true,
                data: comment[0],
                msg: 'Thanks for your comment!'
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
}

module.exports = new ProductService;