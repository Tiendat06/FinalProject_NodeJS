import {GET_ACCOUNT, UPDATE_ACCOUNT_BANNING} from '../constansts/constansts';

export const initState = {
    account: {},
    accountList: [],
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_ACCOUNT:
            newState = {
                ...state,
                accountList: [...action.payLoad]
            }
            break;
        case UPDATE_ACCOUNT_BANNING:
            let newUpdate = [...state.accountList];
            newState = {
                ...state,
                accountList: newUpdate.map(item =>
                    item._id ===action.payLoad._id ?
                    {...item, ...action.payLoad} : item)
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    return newState;
}

export default reducer;