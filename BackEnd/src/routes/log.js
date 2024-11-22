const express = require('express');
const router = express.Router();
const logMiddleWare = require('../app/middlewares/LogMiddleWare');
const logController = require('../app/controllers/LogController');
const logValidator = require('../app/validators/LogValidator');

router.post('/login', logValidator.login_POST, logMiddleWare.login, logController.login);

router.post('/register', logValidator.register_POST, logMiddleWare.register, logController.register)

router.post('/logout', logController.logout);

router.post('/forgot-password', logValidator.emailValidator, logMiddleWare.forgot_password, logController.forgot_password)

router.get('/googleOAuth', logController.get_sign_in_google);

router.post('/googleOAuth', logController.sign_in_google);

router.get('/get-user-data', logController.get_user_data)

module.exports = router;