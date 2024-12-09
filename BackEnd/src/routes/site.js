const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const siteMiddleWare = require('../app/middlewares/SiteMiddleWare');
const checkLogin = require('../app/auth/checkLogin');

router.get('/', siteMiddleWare.index, siteController.index);
// topfav
router.get('/topfav', siteMiddleWare.index, siteController.getTopWishListedProducts);
// topselling
router.get('/topselling', siteMiddleWare.index, siteController.getTopSellingProducts);
// topreviewed
router.get('/topreviewed', siteMiddleWare.index, siteController.getTopReviewedProducts);

router.get('/dashboard', siteController.getDashboardData);

module.exports = router;