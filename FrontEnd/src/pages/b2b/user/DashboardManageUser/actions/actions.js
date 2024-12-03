import {GET_USERS, ON_CHANGE_DATA, REMOVE_USER, SET_USER, UPDATE_USER} from '../constansts/constansts';

export const getUsers = payLoad => {
    return {
        type: GET_USERS,
        payLoad,
    }
}

export const setUser = payLoad => {
    return {
        type: SET_USER,
        payLoad,
    }
}

export const onChangeData = payLoad => {
    return {
        type: ON_CHANGE_DATA,
        payLoad,
    }
}

export const updateUserData = payLoad => {
    return {
        type: UPDATE_USER,
        payLoad,
    }
}

export const removeUser = payLoad => {
    return {
        type: REMOVE_USER,
        payLoad,
    }
}