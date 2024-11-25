const express = require('express');
const router = express.Router();
const checkLogin = require('../app/auth/checkLogin');
const addressValidator = require('../app/validators/AddressValidator');
const addressMiddleWare = require('../app/middlewares/AddressMiddleWare');
const addressController = require('../app/controllers/AddressController');

router.get('/user/profile', checkLogin, addressMiddleWare.index, addressController.index);

router.post('/user/profile', checkLogin, addressValidator.checkAllAddressFields,
    addressMiddleWare.add_user_address, addressController.add_user_address);

router.put('/user/profile/:id', checkLogin, addressValidator.checkAllAddressFields,
    addressMiddleWare.update_user_address, addressController.update_user_address);

router.delete('/user/profile/:id', checkLogin, addressValidator.checkIdField, addressMiddleWare.delete_user_address, addressController.delete_user_address)

module.exports = router;