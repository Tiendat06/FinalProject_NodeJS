const roleRepository = require('../repository/RoleRepository');
const userRepository = require('../repository/UserRepository');
const accountRepository = require('../repository/AccountRepository');
const addressRepository = require('../repository/AddressRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

                        const returnObject = {...userData.toObject(), role_id: accountData.role_id};
                        console.log(returnObject);
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
                const role_id = await roleRepository.getRoleByRoleName('Customer');

                const userJson = {
                    fullName, email, gender, phone, birthday,
                    profile_image: 'https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png'
                }
                const userResult = await userRepository.insertUserRegister(userJson);
                const user_id = userResult[0]._id;

                const accountJson = {
                    user_id, role_id,
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
                msg: 'Register Failed !'
            });
        }
    }
}

module.exports = new LogService;