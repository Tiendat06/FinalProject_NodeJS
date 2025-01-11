const productRepository = require('../repository/ProductRepository');
const productVariantRepository = require('../repository/ProductVariantRepository');
const commentRepository = require('../repository/CommentRepository');
const wishListRepository = require('../repository/WishListRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');
const productCategoryRepository = require('../repository/ProductCategoryRepository');
const ratingRepository = require('../repository/RatingRepository');
const orderRepository = require('../repository/OrderRepository');
const orderDetailsRepository = require('../repository/OrderDetailsRepository');
const paymentRepository = require('../repository/PaymentRepository');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');


class ProductService {

    getAllProducts = async (req, res) => {
        const products = await productRepository.getAllProducts();
        const category = await productCategoryRepository.getAllCategory();
        return res.status(200).json({
            status: true,
            data: products,
            category,
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
            const fiveStarDoc = await ratingRepository.getRatingCountByStar(5, id);
            const fourStarDoc = await ratingRepository.getRatingCountByStar(4, id);
            const threeStarDoc = await ratingRepository.getRatingCountByStar(3, id);
            const twoStarDoc = await ratingRepository.getRatingCountByStar(2, id);
            const oneStarDoc = await ratingRepository.getRatingCountByStar(1, id);

            const commentList = await commentRepository.getCommentByProductId(product_id);
            const comment = commentList.filter(item => item.parent_id === null);
            const rating = await ratingRepository.getRatingByProductId(product_id);
            let totalStar = 0;
            let length = 0;
            let starAvg = 0;

            if (rating.length !== 0) {
                length = rating.length;
                totalStar = rating.reduce((sum, cmt) => sum + cmt.star, 0);
                starAvg = (totalStar / length).toFixed(0);
            }
            // console.log(starAvg);
            return res.status(200).json({
                status: true,
                product, productVariants, top4Products, starAvg, comment, commentList,
                countStar: {
                    fiveStarDoc,
                    fourStarDoc,
                    threeStarDoc,
                    twoStarDoc,
                    oneStarDoc,
                    totalRating: rating.length
                }
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    commentProduct = async (req, res) => {
        let { user_id, product_id, star, content, parent_id } = req.body;
        const error = req.flash('error');
        // console.log(parent_id);
        const commentData = {
            user_id, content, product_id, parent_id: parent_id === ''? null: parent_id
        }

        let comment = '';
        let previousComment = '';
        let subComments = [];
        let commentList = [];
        if(error.length === 0) {
            comment = await commentRepository.insertComment(commentData);
            const comment_id = comment[0]._id;
            previousComment = await commentRepository.getCommentById(comment_id);
            commentList = await commentRepository.getCommentByProductId(product_id);
            // const comment = commentList.filter(item => item.parent_id === null);
            // console.log('parent id: ', parent_id);
            if(parent_id !== ''){
                subComments = await commentRepository.getSubCommentByParentCommentId(parent_id);
                // console.log(subComments);
            }
        }

        try {
            if (error.length !== 0) throw new Error(error[0]);
            if (comment.length === 0) throw new Error('Comment failed !');

            // find product variant
            const product_variant = await productVariantRepository.getProductVariantByProductId(product_id);
            if(product_variant.length === 0) throw new Error('Product not found!');
            const product_variant_id = product_variant.map(variant => variant._id)

            // find order id
            const order = await orderRepository.getOrdersByUserId(user_id);
            if(order.length === 0) throw new Error('You also can rating while you have payment on this product!');
            const order_id = order.map(o => o._id);

            // check order details with order id and product id
            const order_details = await orderDetailsRepository.checkOrderDetailsRelatedToOrderIdAndProductId(order_id, product_variant_id);

            const matchingOrderId = order_details.map(detail => detail.order_id);
            if(matchingOrderId.length === 0) throw new Error('You also can rating while you have payment on this product!');

            const payment = await paymentRepository.checkPaymentOrderRelatedOrderId(matchingOrderId);
            if(payment.length === 0) throw new Error('You also can rating while you have payment on this product!');

            // console.log(star);
            if(Number(star) === 0) {
                star = 1;
            }
            if(parent_id === ''){
                const ratingData = {
                    user_id, product_id, star: Number(star)
                }
                const rating = await ratingRepository.insertRating(ratingData);
                if(rating.length === 0) throw new Error('Rating failed !');
            }

            return res.status(200).json({
                status: true,
                data: previousComment,
                subComments,
                commentList,
                previousComment,
                msg: 'Thanks for your comment!'
            })
        } catch (e) {
            if(comment.length > 0) {
                return res.status(200).json({
                    status: true,
                    data: previousComment,
                    msg: e.message
                })
            } else{
                return res.status(400).json({
                    status: false,
                    data: comment[0] || '',
                    msg: e.message
                })
            }
        }
    }

    addProductV2 = async (req, res) => {
        const {product_name, product_price, variant_quantity, product_color,
            category_id, variant_RAM, variant_ROM, variant_operation_system,
            variant_chipset, variant_graphic_card, variant_screen,
            variant_cpu, variant_weight, product_description} = req.body;

        const error = req.flash('error');
        try {
            if(error.length !== 0) throw new Error(error[0]);

            const filePath = req.file ? req.file.path : null;

            const productData = {
                product_name, category_id, product_description, product_price,
            };
            console.log(productData);

            const cloudinaryFolderName = 'NodeJS_FinalProject/products/phones';
            let image_link = '';

            // if (error.length !== 0) throw new Error(error[0]);
            if (filePath) {
                try {
                    const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                        folder: cloudinaryFolderName,
                        chunk_size: 6000000,
                        // resource_type: 'image'
                    });
                    image_link = cloudinaryResult.secure_url;
                } catch (cloudError) {
                    return res.status(500).json({
                        status: false,
                        msg: 'Error uploading image to Cloudinary: ' + cloudError.message,
                    });
                } finally {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Failed to delete temp file:', err.message);
                        }
                    });
                }

            }

            productData.product_img = image_link;
            //add
            const newProduct = await productRepository.createProduct(productData);

            // Populate the category_id field
            const populatedProduct = await productRepository.getProductById(newProduct._id);

            const product_id = newProduct._id;
            const variantData = {
                product_id, product_name, product_color,
                variant_quantity, product_image: productData.product_img, retail_price: product_price,
                variant_ROM, variant_RAM, variant_operation_system, variant_chipset,
                variant_graphic_card, variant_screen, variant_cpu, variant_weight
            }
            const newVariant = await productVariantRepository.addProductVariant(variantData);

            return res.status(201).json({
                status: true,
                msg: 'Product created successfully',
                data: populatedProduct,
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    deleteProductV2 = async (req, res) => {
        try {
            const product_id = req.params.id;
            const product = await productRepository.getProductById(product_id);
            if (!product) {
                return res.status(404).json({ status: false, msg: 'Product not found' });
            }

            if (product.product_img) {
                try {
                    const publicId = product.product_img
                        .split('/')
                        .pop()
                        .split('.')[0];
                    console.log('publicId:', publicId);

                    //delete old image
                    await cloudinary.uploader.destroy('NodeJS_FinalProject/products/phones/' + publicId).then(result => { console.log(result) }).catch(error => { console.log(error) });
                } catch (err) {
                    throw new Error('Failed to delete old image from Cloudinary:', err.message);
                    // console.warn('Failed to delete old image from Cloudinary:', err.message);
                }
            }
            const deletedProduct = await productRepository.deleteProduct(product_id);

            const deletedProductVariant = await productVariantRepository.deleteProductVariantByProductId(product_id);
            if(!deletedProductVariant.acknowledged) throw new Error('Delete product variant failed !');

            return res.status(200).json({
                status: true,
                msg: 'Product deleted successfully',
                data: deletedProduct,
            });
        } catch (err) {
            console.error('Error deleting product:', err.message);
            return res.status(400).json({
                status: false,
                msg: err.message,
            });
        }
    }

    getVariantByProductId = async (req, res) => {
        const {product_id} = req.params;
        const error = req.flash('error');
        try {
            if(error.length !== 0) throw new Error(error[0]);
            const productVariant = await productVariantRepository.getProductVariantByProductId(product_id);
            return res.status(200).json({
                status: true,
                data: productVariant,
                msg: 'Load variants successfully',
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
                    msg: 'Product variant not found',
                });
            }

            return res.status(200).json({
                status: true,
                data: productVariant,
                msg: 'Product variant fetched successfully',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                msg: error.message,
            });
        }
    };

    //Add a product variant
    async addProductVariant(req, res) {
        try {
            const filePath = req.file ? req.file.path : null;

            const variantData = req.body;  // Extract the variant data from the request body
            console.log(variantData);

            const { product_id } = variantData;

            if (!product_id) {
                return res.status(400).json({ status: false, msg: "Product ID is required!" });
            }

            // Check if the product_id exists in the Product collection
            const product = await productRepository.getProductById(product_id);

            if (!product) {
                return res.status(400).json({ status: false, msg: "Invalid product ID. Product does not exist!" });
            }

            const cloudinaryFolderName = 'NodeJS_FinalProject/products/phones';
            let image_link = '';

            if (filePath !== null) {
                try {
                    const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                        folder: cloudinaryFolderName,
                        resource_type: 'image',
                        chunk_size: 6000000
                    });
                    image_link = cloudinaryResult.secure_url;
                } catch (cloudError) {
                    return res.status(500).json({
                        status: false,
                        msg: 'Error uploading image to Cloudinary: ' + cloudError.message,
                    });
                } finally {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Failed to delete temp file:', err.message);
                        }
                    });
                }
            }

