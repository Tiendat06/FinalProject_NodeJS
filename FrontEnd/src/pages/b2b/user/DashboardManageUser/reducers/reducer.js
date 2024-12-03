import {GET_USERS, ON_CHANGE_DATA, REMOVE_USER, SET_USER, UPDATE_USER} from '../constansts/constansts';

export const initState = {
    user: {},
    userList: [],
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_USERS:
            newState = {
                ...state,
                userList: [...action.payLoad],
            }
            break;
        case SET_USER:
            newState = {
                ...state,
                user: {...action.payLoad},
            }
            break;
        case ON_CHANGE_DATA:
            newState = {
                ...state,
                user: {...state.user, ...action.payLoad},
            }
            break;
        case UPDATE_USER:
            let newUpdate = [...state.userList];
            newState = {
                ...state,
                userList: newUpdate.map(item =>
                    item._id === action.payLoad._id ?
                    {...item, ...action.payLoad} : item)
            }
            break;
        case REMOVE_USER:
            let newDeleted = [...state.userList];
            newDeleted = newDeleted.filter(item => item._id !== action.payLoad._id);
            newState = {
                ...state,
                userList: newDeleted,
            }
            break;
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
    return newState;
}

export default reducer;