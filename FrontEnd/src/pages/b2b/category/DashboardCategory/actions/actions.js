import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORY,
    ON_CHANGE_DATA,
    SET_CATEGORY,
    UPDATE_CATEGORY
} from "../constansts/constansts";

export const getCategories = payLoad => {
    return {
        type: GET_CATEGORY,
        payLoad
    }
}

export const onChangeData = payLoad => {
    return {
        type: ON_CHANGE_DATA,
        payLoad
    }
}

export const setCategory = payLoad => {
    return {
        type: SET_CATEGORY,
        payLoad
    }
}

export const addCategoryData = payLoad => {
    return {
        type: ADD_CATEGORY,
        payLoad
    }
}

export const updateCategoryData = payLoad => {
    return {
        type: UPDATE_CATEGORY,
        payLoad
    }
}

export const deleteCategoryData = payLoad => {
    return {
        type: DELETE_CATEGORY,
        payLoad
    }
}