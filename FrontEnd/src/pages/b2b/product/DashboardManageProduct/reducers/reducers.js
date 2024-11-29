import {SET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ON_CHANGE_DATA} from '../constansts/constansts';

export const initState = {
    product: {},
    productData: [],
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            newState = {
                ...state,
                productData: [...action.payLoad]
            }
            break;
        case ON_CHANGE_DATA:
            newState = {
                ...state,
                product: {...state.product, ...action.payLoad}
            }
            break;
        case SET_PRODUCT:
            newState = {
                ...state,
                product: {...action.payLoad}
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }

    return newState;
}

export default reducer;