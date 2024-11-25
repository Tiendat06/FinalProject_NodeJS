const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const userRepository = require('../repository/UserRepository');
const accountRepository = require('../repository/AccountRepository');
const bcrypt = require('bcrypt');

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