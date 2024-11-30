import {GET_CART, UPDATE_CART, DELETE_CART, SET_QUANTITY, SET_CART, SET_CART_LIST} from '../constansts/constansts'

export const setCartList = payLoad => {
    return {
        type: SET_CART_LIST,
        payLoad
    }
}

export const setCart = payLoad => {
    return {
        type: SET_CART,
        payLoad
    }
}

export const setQuantity = payLoad => {
    return {
        type: SET_QUANTITY,
        payLoad
    }
}

export const getCart = payLoad => {
    // console.log(payLoad)
    return {
        type: GET_CART,
        payLoad
    }
}

export const updateCart = payLoad => {
    return {
        type: UPDATE_CART,
        payLoad
    }
}

export const deleteCart = payLoad => {
    return {
        type: DELETE_CART,
        payLoad
    }
}