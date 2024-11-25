import {SET_ADDRESS, GET_ADDRESS, ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS, ON_CHANGE_DATA} from "../constants/constants";

export const onChangeData = payLoad => {

    return {
        type: ON_CHANGE_DATA,
        payLoad
    }
}

export const getAddresses = payLoad => {
    return {
        type: GET_ADDRESS,
        payLoad
    }
}

export const setAddress = payLoad => {
    // console.log(payLoad);

    return {
        type: SET_ADDRESS,
        payLoad
    }
}

export const addAddress = payLoad => {
    return {
        type: ADD_ADDRESS,
        payLoad
    }
}

export const updateAddress = payLoad => {
    return {
        type: UPDATE_ADDRESS,
        payLoad
    }
}

export const deleteAddress = payLoad => {
    return {
        type: DELETE_ADDRESS,
        payLoad
    }
}