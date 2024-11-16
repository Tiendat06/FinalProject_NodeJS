const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const siteMiddleWare = require('../app/middlewares/SiteMiddleware');
const checkLogin = require('../app/auth/checkLogin');

// [GET]
router.get('/', siteMiddleWare.index);


module.exports = router;