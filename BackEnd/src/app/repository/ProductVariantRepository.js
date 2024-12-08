const ProductVariant = require('../model/ProductVariant');

class ProductVariantRepository {
    getProductVariantByProductId = (product_id) => {
        return ProductVariant.find({ product_id })
            .then(productVariant => productVariant)
            .catch(err => console.log(err));
    }

    deleteProductVariantByProductId = (product_id) => {
        return ProductVariant.deleteOne({ product_id })
            .then(value => value)
            .catch(err => console.log(err));
    }

    getProductVariantById = (variant_id) => {
        return ProductVariant.findById(variant_id)
            .populate({
                path: 'product_id',
                populate: { path: 'category_id' }
            })
            .then(productVariant => productVariant)
            .catch(err => console.log(err));
    };

    getAllProductVariants = () => {
        return ProductVariant.find()
            .populate({
                path: 'product_id',
                populate: {
                    path: 'category_id',
                }
            })
            .then(productVariants => productVariants)
            .catch(err => console.log(err));
    }

    // Add a new product variant to the database
    addProductVariant = (variantData) => {
        const productVariant = new ProductVariant(variantData); // Create a new ProductVariant instance
        return productVariant
            .save()  // Save the variant to the database
            .then(savedVariant => savedVariant)  // Return the saved variant
            .catch(err => {
                console.error(err);
                throw new Error('Error adding product variant');  // Error handling
            });
    };

    // Update a product variant
    // Repository method to update product variant by ID
    updateProductVariantById = (variant_id, updatedData) => {
        return ProductVariant.findByIdAndUpdate(
            variant_id,
            { $set: updatedData },
            { new: true } // Return the updated document
        )
            .then(updatedVariant => updatedVariant)
            .catch(err => console.log(err));
    };

    // Delete product variant by ID
    deleteProductVariantById = (variant_id) => {
        return ProductVariant.findByIdAndDelete(variant_id)
            .then((productVariant) => {
                return productVariant;
            })
            .catch((err) => {
                console.log(err);
                return null; // In case of an error, return null
            });
    };

    getTotalProductVariant = () => {
        return ProductVariant.countDocuments()
            .then(value => {
                console.log('Total Product Variants:', value); // Debug log
                return value;
            })
            .catch(err => {
                console.error('Error counting product variants:', err);
                return 0;
            });
    };
}


module.exports = new ProductVariantRepository;