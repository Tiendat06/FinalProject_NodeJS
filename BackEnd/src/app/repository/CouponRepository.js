const Coupon = require('../model/Coupon');

class CouponRepository {

    getCoupons = () => {
        return Coupon.find()
            .then(coupons => coupons)
            .catch(error => console.log(error));
    }

    getCouponByCode = (code, inputPoint) => {
        return Coupon.findOne({code, point: {$lte: inputPoint}})
            .then(coupon => coupon)
            .catch(error => console.log(error));
    }

    getCouponById = (_id) => {
        return Coupon.findOne({_id})
            .then(coupon => coupon)
            .catch(error => console.log(error));
    }
}

module.exports = new CouponRepository;