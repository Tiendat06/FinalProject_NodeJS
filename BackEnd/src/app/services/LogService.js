const roleRepository = require('../repository/RoleRepository');
const userRepository = require('../repository/UserRepository');
const accountRepository = require('../repository/AccountRepository');
const addressRepository = require('../repository/AddressRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailer = require('nodemailer');
const {OAuth2Client} = require("google-auth-library");

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

    signInGoogle = async (req, res) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
        res.header('Referrer-Policy', 'no-referrer-when-downgrade');

        const redirectUrl = 'http://localhost:3000/log/googleOAuth';

        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
                // 'https://www.googleapis.com/auth/contacts.readonly',
                // 'https://www.googleapis.com/auth/user.birthday.read',
                // 'https://www.googleapis.com/auth/user.gender.read',
                'openid'
            ],
            prompt: 'consent'
        });

        res.json({url: authorizeUrl});
    }

    getSignInGoogle = async (req, res) => {
        const code = req.query.code;

        try {
            const redirectUrl = 'http://localhost:3000/log/googleOAuth';
            const oAuth2Client = new OAuth2Client(
                process.env.CLIENT_ID,
                process.env.CLIENT_SECRET,
                redirectUrl
            );
            const response = await oAuth2Client.getToken(code);
            await oAuth2Client.setCredentials(response.tokens);
            console.log('Tokens acquired');

            const user = oAuth2Client.credentials;
            // console.log('credentials', user);
            const data = await this.getUserData(user.access_token);

            return await this.logInWithGoogle(req, res, data);
        } catch (e) {
            return res.status(401).json({
                status: false,
                msg: 'Error with signing in with Google'
            })
        }
    }

    getUserData = async (access_token) => {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);

        const data = await response.json();
        // console.log('data', data);
        return data;
    }

    logInWithGoogle = async (req, res, data) => {
        const {name, picture, email} = data;
        try {
            if(!await userRepository.getUserByEmail(email)) {
                const userAddData = {
                    fullName: name,
                    email,
                    // profile_image: picture
                }
                const userAdd = await userRepository.insertUserRegister(userAddData);
                if(userAdd.length === 0) throw new Error('Authorize failed !');

                const userAddId = userAddData._id;
                const password = this.generateRandomString(10);
                const hashPassword = await bcrypt.hash(password, 10);

                const user = await userRepository.getUserByEmail(email);
                const user_id = user._id;
                const role = await roleRepository.getRoleByRoleName('Customer');
                const role_id = role._id;

                const accountAddData = {
                    user_id,
                    role_id,
                    password: hashPassword
                }
                const accountAdd = await accountRepository.insertAccountRegister(accountAddData);
                if(accountAdd.length === 0) {
                    await userRepository.hardDeleteById(userAddId);
                    throw new Error('Authorize failed !');
                }
            }

            const user = await userRepository.getUserByEmail(email);
            const user_id = user._id;
            const account = await accountRepository.getAccountByUserId(user_id);
            const token = jwt.sign({
                user, account
            }, process.env.JWT_SECRET_KEY,{
                expiresIn: '1d'
            });

            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            });

            const role = await roleRepository.getRoleByRoleId(account.role_id);
            req.session.returnObject = {...user.toObject(), role_name: role.role_name};

            return res.redirect('http://localhost:5000/');

        } catch (e) {
            return res.status(400).json({
                status: true,
                msg: e.message
            })
        }
    }

    getUserSession = async (req, res) => {
        const {returnObject} = req.session;
        const tempData = returnObject;
        delete req.session.returnObject;

        if(tempData){
            return res.status(200).json({
                status: true,
                data: tempData,
                msg: 'Get user session successfully !'
            })
        }
        return res.status(400).json({
            status: false,
            msg: 'Get user session failed !'
        })
    }
}

module.exports = new LogService;