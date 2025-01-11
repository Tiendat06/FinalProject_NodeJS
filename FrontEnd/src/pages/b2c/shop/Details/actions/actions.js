import {ADD_SUB_COMMENT, SET_SUB_COMMENT, GET_SUB_COMMENT} from '../constansts/constansts';

export const addSubComment = payLoad => {
    return {
        type: ADD_SUB_COMMENT,
        payLoad,
    }
}

export const setSubComment = payLoad => {
    return {
        type: SET_SUB_COMMENT,
        payLoad,
    }
}

export const getSubComments = payLoad => {
    return {
        type: GET_SUB_COMMENT,
        payLoad,
    }
}