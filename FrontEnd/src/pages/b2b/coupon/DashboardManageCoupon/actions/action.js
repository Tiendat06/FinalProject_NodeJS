import {
    GET_COUPON,
    SET_COUPON,
    ON_CHANGE_DATA,
    UPDATE_COUPON,
    ADD_COUPON,
    DELETE_COUPON
} from '../constansts/constansts';

export const getCoupons = payLoad => {
    return {
        type: GET_COUPON,
        payLoad
    }
}

export const setCoupon = payLoad => {
    return {
        type: SET_COUPON,
        payLoad
    }
}

export const onChangeData = payLoad => {
    return {
        type: ON_CHANGE_DATA,
        payLoad
    }
}

export const updateCouponData = payLoad => {
    return {
        type: UPDATE_COUPON,
        payLoad
    }
}

export const addCoupon = payLoad => {
    return {
        type: ADD_COUPON,
        payLoad
    }
}

export const deleteCoupon = payLoad => {
    return {
        type: DELETE_COUPON,
        payLoad
    }
}