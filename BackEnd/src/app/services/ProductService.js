const productRepository = require('../repository/ProductRepository');
const productVariantRepository = require('../repository/ProductVariantRepository');
const commentRepository = require('../repository/CommentRepository');
const wishListRepository = require('../repository/WishListRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');

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
        const { id } = req.params;
        try {
            const product = await productRepository.getProductById(id);
            if (!product) throw new Error('Product not found !');
            const product_id = product._id;
            const productVariants = await productVariantRepository.getProductVariantByProductId(product_id);
            const top4Products = await productRepository.getTopNProducts(4);
            const comment = await commentRepository.getCommentByProductId(product_id);
            let totalStar = 0;
            let length = 0;
            let starAvg = 0;

            if (comment.length !== 0) {
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
        const { user_id, product_id, star, content } = req.body;
        const error = req.flash('error');
        const commentData = {
            user_id, content, product_id, star: Number(star)
        }

        try {
            if (error.length !== 0) throw new Error(error[0]);
            const comment = await commentRepository.insertComment(commentData)
            if (comment.length === 0) throw new Error('Comment failed !');

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

    // Fetch all product variants
    getAllProductVariants = async (req, res) => {
        try {
            const productVariants = await productVariantRepository.getAllProductVariants();
            return res.status(200).json({
                status: true,
                data: productVariants,
                msg: "Product variants fetched successfully.",
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                msg: error.message || "An error occurred while fetching product variants.",
            });
        }
    };

    //get Product Variants by ID
    getProductVariantById = async (req, res) => {
        try {
            const variant_id = req.params.id; // Get the ID from the URL params
            const productVariant = await productVariantRepository.getProductVariantById(variant_id);

            if (!productVariant) {
                return res.status(404).json({
                    status: false,
                    message: 'Product variant not found',
                });
            }

            return res.status(200).json({
                status: true,
                data: productVariant,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: error.message,
            });
        }
    };

    //Add a product variant
    async addProductVariant(req, res) {
        try {
            const variantData = req.body;  // Extract the variant data from the request body

            const { product_id } = variantData;

            if (!product_id) {
                return res.status(400).json({ status: false, msg: "Product ID is required!" });
            }

            // Check if the product_id exists in the Product collection
            const product = await productRepository.getProductById(product_id);

            if (!product) {
                return res.status(400).json({ status: false, msg: "Invalid product ID. Product does not exist!" });
            }

            // Proceed with adding the variant if product_id is valid
            const newVariant = await productVariantRepository.addProductVariant(variantData);  // Use the repository to add the variant

            // Return a success response
            return res.status(201).json({
                status: true,
                msg: "Product variant added successfully!",
                data: newVariant
            });

        } catch (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                msg: "An error occurred while adding the product variant."
            });
        }
    }

    // Service method to update Product Variant
    updateProductVariant = async (req, res) => {
        try {
            const variant_id = req.params.id; // Get the ID from the URL params
            const updatedData = req.body; // Get the updated fields from the request body

            // Ensure there is data to update
            if (Object.keys(updatedData).length === 0) {
                return res.status(400).json({
                    status: false,
                    message: 'No data provided to update',
                });
            }

            // Find the existing product variant by ID to retain the existing fields
            const existingProductVariant = await productVariantRepository.getProductVariantById(variant_id);

            if (!existingProductVariant) {
                return res.status(404).json({
                    status: false,
                    message: 'Product variant not found',
                });
            }

            // Merge the existing product variant with the new data
            const mergedData = { ...existingProductVariant.toObject(), ...updatedData };

            // Call the repository method to update the variant with the merged data
            const updatedProductVariant = await productVariantRepository.updateProductVariantById(variant_id, mergedData);

            return res.status(200).json({
                status: true,
                message: 'Product variant updated successfully',
                data: updatedProductVariant,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: error.message,
            });
        }
    };

    // Service method to delete Product Variant
    // delete product variant by ID
    deleteProductVariant = async (req, res) => {
        try {
            const variant_id = req.params.id; // Get the ID from URL params
            const productVariant = await productVariantRepository.deleteProductVariantById(variant_id);

            if (!productVariant) {
                return res.status(404).json({
                    status: false,
                    message: 'Product variant not found',
                });
            }

            return res.status(200).json({
                status: true,
                message: 'Product variant deleted successfully',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: error.message,
            });
        }
    };
}

module.exports = new ProductService;