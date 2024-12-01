const couponService = require('../services/CouponService');

class CouponController {
  getAllCoupons = async (req, res) => {
    return await couponService.getAllCoupons(req, res);
  }

  getCouponById = async (req, res) => {
    return await couponService.getCouponById(req, res);
  }

  createCoupon = async (req, res) => {
    return await couponService.createCoupon(req, res);
  }

  updateCoupon = async (req, res) => {
    return await couponService.updateCoupon(req, res);
  }

  deleteCoupon = async (req, res) => {
    return await couponService.deleteCoupon(req, res);
  }

}

module.exports = new CouponController;