            variantData.product_image = image_link;


            // Proceed with adding the variant if product_id is valid
            const newVariant = await productVariantRepository.addProductVariant(variantData);  // Use the repository to add the variant

            const poplulateVariantProduct = await productVariantRepository.getProductVariantById(newVariant._id);
            // Return a success response
            return res.status(201).json({
                status: true,
                msg: "Product variant added successfully!",
                data: poplulateVariantProduct
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
            // if (Object.keys(updatedData).length === 0) {
            //     return res.status(400).json({
            //         status: false,
            //         msg: 'No data provided to update',
            //     });
            // }

            if (updatedData.product_id) {
                const product = await productRepository.getProductById(updatedData.product_id);
                if (!product) {
                    return res.status(400).json({
                        status: false,
                        msg: 'Invalid product ID. Product does not exist!',
                    });
                }
            }
            // Find the existing product variant by ID to retain the existing fields
            const existingProductVariant = await productVariantRepository.getProductVariantById(variant_id);

            if (!existingProductVariant) {
                return res.status(404).json({
                    status: false,
                    msg: 'Product variant not found',
                });
            }

            if (req.file) {
                const filePath = req.file.path;
                const cloudinaryFolderName = 'NodeJS_FinalProject/products/phones';
                let newImageLink;

                try {
                    const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                        folder: cloudinaryFolderName,
                        resource_type: 'image',
                        chunk_size: 6000000
                    });

                    newImageLink = cloudinaryResult.secure_url;
                    updatedData.product_image = newImageLink;
                } catch (error) {
                    return res.status(500).json({
                        status: false,
                        msg: 'Error uploading image to Cloudinary: ' + error.message,
                    });
                } finally {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Failed to delete temp file:', err.message);
                        }
                    });
                }

                if (existingProductVariant.product_image) {
                    try {
                        const publicId = existingProductVariant.product_image
                            .split('/')
                            .pop()
                            .split('.')[0];
                        console.log('publicId:', publicId);

                        //delete old image
                        await cloudinary.uploader.destroy('NodeJS_FinalProject/products/phones/' + publicId).then(result => { console.log(result) }).catch(error => { console.log(error) });
                    } catch (err) {
                        console.warn('Failed to delete old image from Cloudinary:', err.message);
                    }
                }
            } else{
                updatedData.product_image = existingProductVariant.product_image
            }

            // Merge the existing product variant with the new data
            const mergedData = { ...existingProductVariant.toObject(), ...updatedData };

            delete mergedData._id; // Remove the _id field to prevent update errors
            delete mergedData.createdAt; // Remove the createdAt field to prevent update errors

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
            const productVariant = await productVariantRepository.getProductVariantById(variant_id); // Find the product variant by ID

            if (!productVariant) {
                return res.status(404).json({
                    status: false,
                    message: 'Product variant not found',
                });
            }

            if (productVariant.product_image) {
                try {
                    const publicId = productVariant.product_image
                        .split('/')
                        .pop()
                        .split('.')[0];
                    console.log('publicId:', publicId);

                    //delete old image
                    await cloudinary.uploader.destroy('NodeJS_FinalProject/products/phones/' + publicId).then(result => { console.log(result) }).catch(error => { console.log(error) });
                } catch (err) {
                    console.warn('Failed to delete old image from Cloudinary:', err.message);
                }
            }

            const deletedProductVariant = await productVariantRepository.deleteProductVariantById(variant_id); // Delete the product variant by ID

            return res.status(200).json({
                status: true,
                msg: 'Product variant deleted successfully',
                data: deletedProductVariant,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                msg: error.message,
            });
        }
    };

    async createProduct(req, res) {
        try {
            const filePath = req.file ? req.file.path : null;

            const productData = req.body;
            console.log(productData);
            const { category_id } = productData;

            const productCategory = await productRepository.getProductCategoryById(category_id);

            if (!productCategory) {
                return res.status(400).json({
                    status: false,
                    msg: 'Invalid category ID. Category does not exist!'
                });
            }

            // const error = req.flash('error');
            const cloudinaryFolderName = 'NodeJS_FinalProject/products/phones';
            let image_link = '';

            // if (error.length !== 0) throw new Error(error[0]);
            if (filePath != null) {
                try {
                    const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                        folder: cloudinaryFolderName,
                        resource_type: 'image',
                        chunk_size: 6000000
                    });
                    image_link = cloudinaryResult.secure_url;
                } catch (cloudError) {
                    return res.status(500).json({
                        status: false,
                        msg: 'Error uploading image to Cloudinary: ' + cloudError.message,
                    });
                } finally {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Failed to delete temp file:', err.message);
                        }
                    });
                }

            }

            productData.product_img = image_link;
            //add
            const newProduct = await productRepository.createProduct(productData);

            // Populate the category_id field
            const populatedProduct = await productRepository.getProductById(newProduct._id);

            return res.status(201).json({
                status: true,
                msg: 'Product created successfully',
                data: populatedProduct,
            });

        } catch (error) {
            return res.status(500).json({ status: false, msg: 'Error creating product: ' + error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const product_id = req.params.id;
            const updateData = req.body;

            // Validate product existence
            const existingProduct = await productRepository.getProductById(product_id);
            if (!existingProduct) {
                return res.status(404).json({ status: false, msg: 'Product not found' });
            }

            // Handle image upload
            if (req.file) {
                const filePath = req.file.path;
                const cloudinaryFolderName = 'NodeJS_FinalProject/products/phones';
                let newImageLink;

                try {
                    const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                        folder: cloudinaryFolderName,
                        resource_type: 'image',
                        chunk_size: 6000000
                    });

                    newImageLink = cloudinaryResult.secure_url;
                    updateData.product_img = newImageLink;
                } catch (error) {
                    return res.status(500).json({
                        status: false,
                        msg: 'Error uploading image to Cloudinary: ' + error.message,
                    });
                } finally {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error('Failed to delete temp file:', err.message);
                        }
                    });
                }

                // Remove old image from Cloudinary
                if (existingProduct.product_img) {
                    try {
                        const publicId = existingProduct.product_img
                            .split('/')
                            .pop()
                            .split('.')[0];
                        console.log('publicId:', publicId);

                        //delete old image
                        await cloudinary.uploader.destroy('NodeJS_FinalProject/products/phones/' + publicId).then(result => { console.log(result) }).catch(error => { console.log(error) });
                    } catch (err) {
                        console.warn('Failed to delete old image from Cloudinary:', err.message);
                    }
                }
            } else{
                updateData.product_img = existingProduct.product_img;
            }

            // Validate fields in updateData
            const invalidFields = [];
            for (const key in updateData) {
                if (key === "img_file") continue;
                if (updateData[key] === "" || updateData[key] === null || updateData[key] === undefined) {
                    invalidFields.push(key);
                }
            }

            if (invalidFields.length > 0) {
                return res.status(400).json({
                    status: false,
                    msg: 'Validation failed: Some fields are empty or invalid',
                    invalidFields,
                });
            }

            // Merge update data
            const updatedProductData = { ...existingProduct.toObject(), ...updateData };

            // Protect sensitive fields
            delete updatedProductData._id;
            delete updatedProductData.createdAt;


            // Update product in repository
            const updatedProduct = await productRepository.updateProduct(product_id, updatedProductData);

            return res.status(200).json({
                status: true,
                msg: 'Product updated successfully',
                data: updatedProduct,
            });
        } catch (err) {
            console.error('Error updating product:', err.message);
            return res.status(500).json({
                status: false,
                msg: 'An error occurred while updating the product. Please try again later.',
            });
        }
    }

    async deleteProduct(req, res) {
        try {
            const product_id = req.params.id;
            const product = await productRepository.getProductById(product_id);
            if (!product) {
                return res.status(404).json({ status: false, msg: 'Product not found' });
            }

            if (product.product_img) {
                try {
                    const publicId = product.product_img
                        .split('/')
                        .pop()
                        .split('.')[0];
                    console.log('publicId:', publicId);

                    //delete old image
                    await cloudinary.uploader.destroy('NodeJS_FinalProject/products/phones/' + publicId).then(result => { console.log(result) }).catch(error => { console.log(error) });
                } catch (err) {
                    console.warn('Failed to delete old image from Cloudinary:', err.message);
                }
            }
            const deletedProduct = await productRepository.deleteProduct(product_id);
            return res.status(200).json({
                status: true,
                msg: 'Product deleted successfully',
                data: deletedProduct,
            });
        } catch (err) {
            console.error('Error deleting product:', err.message);
            return res.status(500).json({
                status: false,
                msg: 'An error occurred while deleting the product. Please try again later.',
            });
        }
    }

    getProductCategory = async (req, res) => {
        try {
            const category = await productCategoryRepository.getAllCategory();
            return res.status(200).json({
                status: true,
                data: category,
                msg: 'Product category found !',
            })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    addProductCategory = async (req, res) => {
        console.log('hi world')
        const {category_name, description} = req.body;
        const error = req.flash('error');

        try {
            const categoryData = await productCategoryRepository.insertProductCategory({category_name, description});
            if(categoryData.length === 0) throw new Error(error[0]);
            // console.log(categoryData);

            return res.status(200).json({
                status: true,
                data: categoryData[0],
                msg: 'Product category added successfully',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    updateProductCategory = async (req, res) => {
        const {category_name, description} = req.body;
        const {id} = req.params;
        const error = req.flash('error');
        try {
            if(error.length > 0) throw new Error(error[0]);

            const category = await productCategoryRepository.getCategoryById(id);
            if(!category) throw new Error('Category not found !');

            const updateData = {
                _id: id,
                category_name, description
            }
            const categoryUpdate = await productCategoryRepository.updateProductCategory(updateData);
            if(!categoryUpdate.acknowledged) throw new Error('Update category failed !');

            const categoryUpdated = await productCategoryRepository.getCategoryById(id);

            return res.status(200).json({
                status: true,
                data: categoryUpdated,
                msg: 'Product category updated successfully',
            })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    deleteProductCategory = async (req, res) => {
        const {id} = req.params;

        try {
            const category = await productCategoryRepository.getCategoryById(id);
            if(!category) throw new Error('Category not found !');

            const deletedCategory = await productCategoryRepository.deleteProductCategory(id);
            if(!deletedCategory.acknowledged) throw new Error('Delete category failed !');
            return res.status(200).json({
                status: true,
                data: category,
                msg: 'Product category deleted successfully',
            })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }
}
module.exports = new ProductService;