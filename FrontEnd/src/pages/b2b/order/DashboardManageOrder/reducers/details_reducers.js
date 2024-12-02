import {GET_ORDER_DETAIL} from '../constansts/constansts';

export const detailsInitState = {
    orderDetails: {},
    orderDetailsList: []
}

function details_reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_ORDER_DETAIL:
            newState = {
                ...state,
                orderDetailsList: [...action.payLoad]
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    return newState;
}

export default details_reducer;