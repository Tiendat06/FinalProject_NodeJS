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
}

module.exports = new CouponService;