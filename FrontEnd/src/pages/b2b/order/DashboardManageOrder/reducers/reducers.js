import {GET_ORDER, SET_ORDER} from '../constansts/constansts';

export const initState = {
    order: {},
    orderList: []
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_ORDER:
            newState = {
                ...state,
                orderList: [...action.payLoad]
            }
            break;
        case SET_ORDER:
            newState = {
                ...state,
                order: {...action.payLoad}
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    return newState;
}

export default reducer;