const express = require('express');
const router = express.Router();
const logMiddleWare = require('../app/middlewares/LogMiddleWare');
const logController = require('../app/controllers/LogController');
const logValidator = require('../app/validators/LogValidator');

router.post('/login', logValidator.login_POST, logMiddleWare.login, logController.login);

router.post('/register', logValidator.register_POST, logMiddleWare.register, logController.register)

router.post('/logout', logController.logout);

module.exports = router;