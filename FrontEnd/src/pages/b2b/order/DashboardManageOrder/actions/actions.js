import {GET_ORDER, SET_ORDER} from '../constansts/constansts';

export const getOrders = payLoad => {
    return {
        type: GET_ORDER,
        payLoad
    }
}

export const setOrder = payLoad => {
    return {
        type: SET_ORDER,
        payLoad
    }
}