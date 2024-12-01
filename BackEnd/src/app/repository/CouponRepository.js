const Coupon = require('../model/Coupon');

class CouponRepository {

    getCoupons = () => {
        return Coupon.find()
            .then(coupons => coupons)
            .catch(error => console.log(error));
    }

    getCouponById = (id) => {
        return Coupon.findById(id)
            .then(coupon => coupon)
            .catch(error => console.log(error));
    }

    getCouponByCode = (code, inputPoint) => {
        return Coupon.findOne({ code, point: { $lte: inputPoint } })
            .then(coupon => coupon)
            .catch(error => console.log(error));
    }

    createCoupon = (coupon) => {
        return Coupon.create(coupon)
            .then(coupon => coupon)
            .catch(error => console.log(error));
    }

    updateCoupon = (id, coupon) => {
        return Coupon.findByIdAndUpdate(id, coupon, { new: true }).then(coupon => coupon).catch(error => console.log(error));
    }

    deleteCoupon = (id) => {
        return Coupon.findByIdAndDelete(id).then(coupon => coupon).catch(error => console.log(error));
    }
}

module.exports = new CouponRepository;