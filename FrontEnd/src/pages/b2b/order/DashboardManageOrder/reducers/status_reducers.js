import {GET_STATUS_DETAIL, UPDATE_STATUS_DETAIL} from '../constansts/constansts';

export const statusInitState = {
    statusDetails: {},
    statusDetailsList: []
}

function status_reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_STATUS_DETAIL:
            newState = {
                ...state,
                statusDetailsList: [...action.payLoad],
            }
            break;
        case UPDATE_STATUS_DETAIL:
            let newUpdateData = [...state.statusDetailsList];
            newState = {
                ...state,
                statusDetailsList: newUpdateData.map(item =>
                    item._id === action.payLoad._id ?
                    {...item, ...action.payLoad} : item),
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    return newState;
}

export default status_reducer;