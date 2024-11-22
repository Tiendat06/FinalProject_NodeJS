const roleRepository = require('../repository/RoleRepository');
const userRepository = require('../repository/UserRepository');
const accountRepository = require('../repository/AccountRepository');
const addressRepository = require('../repository/AddressRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailer = require('nodemailer');

class LogService {

    checkLogin = async (req, res) => {
        let error = req.flash('error');
        try{
            if(error.length === 0) {
                const {phone, password} = req.body;
                const userData = await userRepository.getUserByPhone(phone);
                if(userData){
                    const user_id = userData._id;
                    const accountData = await accountRepository.getAccountByUserId(user_id);
                    const hashPassword = accountData.password;
                    console.log({
                        password, hashPassword
                    })
                    const match = await bcrypt.compare(password, hashPassword);
                    if(match){
                        const token = jwt.sign({
                            userData, accountData
                        }, process.env.JWT_SECRET_KEY,{
                            expiresIn: '1d'
                        });

                        res.cookie('token', token, {
                            httpOnly: true,
                            secure: true,
                            sameSite: 'strict',
                            maxAge: 24 * 60 * 60 * 1000 // 1 day
                        });
                        const role = await roleRepository.getRoleByRoleId(accountData.role_id);
                        const returnObject = {...userData.toObject(), role_name: role.role_name};
                        // console.log(returnObject);
                        return res.status(200).json({
                            status: true,
                            msg: 'Login Successfully !',
                            userData: returnObject
                        })
                    } else{
                        throw new Error('Invalid phone number or password!');
                    }
                } else{
                    throw new Error('Invalid phone number or password!');
                }
            } else{
                throw new Error(error[0]);
            }
        } catch (err){
            console.error(err.message);
            return res.json({
                status: false,
                msg: err.message,
            });
        }
    }

    registerAccount = async (req, res) => {
        let error = req.flash('error');
        try{
            if(error.length === 0) {
                const {fullName, phone, password, birthday, gender, email, address} = req.body;
                const hashPassword = bcrypt.hashSync(password, 10);
                const role = await roleRepository.getRoleByRoleName('Customer');

                const userJson = {
                    fullName, email, gender, phone, birthday,
                    profile_image: 'https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png'
                }
                const userResult = await userRepository.insertUserRegister(userJson);
                const user_id = userResult[0]._id;

                const accountJson = {
                    user_id, role_id: role._id,
                    password: hashPassword
                }
                const accountResult = await accountRepository.insertAccountRegister(accountJson);

                const addressJson = {
                    user_id, fullName, address,
                    phone_number: phone,
                    is_default: true
                }
                const addressResult = await addressRepository.insertAddress(addressJson);

                return res.status(201).json({
                    status: true,
                    msg: 'Register Successfully !'
                })
            }else{
                throw new Error(error[0]);
            }
        }catch(err){
            console.log(err.message);
            return res.status(400).json({
                status: false,
                msg: err.message
            });
        }
    }

    forgotPassword = async (req, res) => {
        const error = req.flash('error');
        try {
            if(error.length !== 0) throw new Error(error[0]);
            return this.sendMail(req, res)
                .then(() => {
                    return res.status(200).json({
                        status: true,
                        msg: 'Please check your email !'
                    })
                })
                .catch(e => {
                    throw new Error(e.message);
                })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    sendMail = async (req, res) => {
        const {email} = req.body;

        try {
            const user = await userRepository.getUserByEmail(email);
            if (!user) throw new Error('User is not exists !');
            const user_id = user._id;
            const account = await accountRepository.getAccountByUserId(user_id);
            if(!account) throw new Error('User is not exits !');
            const account_id = account._id;

            const transporter = mailer.createTransport({
                host: process.env.MAIL_SERVER,
                port: process.env.MAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD
                }
            })

            const newPassword = this.generateRandomString(10);
            const hashNewPassword = await bcrypt.hash(newPassword, 10);
            const accountUpdateData = {
                _id: account_id,
                password: hashNewPassword
            }
            const passwordUpdate = await accountRepository.updateAccountById(accountUpdateData);
            if(!passwordUpdate.acknowledged) throw new Error('Send mail failed !');

            const mailOptions = {
                from: process.env.MAIL_USERNAME,
                to: email,
                subject: 'Email Verification',
                html: `<p>This code below is your new password:<br/> ${newPassword}</p>`,
            }
            await transporter.sendMail(mailOptions);

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
}

module.exports = new LogService;