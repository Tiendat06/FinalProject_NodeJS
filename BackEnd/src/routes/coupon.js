const express = require('express')
const router = express.Router()

const couponController = require('../app/controllers/CouponController')
const { addCouponValidator, handleValidationCoupon } = require('../app/validators/AddCouponValidator')
const { updateCoupon, handleValidationUpdateCoupon } = require('../app/validators/UpdateCouponValidator')

router.get('/', couponController.getAllCoupons)
router.get('/:id', couponController.getCouponById)
router.post('/', addCouponValidator, handleValidationCoupon, couponController.createCoupon)
router.put('/:id', updateCoupon, handleValidationUpdateCoupon, couponController.updateCoupon)
router.delete('/:id', couponController.deleteCoupon)
module.exports = router