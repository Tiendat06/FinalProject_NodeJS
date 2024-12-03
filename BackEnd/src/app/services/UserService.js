const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const userRepository = require('../repository/UserRepository');



const err = require("multer/lib/multer-error");

const accountRepository = require('../repository/AccountRepository');
const bcrypt = require('bcrypt');


class UserService {

    getAllUsers = async (req, res) => {
        const users = await userRepository.getAllUsers();
        res.status(200).json({
            status: true,
            data: users
        });
    }

    updateUserProfile = async (req, res) => {
        // console.log()
        const {id} = req.params;
        const filePath = req.file ? req.file.path : null;
        const {name, email, birthday, phoneNumber, gender, point} = req.body;
        const error = req.flash('error');
        let userPoint = point;
        console.log(filePath);

        const cloudinaryFolderName = 'NodeJS_FinalProject/user';

        const user = await userRepository.getUserById(id);
        if(!user) throw new Error('User not found !');

        let image_link = user.profile_image;
        if(!point) {
            userPoint = user.point;
        }

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
                profile_image: image_link, point: userPoint,
                updatedAt: Date.now()
            }
            const userUpdate = await userRepository.updateUserById(userUpdateData);
            if(!userUpdate.acknowledged) throw new Error('Update profile failed !');

            const user = await userRepository.getUserById(id);

            return res.status(200).json({
                status: true,
                msg: 'Update profile successfully !',
                data: user,
                profile_image: image_link
            })
        } catch (e) {
            if(filePath){
                fs.unlink(filePath, (err) => {
                    if (err) {
                        throw new Error(err.message)
                    }
                });
            }

            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    deleteUser = async (req, res) => {
        const {id} = req.params;
        try {
            const user = await userRepository.getUserById(id);
            if(!user) throw new Error('User not found !');

            const account = await accountRepository.getAccountByUserId(id);
            if(!account) throw new Error('Account not found !');

            const deletedUser = await userRepository.hardDeleteById(id);
            if(!deletedUser.acknowledged) throw new Error('Delete user failed !');

            const deletedAccount = await accountRepository.hardDeleteAccountByUserId(id);
            if(!deletedAccount.acknowledged) throw new Error('Delete account failed !');

            return res.status(200).json({
                status: true,
                data: user,
                msg: 'Deleted user successfully !',
            })

        } catch (e) {
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


    userChangePassword = async (req, res) => {
        const {newPassword, user_id} = req.body;
        const error = req.flash('error');
        // console.log(error);
        try {
            if(error.length !== 0) throw new Error(error[0]);
            const hashPassword = await bcrypt.hash(newPassword, 10);

            const changePassUpdate = await accountRepository.changePasswordByUserId(user_id, hashPassword);
            if (!changePassUpdate.acknowledged) throw new Error('Change password failed !');

            return res.status(200).json({
                status: true,
                msg: 'Change password successfully !',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
    
}

module.exports = new UserService;