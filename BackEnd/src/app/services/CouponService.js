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
            msg: 'Load coupon successfully!',
        });
    }

    createCoupon = async (req, res) => {
        const coupon = req.body;
        const newCoupon = await couponRepository.createCoupon(coupon);

        const createdCoupon = await couponRepository.getCouponById(newCoupon._id);

        return res.status(200).json({
            status: true,
            data: createdCoupon,
            msg: 'Create coupon successfully!',
        });
    }

    updateCoupon = async (req, res) => {
        try {
            const id = req.params.id;
            const couponUpdates = req.body;

            // Ensure that the request body is not empty
            if (!couponUpdates || Object.keys(couponUpdates).length === 0) {
                return res.status(400).json({
                    status: false,
                    msg: 'No data provided for update!',
                });
            }

            // Define the list of valid fields for update
            const validFields = ['coupon_name', 'description', 'code', 'point', 'discount', 'expiredAt'];

            // Check if all keys in the request body are valid
            const invalidFields = Object.keys(couponUpdates).filter(field => !validFields.includes(field));

            if (invalidFields.length > 0) {
                return res.status(400).json({
                    status: false,
                    msg: `Invalid fields provided: ${invalidFields.join(', ')}`,
                });
            }

            // Check if the coupon exists
            const existedCoupon = await couponRepository.getCouponById(id);
            if (!existedCoupon) {
                return res.status(404).json({
                    status: false,
                    msg: 'Coupon not found!',
                });
            }

            // Update fields dynamically if they exist and are valid
            validFields.forEach((field) => {
                if (couponUpdates[field] !== undefined && couponUpdates[field] !== null && couponUpdates[field] !== '') {
                    existedCoupon[field] = couponUpdates[field];
                }
            });

            delete existedCoupon._id;
            delete existedCoupon.createdAt;

            existedCoupon.updatedAt = new Date();

            // Save the updated coupon
            const updatedCoupon = await couponRepository.updateCoupon(id, existedCoupon);

            return res.status(200).json({
                status: true,
                data: updatedCoupon,
                msg: 'Coupon updated successfully!',
            });
        } catch (error) {
            console.error('Error updating coupon:', error);
            return res.status(500).json({
                status: false,
                msg: 'An error occurred while updating the coupon.',
            });
        }
    };

    deleteCoupon = async (req, res) => {
        const id = req.params.id;
        const coupon = await couponRepository.getCouponById(id);
        if (!coupon) {
            return res.status(404).json({
                status: false,
                msg: 'Coupon not found!',
            });
        }

        await couponRepository.deleteCoupon(id);
        return res.status(200).json({
            status: true,
            msg: 'Delete coupon successfully!',
            deletedCoupon: coupon,
        });
    }
}

module.exports = new CouponService;