const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const siteMiddleWare = require('../app/middlewares/SiteMiddleware');

// [GET]
router.get('/', siteMiddleWare.index);


module.exports = router;