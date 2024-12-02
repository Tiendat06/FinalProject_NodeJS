import {GET_ORDER_DETAIL} from '../constansts/constansts';

export const getOrderDetailsData = payLoad => {
    return {
        type: GET_ORDER_DETAIL,
        payLoad,
    }
}