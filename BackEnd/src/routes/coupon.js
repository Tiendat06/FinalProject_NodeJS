const express = require('express')
const router = express.Router()

const couponController = require('../app/controllers/CouponController')

router.get('/', couponController.getAllCoupons)
router.get('/:id', couponController.getCouponById)

module.exports = router