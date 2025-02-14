import {GET_ACCOUNT, UPDATE_ACCOUNT_BANNING, UPDATE_ACCOUNT_ROLE} from '../constansts/constansts';

export const getAccounts = payLoad => {
    return {
        type: GET_ACCOUNT,
        payLoad
    }
}

export const updateAccountBanning = payLoad => {
    return {
        type: UPDATE_ACCOUNT_BANNING,
        payLoad
    }
}

export const updateAccountRole = payLoad => {
    return {
        type: UPDATE_ACCOUNT_ROLE,
        payLoad
    }
}