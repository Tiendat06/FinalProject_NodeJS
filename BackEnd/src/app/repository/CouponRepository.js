const Coupon = require('../model/Coupon');

class CouponRepository {

    getCoupons = () => {
        return Coupon.find()
            .then(coupons => coupons)
            .catch(error => console.log(error));
    }
}

module.exports = new CouponRepository;