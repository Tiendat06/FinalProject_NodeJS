import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORY,
    ON_CHANGE_DATA,
    SET_CATEGORY,
    UPDATE_CATEGORY
} from "../constansts/constansts";

export const initState = {
    category: {},
    categoryList: [],
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_CATEGORY:
            newState = {
                ...state,
                categoryList: [...action.payLoad],
            }
            break;
        case ON_CHANGE_DATA:
            newState = {
                ...state,
                category: {...state.category, ...action.payLoad}
            }
            break;
        case SET_CATEGORY:
            newState = {
                ...state,
                category: {...action.payLoad}
            }
            break;
        case ADD_CATEGORY:
            newState = {
                ...state,
                categoryList: [...state.categoryList, action.payLoad],
            }
            break;
        case UPDATE_CATEGORY:
            let newUpdate = [...state.categoryList];
            newState = {
                ...state,
                categoryList: newUpdate.map(item =>
                    item._id === action.payLoad._id ?
                    {...item, ...action.payLoad} : item),
            }
            break;
        case DELETE_CATEGORY:
            let newDelete = [...state.categoryList];
            newDelete = newDelete.filter(item => item._id !== action.payLoad._id);
            newState = {
                ...state,
                categoryList: newDelete,
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    console.log(newState);
    return newState;
}

export default reducer;