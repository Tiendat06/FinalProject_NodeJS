import {ADD_SUB_COMMENT, SET_SUB_COMMENT, GET_SUB_COMMENT} from '../constansts/constansts';

export const initialState = {
    subComment: '',
    subCommentsList: [],
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case SET_SUB_COMMENT:
            newState = {
                ...state,
                subComment: action.payLoad,
            }
            break;
        case ADD_SUB_COMMENT:
            newState = {
                ...state,
                subCommentsList: [...state.subCommentsList, action.payLoad],
            }
            break;
        case GET_SUB_COMMENT:
            newState = {
                ...state,
                subCommentsList: [...action.payLoad],
            }
            break;
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
    console.log(newState);
    return newState;
}

export default reducer;