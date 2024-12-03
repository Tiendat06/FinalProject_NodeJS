import {GET_ACCOUNT, UPDATE_ACCOUNT_BANNING} from '../constansts/constansts';

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