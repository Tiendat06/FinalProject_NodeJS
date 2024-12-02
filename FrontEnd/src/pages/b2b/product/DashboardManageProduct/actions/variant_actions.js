import {
    GET_PRODUCTS_VARIANT,
    ON_CHANGE_VARIANT_DATA,
    SET_PRODUCTS_VARIANT,
    UPDATE_VARIANT_DATA,
    ADD_VARIANT_DATA,
    DELETE_VARIANT_DATA
} from "../constansts/constansts";

export const getProductsVariant = payLoad => {
    return {
        type: GET_PRODUCTS_VARIANT,
        payLoad,
    }
}

export const setProductsVariant = payLoad => {
    return {
        type: SET_PRODUCTS_VARIANT,
        payLoad,
    }
}

export const onChangeVariantData = payLoad => {
    return {
        type: ON_CHANGE_VARIANT_DATA,
        payLoad,
    }
}

export const updateVariantData = payLoad => {
    return {
        type: UPDATE_VARIANT_DATA,
        payLoad,
    }
}

export const addProductVariantData = payLoad => {
    return {
        type: ADD_VARIANT_DATA,
        payLoad,
    }
}

export const deleteProductVariantData = payLoad => {
    return {
        type: DELETE_VARIANT_DATA,
        payLoad,
    }
}