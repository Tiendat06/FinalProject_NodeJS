import {
    ADD_COUPON,
    DELETE_COUPON,
    GET_COUPON,
    ON_CHANGE_DATA,
    SET_COUPON,
    UPDATE_COUPON
} from "../constansts/constansts";

export const initState = {
    coupon: {},
    couponList: [],
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_COUPON:
            newState = {
                ...state,
                couponList: [...action.payLoad],
            }
            break;
        case SET_COUPON:
            newState = {
                ...state,
                coupon: {...action.payLoad}
            }
            break;
        case ON_CHANGE_DATA:
            newState = {
                ...state,
                coupon: {...state.coupon, ...action.payLoad}
            }
            break;
        case UPDATE_COUPON:
            let newUpdateCoupon = [...state.couponList];
            newState = {
                ...state,
                couponList: newUpdateCoupon.map(item =>
                    item._id === action.payLoad._id ?
                        {...item, ...action.payLoad} : item)
            }
            break;
        case ADD_COUPON:
            newState = {
                ...state,
                couponList: [...state.couponList, action.payLoad],
            }
            break;
        case DELETE_COUPON:
            let newDeletedCoupon = [...state.couponList];
            newDeletedCoupon = newDeletedCoupon.filter(item => item._id !== action.payLoad._id);
            newState = {
                ...state,
                couponList: newDeletedCoupon
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    console.log(newState);
    return newState;
}

export default reducer;