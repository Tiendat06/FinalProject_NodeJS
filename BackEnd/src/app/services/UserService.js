const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const userRepository = require('../repository/UserRepository');

const orderRepository = require('../repository/OrderRepository');

const err = require("multer/lib/multer-error");

class UserService {
    updateUserProfile = async (req, res) => {
        // console.log()
        const {id} = req.params;
        const filePath = req.file ? req.file.path : null;
        const {name, email, birthday, phoneNumber, gender} = req.body;
        const error = req.flash('error');

        const cloudinaryFolderName = 'NodeJS_FinalProject/user';

        const user = await userRepository.getUserById(id);
        let image_link = user.profile_image;

        try {
            if(error.length !== 0) throw new Error(error[0]);
            if(filePath) {
                const cloudinaryResult = await cloudinary.uploader.upload(filePath, {
                    folder: cloudinaryFolderName,
                    resource_type: 'image'
                })
                image_link = cloudinaryResult.secure_url;

                fs.unlink(filePath, (err) => {
                    if (err) {
                        throw new Error(err.message)
                    }
                });
            }

            const userUpdateData = {
                _id: id,
                fullName: name,
                email, gender, birthday, phone: phoneNumber,
                profile_image: image_link,
                updatedAt: Date.now()
            }
            const userUpdate = await userRepository.updateUserById(userUpdateData);
            if(!userUpdate.acknowledged) throw new Error('Update profile failed !');

            return res.status(200).json({
                status: true,
                msg: 'Update profile successfully !',
                profile_image: image_link
            })
        } catch (e) {
            fs.unlink(filePath, (err) => {
                if (err) {
                    throw new Error(err.message)
                }
            });
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
    ///View user profile
    getUserProfile = async (req, res) => {
        const { id } = req.params;
        try {
            const user = await userRepository.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    status: false,
                    msg: 'User not found'
                });
            }
            return res.status(200).json({
                status: true,
                user
            });
        } catch (e) {
            return res.status(500).json({
                status: false,
                msg: e.message
            });
        }
    }

    getPurchaseHistory = async (req, res) => {
        const userId = req.userData._id;
        try {
            const orders = await orderRepository.getOrdersByUserId(userId);
            if (!orders || orders.length === 0) {
                return res.status(404).json({
                    status: false,
                    msg: 'No purchase history found'
                });
            }
            return res.status(200).json({
                status: true,
                orders
            });
        } catch (e) {
            return res.status(500).json({
                status: false,
                msg: e.message
            });
        }
    }

    getPurchaseDetails = async (req, res) => {
        const { orderId } = req.params;
        const userId = req.userData._id;
        try {
            const order = await orderRepository.getOrderByIdAndUserId(orderId, userId);
            if (!order) {
                return res.status(404).json({
                    status: false,
                    msg: 'Order not found'
                });
            }
            return res.status(200).json({
                status: true,
                order
            });
        } catch (e) {
            return res.status(500).json({
                status: false,
                msg: e.message
            });
        }
    }


    
}

module.exports = new UserService;