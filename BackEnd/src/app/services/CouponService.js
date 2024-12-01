const couponRepository = require('../repository/CouponRepository');

class CouponService {

    getAllCoupons = async (req, res) => {
        const coupons = await couponRepository.getCoupons();
        return res.status(200).json({
            status: true,
            data: coupons,
            msg: 'Load coupons successfully !',
        });
    }

    getCouponById = async (req, res) => {
        const { id } = req.params;
        const coupon = await couponRepository.getCouponById(id);
        return res.status(200).json({
            status: true,
            data: coupon,
            msg: 'Load coupon successfully !',
        });
    }
}

module.exports = new CouponService;