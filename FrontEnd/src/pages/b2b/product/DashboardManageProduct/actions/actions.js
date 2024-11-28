import {GET_PRODUCTS, SET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ON_CHANGE_DATA} from '../constansts/constansts'

export const onChangeData = payLoad => {
    return {
        type: ON_CHANGE_DATA,
        payLoad
    }
}

export const getProducts = payLoad => {
    return {
        type: GET_PRODUCTS,
        payLoad,
    }
}

export const setProduct = payLoad => {
    return {
        type: SET_PRODUCT,
        payLoad,
    }
}

export const addProduct = payLoad => {
    return {
        type: ADD_PRODUCT,
        payLoad,
    }
}

export const updateProduct = payLoad => {
    return {
        type: UPDATE_PRODUCT,
        payLoad,
    }
}

export const deleteProduct = payLoad => {
    return {
        type: DELETE_PRODUCT,
        payLoad,
    }
}