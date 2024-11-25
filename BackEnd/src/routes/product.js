const express = require('express');
const router = express.Router();
const productMiddleWare = require('../app/middlewares/ProductMiddleWare');
const productController = require('../app/controllers/ProductController');

router.get('/', productMiddleWare.index, productController.index);

module.exports = router;