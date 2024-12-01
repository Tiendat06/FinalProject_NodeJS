const couponService = require('../services/CouponService');

class CouponController {
  getAllCoupons = async (req, res) => {
    return await couponService.getAllCoupons(req, res);
  }

  getCouponById = async (req, res) => {
    return await couponService.getCouponById(req, res);
  }

}

module.exports = new CouponController;
