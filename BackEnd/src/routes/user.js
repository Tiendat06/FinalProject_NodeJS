const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middlewares/UserMiddleware');
const checkLogin = require('../app/auth/checkLogin');

router.put('/profile/:id', checkLogin, userMiddleWare.update_user_profile, userController.update_user_profile);

module.exports = router;